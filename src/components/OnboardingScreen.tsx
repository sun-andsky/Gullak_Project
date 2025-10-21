import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coins, TrendingUp, GraduationCap, ChevronRight } from 'lucide-react';
import { GlowingButton } from './GlowingButton';
import { FloatingParticles } from './FloatingParticles';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Coins,
    title: 'Save Pocket Change',
    description: 'Auto-invest spare change from daily expenses',
    color: '#A259FF'
  },
  {
    icon: TrendingUp,
    title: 'Invest Smartly',
    description: 'AI helps you grow with micro-SIPs',
    color: '#00FFFF'
  },
  {
    icon: GraduationCap,
    title: 'Learn & Grow',
    description: 'Gamified lessons to build finance confidence',
    color: '#39FF14'
  }
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="relative h-full bg-gradient-to-b from-[#0a0015] via-[#1a0a2e] to-[#0a0015] flex flex-col overflow-hidden">
      <FloatingParticles />
      
      <div className="flex-1 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              className="relative mb-8"
              animate={{
                boxShadow: [
                  `0 0 20px ${slides[currentSlide].color}80`,
                  `0 0 40px ${slides[currentSlide].color}`,
                  `0 0 20px ${slides[currentSlide].color}80`
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div
                className="rounded-full p-12"
                style={{ background: `${slides[currentSlide].color}20` }}
              >
                <CurrentIcon
                  className="w-20 h-20"
                  style={{ color: slides[currentSlide].color }}
                />
              </div>
            </motion.div>

            <h2 className="text-white mb-4">{slides[currentSlide].title}</h2>
            <p className="text-gray-400 max-w-xs">{slides[currentSlide].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pb-12 px-6 space-y-6">
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className="h-1 rounded-full"
              style={{
                width: currentSlide === index ? 32 : 8,
                backgroundColor: currentSlide === index ? '#A259FF' : '#ffffff30'
              }}
              animate={{
                width: currentSlide === index ? 32 : 8,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <GlowingButton onClick={nextSlide}>
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            <ChevronRight className="inline ml-2 w-5 h-5" />
          </GlowingButton>
        </div>
      </div>
    </div>
  );
}
