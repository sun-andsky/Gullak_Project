import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, Target, GraduationCap, Lightbulb, MessageCircle } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';

interface AIAgentsScreenProps {
  onBack: () => void;
  onOpenChat: (agentId: string) => void;
}

const agents = [
  {
    id: 'investment',
    name: 'Investment Agent',
    icon: TrendingUp,
    description: 'Automates micro-investments based on your activity',
    color: '#A259FF',
    emoji: '🪙'
  },
  {
    id: 'goal',
    name: 'Goal Planner Agent',
    icon: Target,
    description: 'Designs daily/weekly saving actions for goals',
    color: '#39FF14',
    emoji: '🎯'
  },
  {
    id: 'tutor',
    name: 'Finance Tutor Agent',
    icon: GraduationCap,
    description: 'Teaches investing basics interactively',
    color: '#00FFFF',
    emoji: '📘'
  },
  {
    id: 'budget',
    name: 'Budget Coach Agent',
    icon: Lightbulb,
    description: 'Analyzes expenses and offers saving advice',
    color: '#FFD700',
    emoji: '💡'
  },
  {
    id: 'engagement',
    name: 'Engagement Agent',
    icon: MessageCircle,
    description: 'Motivates with messages, streaks, and reminders',
    color: '#FF6B6B',
    emoji: '💬'
  }
];

export function AIAgentsScreen({ onBack, onOpenChat }: AIAgentsScreenProps) {
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
          <div>
            <h3 className="text-white">AI Agents Dashboard</h3>
            <p className="text-gray-400 mt-1">Your financial assistants</p>
          </div>
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#A259FF20] to-[#00FFFF20] border border-[#A259FF50] p-4 rounded-2xl"
        >
          <p className="text-white">
            🤖 Meet your AI-powered financial team. Each agent specializes in helping you save and invest smarter!
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="space-y-4">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#ffffff10] backdrop-blur-lg border-2 hover:border-opacity-100 p-6 rounded-3xl transition-all cursor-pointer group"
              style={{
                borderColor: `${agent.color}50`,
                boxShadow: `0 0 0 rgba(${parseInt(agent.color.slice(1, 3), 16)}, ${parseInt(agent.color.slice(3, 5), 16)}, ${parseInt(agent.color.slice(5, 7), 16)}, 0.3)`
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 0 30px ${agent.color}80`
              }}
              onClick={() => onOpenChat(agent.id)}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="relative p-4 rounded-2xl"
                  style={{ backgroundColor: `${agent.color}30` }}
                  animate={{
                    boxShadow: [
                      `0 0 10px ${agent.color}50`,
                      `0 0 20px ${agent.color}80`,
                      `0 0 10px ${agent.color}50`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <agent.icon
                    className="w-8 h-8"
                    style={{ color: agent.color }}
                  />
                  <motion.span
                    className="absolute -top-1 -right-1"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {agent.emoji}
                  </motion.span>
                </motion.div>

                <div className="flex-1">
                  <h4 className="text-white">{agent.name}</h4>
                  <p className="text-gray-400 mt-1">{agent.description}</p>
                  
                  <button
                    className="mt-3 px-4 py-2 rounded-xl text-white transition-all group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${agent.color}30`,
                      border: `1px solid ${agent.color}60`
                    }}
                  >
                    Chat Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
