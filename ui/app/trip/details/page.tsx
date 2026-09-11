"use client";

import Button from "@/components/Button";
import { BaseInput } from "@/components/Input";
import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";
import { IconX } from "@tabler/icons-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Trip() {
  return (
    <motion.div
      className="h-screen flex flex-col gap-y-4 bg-black text-white"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.nav
        variants={item}
        className="grid grid-cols-[1fr_min(32rem,90vw)_1fr] items-center gap-x-8 py-6 px-8 lg:px-20 mt-4 border-b border-neutral-900 z-99"
      >
        <Logo className="bg-white" extended containerStyle="text-white" />
        <div className="px-4">
          <ProgressBar index={1} />
        </div>
        <div className="flex items-center justify-end">
          <button className="size-9 rounded-full bg-neutral-100 flex items-center justify-center cursor-pointer opacity-50">
            <IconX color="#000" size={16}/>
          </button>
        </div>
      </motion.nav>
      <motion.div variants={item} className="fixed w-screen h-screen top-0 left-0 p-8 flex flex-col items-center justify-center">
        <span className="text-md text-neutral-200">Step 2 of 5</span>
        <div className="my-4 max-w-1/2 flex flex-col gap-y-3 text-center">
          <h1 className="text-5xl font-semibold">We need some details to confirm your trip</h1>
          <p className="text-neutral-200">What would you like us to address you as?</p>
        </div>
        <div className="w-md flex flex-col gap-y-4 my-4">
          <BaseInput label="First Name" placeholder="First name" className="text-black bg-slate-100 w-full"/>
          <BaseInput label="Last Name" placeholder="Last name" className="text-black bg-slate-100 w-full"/>
          <div className="mt-6 flex items-center justify-center">
            <Button variant="secondary" className="px-8 py-3 w-fit">
              <span>Next</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}