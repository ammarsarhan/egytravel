"use client";

import Button from "@/components/Button";
import { BaseInput } from "@/components/Input";
import Logo from "@/components/Logo";
import { IconChevronRight } from "@tabler/icons-react";
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
        className="flex items-center justify-between py-4 px-8 lg:px-20 my-1"
      >
        <Logo className="bg-white" extended containerStyle="text-white" />
      </motion.nav>
      <div className="h-full">
        <motion.div variants={item} className="col-span-1 flex items-center justify-center">

        </motion.div>
      </div>
    </motion.div>
  );
}