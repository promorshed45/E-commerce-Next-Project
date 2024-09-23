"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import ReusableForm from "@/components/ReusableForm";
import { Button } from "@/components/ui/button";
import ReusableInput from "@/components/ReusableInput";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { zodResolver } from '@hookform/resolvers/zod';
import loginValidationSchema from "@/schemas/login.schema";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserLogin } from "@/hooks/auth";
import { useEffect } from "react";
import { useUser } from "@/Providers/user.Provider";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect")
    const router = useRouter();
    const {setIsLoading: userLoading } = useUser()
    
    const {mutate: handleUserLogin, isPending, isSuccess} = useUserLogin();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        handleUserLogin(data)
        userLoading(true)
    };

    useEffect(() => {
        if (!!isPending && isSuccess) {
            if (redirect) {
                router.push(redirect);
            } else {
                router.push("/");
            }
        }
    }, [isPending, isSuccess, redirect, router]);
    


    return (
        <section>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

                    <div className="pb-5">
                        <h2 className="text-center text-3xl font-bold leading-tight">
                            Sign in to your account
                        </h2>
                        <p className="my-2 text-center text-sm text-muted-foreground">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="font-semibold text-rose-500 hover:underline">
                                Create a new account
                            </Link>
                        </p>
                    </div>

                    {/* ReusableForm with ReusableInput */}
                    <ReusableForm
                        defaultValues={{
                            "email": "morshed@gmail.com",
                            "password": "admin123"
                        }}
                        onSubmit={onSubmit} resolver={zodResolver(loginValidationSchema)}>
                        <ReusableInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
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

                    <div className="mt-3 space-y-3">
                        <Button variant="outline" className="w-full">
                            <FaGoogle className="mr-2 size-4 text-rose-500" />
                            Sign in with Google
                        </Button>
                        <Button variant="outline" className="w-full">
                            <FaFacebook className="mr-2 size-4 text-blue-700" />
                            Sign in with Facebook
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
