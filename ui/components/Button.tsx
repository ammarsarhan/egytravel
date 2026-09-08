import cn from "@/lib/cn";
import { ReactNode } from "react";

type ButtonVariant =  "primary" | "secondary";

interface ButtonProps {
    variant?: ButtonVariant;
    className?: string;
    children: ReactNode;
}

export default function Button({ variant = "primary", className, children } : ButtonProps) {
    const base = "px-4 py-2 items-center justify-center rounded-full text-sm font-semibold cursor-pointer transition-all";

    switch (variant) {
        case "primary": {
            return (
                <button className={cn(base, className, "bg-black text-white hover:bg-gray-900")}>
                    {children}
                </button>
            )
        }
        case "secondary": {
            return (
                <button className={cn(base, className, "bg-white text-black hover:bg-gray-200")}>
                    {children}
                </button>
            )
        }
    }
}