import { motion } from 'motion/react';
import { Mail, Chrome, Apple } from 'lucide-react';
import { GlowingButton } from './GlowingButton';
import { FloatingParticles } from './FloatingParticles';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface LoginScreenProps {
  onLogin: () => void;
  onSignup: () => void;
}

export function LoginScreen({ onLogin, onSignup }: LoginScreenProps) {
  return (
    <div className="relative h-full bg-gradient-to-b from-[#0a0015] via-[#1a0a2e] to-[#0a0015] flex flex-col overflow-hidden">
      <FloatingParticles />
      
      <div className="flex-1 flex flex-col justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400">Your money, made smart.</p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#ffffff10] border-[#A259FF50] text-white placeholder:text-gray-500 focus:border-[#A259FF] focus:ring-[#A259FF50] rounded-xl h-12"
              />
            </div>

            <div className="relative">
              <Input
                type="password"
                placeholder="Password"
                className="bg-[#ffffff10] border-[#A259FF50] text-white placeholder:text-gray-500 focus:border-[#A259FF] focus:ring-[#A259FF50] rounded-xl h-12"
              />
            </div>

            <div className="flex justify-center pt-4">
              <GlowingButton onClick={onLogin}>
                Enter Gullak
              </GlowingButton>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-transparent text-gray-500">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="bg-[#ffffff10] border-[#ffffff20] hover:bg-[#ffffff20] hover:border-[#A259FF] rounded-xl h-12"
            >
              <Mail className="w-5 h-5 text-white" />
            </Button>
            <Button
              variant="outline"
              className="bg-[#ffffff10] border-[#ffffff20] hover:bg-[#ffffff20] hover:border-[#A259FF] rounded-xl h-12"
            >
              <Chrome className="w-5 h-5 text-white" />
            </Button>
            <Button
              variant="outline"
              className="bg-[#ffffff10] border-[#ffffff20] hover:bg-[#ffffff20] hover:border-[#A259FF] rounded-xl h-12"
            >
              <Apple className="w-5 h-5 text-white" />
            </Button>
          </div>

          <div className="text-center">
            <button
              onClick={onSignup}
              className="text-[#A259FF] hover:text-[#00FFFF] transition-colors"
            >
              Don't have an account? <span className="underline">Sign up</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
