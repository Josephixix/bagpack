"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        relative overflow-hidden
        px-4 sm:px-8 md:px-12 lg:px-24
        py-5 md:py-20
        bg-[#8B5E3C]
        min-h-[80dvh] md:min-h-[90dvh] lg:min-h-screen
        flex flex-col md:flex-row
        items-center md:items-start
        justify-center md:justify-between
        gap-10
      "
    >
      {/* Text content */}
    {/* Text content */}
<div className="relative z-10 w-full md:w-1/2 max-w-2xl text-left">
  <div className="space-y-6 md:space-y-8 md:pt-10 pt-0">
    <h1
      className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-semibold
        text-white
        leading-tight
        tracking-tighter
      "
    >
      We sell high quality <br /> bag packs
    </h1>

    <p className="text-sm sm:text-base md:text-lg font-medium text-white/90">
      Designed for everyday life — from school to <br />travel. Durable,
      lightweight backpacks built to <br /> keep up with you.
    </p>

    <div className="flex items-center gap-4">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 bg-black text-white hover:bg-neutral-900 transition"
      >
        Contact us
      </Link>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center text-sm font-medium text-black underline-offset-4 hover:underline"
      >
        View designs
      </Link>
    </div>
  </div>
</div>


      {/* Image content */}
      <div className="relative z-10 w-full md:w-1/2 max-w-md h-[45dvh] sm:h-[55dvh] md:h-[60dvh] lg:h-[75dvh]">
        <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-blue-500/5 to-orange-400/5 -z-10" />
        <Image
          src="/hero.jpg"
          alt="backpack showcase"
          fill
          className="object-cover object-center rounded-xl shadow-xl"
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
          priority={false}
        />
      </div>
    </motion.section>
  );
}
