import { motion } from 'motion/react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[9999] bg-[#D9D4D1] flex items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full max-w-xs px-8">
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-auto"
          >
            <source src="/loadin-screen.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-3xl md:text-4xl font-cinzel text-[#6A5636] uppercase tracking-[0.3em] font-bold text-center"
        >
          Tavira Roots
        </motion.h1>
      </div>
    </motion.div>
  );
}
