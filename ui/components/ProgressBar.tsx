"use client";

import { motion } from "framer-motion";

const stepLabels = ["Destination", "Details", "Contact", "Preferences", "Review"];

interface ProgressBarProps {
    index: number;
}

export default function ProgressBar({ index }: ProgressBarProps) {
    const progress = stepLabels.length > 1 ? index / (stepLabels.length - 1) : 0;

    return (
        <div className="w-full">
            <div className="relative h-0.5 w-full rounded-full bg-white/15">
                <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-sky-400 to-[#2314CE]"
                    initial={false}
                    animate={{ width: `${progress * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <motion.div
                    className="absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#2314CE] shadow-[0_0_8px_rgba(35,20,206,0.6)]"
                    initial={false}
                    animate={{ left: `calc(${progress * 100}% - 6px)` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>
        <div className="relative mt-4 h-5">
            {
                stepLabels.map((step, i) => {
                    const stepPosition = stepLabels.length > 1 ? i / (stepLabels.length - 1) : 0;
                    return (
                        <span
                            key={step}
                            style={{ left: `${stepPosition * 100}%` }}
                            className={
                                "absolute -translate-x-1/2 whitespace-nowrap text-sm " +
                                (i === index
                                    ? "font-semibold text-white"
                                    : i < index
                                    ? "font-medium text-neutral-300"
                                    : "font-medium text-neutral-600")
                            }
                        >
                            {step}
                        </span>
                    );
                })
            }
        </div>
        </div>
    );
};
