import { User } from "./user.model";

const getAllUser = async () => {
    const products = await User.find();
    return products;
};


// Retrieve a Specific User by ID
const getUserByToken = async (email: string) => {

    // const tokenWithoutBearer = token.split(' ')[1];

    // const decoded = verifyToken(tokenWithoutBearer,
    //     config.jwt_access_secret as string);

    // const { email } = decoded;

    const user = await User.findOne({ email }).select('name email phone role address').exec();

    // console.log('service teke pailam', user);
    return user;
}





export const UserService = {
    getAllUser,
    getUserByToken
} 