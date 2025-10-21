import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export function GlowingButton({ children, onClick, variant = 'primary', className = '' }: GlowingButtonProps) {
  const colors = {
    primary: {
      bg: 'bg-[#A259FF]',
      shadow: 'shadow-[0_0_20px_rgba(162,89,255,0.5)]',
      hover: 'hover:shadow-[0_0_30px_rgba(162,89,255,0.8)]'
    },
    secondary: {
      bg: 'bg-[#39FF14]',
      shadow: 'shadow-[0_0_20px_rgba(57,255,20,0.5)]',
      hover: 'hover:shadow-[0_0_30px_rgba(57,255,20,0.8)]'
    },
    accent: {
      bg: 'bg-[#00FFFF]',
      shadow: 'shadow-[0_0_20px_rgba(0,255,255,0.5)]',
      hover: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]'
    }
  };

  const colorScheme = colors[variant];

  return (
    <motion.button
      onClick={onClick}
      className={`${colorScheme.bg} ${colorScheme.shadow} ${colorScheme.hover} text-black px-8 py-3 rounded-full transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          `0 0 20px rgba(162,89,255,0.5)`,
          `0 0 30px rgba(162,89,255,0.7)`,
          `0 0 20px rgba(162,89,255,0.5)`
        ]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {children}
    </motion.button>
  );
}
