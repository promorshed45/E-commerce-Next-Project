import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import config from "../../config";
import jwt from "jsonwebtoken";
import { createToken, isPasswordMatched, verifyToken } from "./auth.util";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { sendEmail } from "../../utils/sendEmail";
import bcrypt from 'bcrypt'
import { imageUpload } from "../../utils/imageUpload";

// Creates a new user into database
const createUserIntoDB = async (file: any, payload: TUser) => {

  // Check if this user exists in the database
  const existingUser = await User.findOne({ email: payload.email });

  if (existingUser) {
    throw new AppError(httpStatus.BAD_REQUEST, "User already exists");
  }

  // Extract name and email for imageName
  const { name, email } = payload;
  const imageName = `${name}_${email}`;

  // Assuming file.path is provided by the caller
  const path = file?.path;

 // Upload image to Cloudinary
 const { secure_url } = await imageUpload(imageName, path);
 

 // Set profileImage field in payload
 payload.profileImage = secure_url as string;

  // Create new user in the database
  const newUser = await User.create(payload);
  console.log("new user", newUser);
  return newUser;
};

// Login User with email & password use jwt token
const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select("+password");


  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await isPasswordMatched(
    payload.password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Password not matched");
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(jwtPayload, config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in,
    }
  );

  const { password, ...userData } = user.toObject();

  return {
    accessToken,
    refreshToken,
    user: userData
  };
};

// create refresh token
const refreshToken = async (token: string) => {
  // checking if the given token is valid
  const decoded = verifyToken(token, config.jwt_refresh_secret as string);

  const { email } = decoded;

  // checking if the user is exist
  // Check if this user exists in the database
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  // checking if the user is already deleted
  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  }

  // checking if the user is blocked
  const userStatus = user?.status;

  if (userStatus === 'block') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};


// Delete a Product
const softDeleteUser = async (userId: string) => {
  const result = await User.findByIdAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
  return result;
}


// Reset forgetPassword
const forgetPassword = async (email: string) => {
  // Check if this user exists in the database
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not exists in database");
  }

  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted!')
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const resetToken = createToken(jwtPayload, config.jwt_access_secret as string, '10m')
  const resetUiLink = `http://localhost:3000?email=${user.email}&token=${resetToken}`

  sendEmail(user.email, resetUiLink)
  console.log(resetUiLink);
};


// Reset forgetPassword
const resetPassword = async (payload: { email: string, newPassword: string }, token: string) => {

  // Check if this user exists in the database
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not exists in database");
  }

  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted!')
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const decoded = verifyToken(token,
    config.jwt_refresh_secret as string);

  if (user.email !== decoded.email) {
    throw new AppError(httpStatus.FORBIDDEN, 'Your are forbiden')
  }

  // hash new password
  const newHasedPassword = await bcrypt.hash(
    payload?.newPassword, Number(config.bcrypt_salt_rounds)
  )

  await User.findOneAndUpdate({ email: user.email, role: user.role },
    {
      password: newHasedPassword, needesPassworeChnage: false,
      passwordChangeAt: new Date()
    })


  const resetToken = createToken(jwtPayload, config.jwt_access_secret as string, '10m')
  const resetUiLink = `http://localhost:3000?email=${user.email}&token=${resetToken}`

  sendEmail(user.email, resetUiLink)
};

export const AuthServices = {
  createUserIntoDB,
  loginUser,
  refreshToken,
  softDeleteUser,
  forgetPassword,
  resetPassword
};