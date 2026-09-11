"use client";

import Button from "@/components/Button";
import { BaseInput, PasswordInput, PhoneInput } from "@/components/Input";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";

export default function SignUp() {
    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
        },
    });

    return (
        <div className="flex flex-col gap-y-8 max-w-md">
            <div className="text-center flex flex-col gap-y-1">
                <h1 className="text-3xl font-semibold">
                    Create your account
                </h1>
                <p className="text-gray-500">
                    Fill in your details below to get started with Egytravel.
                </p>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-4">
                    <BaseInput label="First Name" placeholder="First name" containerStyle="flex-1" />
                    <BaseInput label="Last Name" placeholder="Last name" containerStyle="flex-1" />
                </div>
                <BaseInput label="Email Address" placeholder="Email" type="email" />
                <PhoneInput label="Phone Number" placeholder="Phone" />
                <PasswordInput label="Password" placeholder="Password" />
            </div>
            <Button className="py-3">
                <span className="font-normal text-md">Sign Up</span>
            </Button>
            <p className="text-center text-sm text-gray-500">Already have an account? <Link href="/auth/sign-in" className="text-black hover:underline">Sign in!</Link></p>
        </div>
    );
}