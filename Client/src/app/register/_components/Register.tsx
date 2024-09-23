"use client";
import Link from "next/link";
import ReusableForm from "@/components/ReusableForm";
import { Button } from "@/components/ui/button";
import ReusableInput from "@/components/ReusableInput";
import { zodResolver } from "@hookform/resolvers/zod";
import ReusableTextarea from "@/components/ReusableTextarea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import userRegistrationValidationSchema from "@/schemas/register.schema";
import { useUserRegistration } from "@/hooks/auth";

const Register = () => {
  const {mutate: handleUserRegistration} = useUserRegistration();
  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => { 

    const userData = {
        ...data,
        role: "user",
        profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    }
    console.log("ui form hote", userData);
    handleUserRegistration(userData);
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="pb-5">
            <h2 className="text-center text-3xl font-bold leading-tight">
              Create a new account
            </h2>
            <p className="my-2 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-primary text-rose-500 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* ReusableForm with ReusableInput */}
          <ReusableForm
            defaultValues={{
              name: "Morshed",
              phone: "01851363745",
              email: "morshed@gmail.com",
              address: "Pahartali",
              password: "admin123"
            }}
            onSubmit={onSubmit}
            resolver={zodResolver(userRegistrationValidationSchema)}
          >
            <ReusableInput
              label="Name"
              name="name"
              type="name"
              placeholder="Enter your name"
              required
            />

            <ReusableInput
              label="Phone Number"
              name="phone"
              type="phone"
              placeholder="Enter your phone"
              required
            />

            <ReusableInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <ReusableTextarea
              label="Address"
              name="address"
              placeholder="Enter your Address"
              rows={3}
              required
            />

            <ReusableInput
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              required
            />

            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
          </ReusableForm>
        </div>
      </div>
    </section>
  );
};

export default Register;
