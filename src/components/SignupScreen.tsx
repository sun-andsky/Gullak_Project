import { motion } from 'motion/react';
import { GlowingButton } from './GlowingButton';
import { FloatingParticles } from './FloatingParticles';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface SignupScreenProps {
  onSignup: () => void;
  onBack: () => void;
}

export function SignupScreen({ onSignup, onBack }: SignupScreenProps) {
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
            <h2 className="text-white mb-2">Create Account</h2>
            <p className="text-gray-400">Join the smart saving revolution</p>
          </div>

          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Full Name"
              className="bg-[#ffffff10] border-[#00FFFF50] text-white placeholder:text-gray-500 focus:border-[#00FFFF] focus:ring-[#00FFFF50] rounded-xl h-12"
            />

            <Input
              type="email"
              placeholder="Email"
              className="bg-[#ffffff10] border-[#00FFFF50] text-white placeholder:text-gray-500 focus:border-[#00FFFF] focus:ring-[#00FFFF50] rounded-xl h-12"
            />

            <Input
              type="number"
              placeholder="Age"
              className="bg-[#ffffff10] border-[#00FFFF50] text-white placeholder:text-gray-500 focus:border-[#00FFFF] focus:ring-[#00FFFF50] rounded-xl h-12"
            />

            <Select>
              <SelectTrigger className="bg-[#ffffff10] border-[#00FFFF50] text-white focus:border-[#00FFFF] focus:ring-[#00FFFF50] rounded-xl h-12">
                <SelectValue placeholder="Select your goal" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a0a2e] border-[#00FFFF50] text-white">
                <SelectItem value="gadget">Save for gadget</SelectItem>
                <SelectItem value="emergency">Emergency fund</SelectItem>
                <SelectItem value="travel">Travel fund</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="password"
              placeholder="Password"
              className="bg-[#ffffff10] border-[#00FFFF50] text-white placeholder:text-gray-500 focus:border-[#00FFFF] focus:ring-[#00FFFF50] rounded-xl h-12"
            />

            <div className="flex justify-center pt-4">
              <GlowingButton onClick={onSignup} variant="accent">
                Create Account
              </GlowingButton>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onBack}
              className="text-[#00FFFF] hover:text-[#A259FF] transition-colors"
            >
              Already have an account? <span className="underline">Log in</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
