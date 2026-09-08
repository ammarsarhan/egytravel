"use client";

import Button from "@/components/Button";
import { BaseInput, PasswordInput, PhoneInput } from "@/components/Input";
import cn from "@/lib/cn";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { useForm } from "@tanstack/react-form";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type SignInMethod = "phone" | "email";

export default function SignIn() {
    const basePillStyle =
        "relative flex-1 flex items-center justify-center gap-x-2 rounded-full py-2 cursor-pointer transition-colors";

    const form = useForm({
        defaultValues: {
            method: "phone" as SignInMethod,
            phone: "",
            email: "",
            password: "",
        },
    });

    return (
        <div className="flex flex-col gap-y-8 max-w-md">
            <div className="text-center flex flex-col gap-y-1">
                <h1 className="text-3xl font-semibold">
                    Welcome back to Egytravel
                </h1>
                <p className="text-gray-500">
                    Use either your email or your phone number to sign back
                    into your account.
                </p>
            </div>
            <form.Subscribe selector={(state) => state.values.method}>
                {
                    (method) => (
                        <div className="flex w-full bg-gray-100 rounded-full p-2 gap-x-2">
                            <button
                                type="button"
                                onClick={() => form.setFieldValue("method", "phone")}
                                className={cn(
                                    basePillStyle,
                                    method !== "phone" && "hover:bg-gray-50"
                                )}
                            >
                                {
                                    method === "phone" && 
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-white rounded-full"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 35,
                                            }}
                                        />
                                }
                                <span className="relative flex items-center gap-x-2">
                                    <IconPhone size={18} strokeWidth={2} />
                                    <span className="text-sm">Phone number</span>
                                </span>
                            </button>
                            <button
                                type="button"
                                onClick={() => form.setFieldValue("method", "email")}
                                className={cn(
                                    basePillStyle,
                                    method !== "email" && "hover:bg-gray-50"
                                )}
                            >
                                {
                                    method === "email" &&
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-white rounded-full"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 35,
                                            }}
                                        />
                                }
                                <span className="relative flex items-center gap-x-2">
                                    <IconMail size={18} strokeWidth={2} />
                                    <span className="text-sm">Email</span>
                                </span>
                            </button>
                        </div>
                    )
                }
            </form.Subscribe>
            <form.Subscribe selector={(state) => state.values.method}>
                {
                    (method) => (
                        <div className="flex flex-col gap-y-4">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={method}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {
                                        method === "phone" &&
                                        <PhoneInput label="Phone Number" placeholder="Phone" />
                                    }
                                    {
                                        method === "email" &&
                                        <BaseInput label="Email Address" placeholder="Email" />
                                    }
                                </motion.div>
                            </AnimatePresence>
                            <PasswordInput label="Password" placeholder="Password" />
                        </div>
                    )
                }
            </form.Subscribe>
            <Button className="py-3">
                <span className="font-normal text-md">Sign In</span>
            </Button>
            <p className="text-center text-sm text-gray-500">Don&apos;t have an account? <Link href="/auth/sign-up" className="text-black hover:underline">Create one!</Link></p>
        </div>
    );
}
