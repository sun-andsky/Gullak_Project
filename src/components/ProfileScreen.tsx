import { motion } from 'motion/react';
import { ArrowLeft, User, Bell, Shield, Palette, LogOut, ChevronRight, Award, TrendingUp, Target } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
import { Switch } from './ui/switch';

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  const stats = [
    { label: 'Total Invested', value: '₹8,240', icon: TrendingUp, color: '#A259FF' },
    { label: 'Active Goals', value: '2', icon: Target, color: '#39FF14' },
    { label: 'Badges Earned', value: '5', icon: Award, color: '#00FFFF' }
  ];

  const achievements = [
    { emoji: '🌟', name: 'First Investment', date: 'Oct 10, 2025' },
    { emoji: '🎯', name: 'Goal Achiever', date: 'Oct 12, 2025' },
    { emoji: '🔥', name: '7-Day Streak', date: 'Oct 15, 2025' },
    { emoji: '💎', name: 'Smart Saver', date: 'Oct 17, 2025' },
    { emoji: '🏆', name: 'Level 3 Investor', date: 'Oct 19, 2025' }
  ];

  return (
    <div className="relative h-full bg-gradient-to-b from-[#0a0015] via-[#1a0a2e] to-[#0a0015] overflow-auto">
      <FloatingParticles />
      
      <div className="relative px-6 py-8 space-y-6 pb-24">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-[#ffffff10] text-white hover:bg-[#ffffff20]"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h3 className="text-white">Profile & Settings</h3>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#A259FF] to-[#00FFFF] p-6 rounded-3xl shadow-[0_0_30px_rgba(162,89,255,0.5)]"
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-10 h-10 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-white">Nikita Sharma</h3>
              <p className="text-white/80 mt-1">nikita@email.com</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[#39FF14] text-black">
                  Level 3 Investor
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-3 rounded-2xl text-center"
              >
                <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
                <p className="text-white">{stat.value}</p>
                <p className="text-white/70 text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white">Your Achievements</h4>
            <span className="text-[#39FF14]">5/20</span>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-gradient-to-br from-[#A259FF30] to-[#00FFFF30] border border-[#A259FF50] p-3 rounded-xl text-center">
                  <span className="text-2xl">{achievement.emoji}</span>
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#39FF14]"
                  animate={{
                    boxShadow: [
                      '0 0 5px rgba(57,255,20,0.5)',
                      '0 0 15px rgba(57,255,20,0.8)',
                      '0 0 5px rgba(57,255,20,0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 rounded-xl bg-[#ffffff10] text-white hover:bg-[#ffffff20] transition-colors">
            View All Badges
          </button>
        </div>

        {/* Settings */}
        <div className="space-y-3">
          <h4 className="text-white">Settings</h4>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-4 rounded-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#A259FF30] p-3 rounded-xl">
                  <Bell className="w-5 h-5 text-[#A259FF]" />
                </div>
                <div>
                  <p className="text-white">Notifications</p>
                  <p className="text-gray-400 mt-1">Get updates on investments</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </motion.div>

          {/* AI Preferences */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-4 rounded-2xl cursor-pointer hover:border-[#00FFFF50] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#00FFFF30] p-3 rounded-xl">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <p className="text-white">AI Agent Preferences</p>
                  <p className="text-gray-400 mt-1">Customize your AI assistants</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </motion.div>

          {/* Theme */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-4 rounded-2xl cursor-pointer hover:border-[#39FF1450] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#39FF1430] p-3 rounded-xl">
                  <Palette className="w-5 h-5 text-[#39FF14]" />
                </div>
                <div>
                  <p className="text-white">Appearance</p>
                  <p className="text-gray-400 mt-1">Dark theme (Active)</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-4 rounded-2xl cursor-pointer hover:border-[#FFD70050] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFD70030] p-3 rounded-xl">
                  <Shield className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-white">Security & Privacy</p>
                  <p className="text-gray-400 mt-1">Manage your account security</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </motion.div>

          {/* Account Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-4 rounded-2xl cursor-pointer hover:border-[#A259FF50] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#A259FF30] p-3 rounded-xl">
                  <User className="w-5 h-5 text-[#A259FF]" />
                </div>
                <div>
                  <p className="text-white">Account Information</p>
                  <p className="text-gray-400 mt-1">Update your profile details</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </motion.div>
        </div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full bg-[#FF6B6B20] border border-[#FF6B6B] p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#FF6B6B30] transition-all"
        >
          <LogOut className="w-5 h-5 text-[#FF6B6B]" />
          <span className="text-[#FF6B6B]">Log Out</span>
        </motion.button>
      </div>
    </div>
  );
}
