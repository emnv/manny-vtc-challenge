import React from "react";
import { motion } from "framer-motion";

export function GlobalLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-gray-900"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <p className="text-sm font-medium text-gray-600">Loading...</p>
      </div>
    </motion.div>
  );
}
