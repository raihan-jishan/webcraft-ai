"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const btnPrimary = ({ icon, text }) => {
  return (
    <Link href={"/"} className="hover:scale-95 transition-all">
      <motion.button
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className="px-4 py-1 rounded-xl  relative radial-gradient  max-lg:px-2 max-lg:py-1 capitalize font-semibold "
      >
        <span className="text-black tracking-wide   h-full w-full   text-xl relative linear-mask flex gap-3 max-lg:gap-1 max-lg:text-[1rem] ">
          {text} {icon}
        </span>
        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
      </motion.button>
    </Link>
  );
};
const navigateBtn = ({ icon, text, path, pxMedium, roundedFull }) => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link
        href={path}
        className={`bg-white flex   w-full text-black  ${
          roundedFull ? "rounded-full" : "rounded-lg"
        } text-xl font-semibold py-2  mt-4    gap-5 hover:scale-95 transition-all ${
          pxMedium ? "px-14 max-lg:px-3" : "px-28"
        }`}
      >
        {text}
      </Link>
    </div>
  );
};

const SubscribeBtn = ({ text }) => {
  return (
    <button
      type="submit"
      className="py-3 px-5 w-full text-sm  text-center text-black font-semibold rounded-lg   cursor-pointer bg-primary border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary dark:bg-primary-600 dark:hover:scale-95 transition-all dark:focus:ring-primary-800 "
    >
      {text}
    </button>
  );
};
export { btnPrimary, navigateBtn, SubscribeBtn };

