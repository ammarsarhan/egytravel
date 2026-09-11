"use client";

import Image from "next/image";
import DatePicker from "@/components/DatePicker";
import Navbar from "@/components/Navbar";
import { IconMapPinFilled } from "@tabler/icons-react";
import LocationPicker from "@/components/LocationPicker";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen bg-white relative overflow-hidden">
      <Navbar />
      <div className="h-full grid grid-cols-5 p-16 gap-x-8">
        <div className="flex items-center justify-center col-span-3 mx-6">
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-2">
              <IconMapPinFilled size={24} />
              <span className="font-semibold mr-1">Alexandria, EG</span>
              <button className="cursor-pointer flex items-center justify-center">
                <span className="underline text-sm text-gray-700 hover:text-black transition-all font-light">
                  Select
                </span>
              </button>
            </div>
            <h1 className="text-5xl font-semibold">Plan your next trip with Egytravel</h1>
            <div className="flex flex-col gap-y-6 my-4">
              <DatePicker />
              <LocationPicker
                icon={<IconMapPinFilled size={20} />}
                label="From"
                sublabel="Pickup Location"
                target="100 Wadea Bashour Street"
              />
              <LocationPicker icon={<IconMapPinFilled size={20} />} label="To" sublabel="Dropoff" />
            </div>
            <div className="flex items-center gap-x-6">
              {!expanded ? (
                <motion.button
                  layoutId="next-pill"
                  layout
                  onClick={() => setExpanded(true)}
                  style={{ borderRadius: 9999 }}
                  className="w-fit px-8 py-3.5 bg-black text-white cursor-pointer flex items-center justify-center"
                  transition={{
                    layout: { duration: 0.7, ease: "easeInOut" },
                    borderRadius: { duration: 0.7, ease: "easeInOut" },
                    backgroundColor: { duration: 0.7, ease: "easeInOut" },
                  }}
                >
                  Next
                </motion.button>
              ) : (
                <div
                  aria-hidden
                  className="invisible w-fit px-8 py-3.5 flex items-center justify-center"
                >
                  Next
                </div>
              )}
              <Link href="/auth/sign-in">
                <span className="underline text-md">Log in to see your recent activity</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="w-full h-full relative">
            <Image src="/assets/hero.jpg" alt="Hero" objectFit="cover" fill />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            layoutId="next-pill"
            layout
            style={{ borderRadius: 0 }}
            className="fixed inset-0 bg-black z-50"
            transition={{
              layout: { duration: 0.7, ease: "easeInOut" },
              borderRadius: { duration: 0.7, ease: "easeInOut" },
            }}
            onLayoutAnimationComplete={() => router.push("/trip/details")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
