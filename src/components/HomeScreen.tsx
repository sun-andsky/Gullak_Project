import { motion } from 'motion/react';
import { TrendingUp, Target, BookOpen, MessageCircle, Flame, Award } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
import { Progress } from './ui/progress';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="relative h-full bg-gradient-to-b from-[#0a0015] via-[#1a0a2e] to-[#0a0015] overflow-auto">
      <FloatingParticles />
      
      <div className="relative px-6 py-8 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-white">Hey, Nikita 👋</h3>
          <p className="text-gray-400 mt-1">Ready to grow your savings?</p>
        </motion.div>

        {/* Balance Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-[#A259FF] to-[#00FFFF] p-6 rounded-3xl shadow-[0_0_30px_rgba(162,89,255,0.5)]"
        >
          <p className="text-white/80">Total Balance</p>
          <h2 className="text-white mt-1">₹12,458</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-white/70">Invested</p>
              <p className="text-white mt-1">₹8,240</p>
            </div>
            <div>
              <p className="text-white/70">Returns</p>
              <p className="text-[#39FF14] mt-1">+₹418</p>
            </div>
          </div>
        </motion.div>

        {/* Goal Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-6 rounded-3xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white">New Phone Goal</p>
              <p className="text-gray-400 mt-1">₹8,240 / ₹15,000</p>
            </div>
            <div className="relative w-16 h-16">
              <svg className="transform -rotate-90 w-16 h-16">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#ffffff20"
                  strokeWidth="4"
                  fill="transparent"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#39FF14"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={176}
                  strokeDashoffset={176 - (176 * 55) / 100}
                  className="drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                55%
              </div>
            </div>
          </div>
          <Progress value={55} className="h-2" />
        </motion.div>

        {/* Gamification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="bg-[#ffffff10] backdrop-blur-lg border border-[#A259FF50] p-4 rounded-2xl text-center">
            <Flame className="w-8 h-8 text-[#A259FF] mx-auto mb-2" />
            <p className="text-white">12 Days</p>
            <p className="text-gray-400 mt-1">Streak</p>
          </div>
          <div className="bg-[#ffffff10] backdrop-blur-lg border border-[#39FF1450] p-4 rounded-2xl text-center">
            <Award className="w-8 h-8 text-[#39FF14] mx-auto mb-2" />
            <p className="text-white">5 Badges</p>
            <p className="text-gray-400 mt-1">Earned</p>
          </div>
          <div className="bg-[#ffffff10] backdrop-blur-lg border border-[#00FFFF50] p-4 rounded-2xl text-center">
            <TrendingUp className="w-8 h-8 text-[#00FFFF] mx-auto mb-2" />
            <p className="text-white">Level 3</p>
            <p className="text-gray-400 mt-1">Investor</p>
          </div>
        </motion.div>

        {/* Daily Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#A259FF20] to-[#00FFFF20] border border-[#A259FF50] p-4 rounded-2xl"
        >
          <p className="text-[#00FFFF]">💡 Daily Finance Tip</p>
          <p className="text-white mt-2">Start your investment journey with just ₹10 a day. Small amounts compound into big wealth!</p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3 pb-24"
        >
          <h4 className="text-white mb-4">Quick Actions</h4>
          
          <button
            onClick={() => onNavigate('invest')}
            className="w-full bg-[#A259FF20] hover:bg-[#A259FF30] border border-[#A259FF] p-4 rounded-2xl flex items-center gap-4 transition-all shadow-[0_0_15px_rgba(162,89,255,0.3)] hover:shadow-[0_0_25px_rgba(162,89,255,0.6)]"
          >
            <div className="bg-[#A259FF] p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-left flex-1">
              <p className="text-white">Invest Now</p>
              <p className="text-gray-400 mt-1">Start micro-investing today</p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('goals')}
            className="w-full bg-[#39FF1420] hover:bg-[#39FF1430] border border-[#39FF14] p-4 rounded-2xl flex items-center gap-4 transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)]"
          >
            <div className="bg-[#39FF14] p-3 rounded-xl">
              <Target className="w-6 h-6 text-black" />
            </div>
            <div className="text-left flex-1">
              <p className="text-white">Set Goal</p>
              <p className="text-gray-400 mt-1">Plan your savings journey</p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('learn')}
            className="w-full bg-[#00FFFF20] hover:bg-[#00FFFF30] border border-[#00FFFF] p-4 rounded-2xl flex items-center gap-4 transition-all shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]"
          >
            <div className="bg-[#00FFFF] p-3 rounded-xl">
              <BookOpen className="w-6 h-6 text-black" />
            </div>
            <div className="text-left flex-1">
              <p className="text-white">Learn Finance</p>
              <p className="text-gray-400 mt-1">Gamified financial lessons</p>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => onNavigate('agents')}
        className="fixed bottom-24 right-6 bg-gradient-to-br from-[#A259FF] to-[#00FFFF] p-4 rounded-full shadow-[0_0_30px_rgba(162,89,255,0.8)]"
        animate={{
          boxShadow: [
            '0 0 20px rgba(162,89,255,0.6)',
            '0 0 40px rgba(162,89,255,1)',
            '0 0 20px rgba(162,89,255,0.6)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>
    </div>
  );
}
