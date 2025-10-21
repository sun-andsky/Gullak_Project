import { motion } from 'motion/react';

export function AnimatedCoin({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="inline-block"
      initial={{ y: -50, opacity: 0, rotate: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1, 
        rotate: 360 
      }}
      transition={{
        delay,
        duration: 0.8,
        rotate: {
          duration: 1,
          ease: "easeOut"
        }
      }}
    >
      <motion.span
        className="text-2xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }}
      >
        🪙
      </motion.span>
    </motion.div>
  );
}
