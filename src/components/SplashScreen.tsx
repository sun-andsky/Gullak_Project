import { motion } from 'motion/react';
import { FloatingParticles } from './FloatingParticles';
import logoImage from 'figma:asset/dc6e590041cb518208079933d3e7e68cd60893ac.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      className="relative h-full bg-gradient-to-b from-[#0a0015] via-[#1a0a2e] to-[#0a0015] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => setTimeout(onComplete, 2000)}
    >
      <FloatingParticles />
      
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(162,89,255,0.5)',
              '0 0 60px rgba(162,89,255,0.8)',
              '0 0 20px rgba(162,89,255,0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="rounded-3xl p-8"
        >
          <img src={logoImage} alt="Gullak Logo" className="w-32 h-32" />
        </motion.div>
      </motion.div>

      <motion.h1
        className="mt-8 bg-gradient-to-r from-[#A259FF] via-[#00FFFF] to-[#39FF14] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Gullak
      </motion.h1>

      <motion.p
        className="mt-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Save Smart. Invest Small. Grow Big.
      </motion.p>
    </motion.div>
  );
}
