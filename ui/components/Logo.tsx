import cn from "@/lib/cn";
import Link from "next/link";

export default function Logo({ className, containerStyle, extended = false } : { className: string, containerStyle?: string, extended?: boolean }) {
    const base = "size-6";

    return (
        <Link href="/" className={cn(containerStyle, "flex items-center gap-x-3.5")}>
            <div className={cn(base, className)}></div>
            {
                extended &&
                <span className="font-semibold text-base">Egytravel</span>
            }
        </Link>
    )
}