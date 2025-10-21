import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Plus, Target, Sparkles } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
import { Input } from './ui/input';
import { GlowingButton } from './GlowingButton';
import { Progress } from './ui/progress';
import { SuccessToast } from './SuccessToast';

interface GoalPlanningScreenProps {
  onBack: () => void;
}

export function GoalPlanningScreen({ onBack }: GoalPlanningScreenProps) {
  const [showNewGoal, setShowNewGoal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const goals = [
    {
      title: 'New Phone',
      current: 8240,
      target: 15000,
      dailyPlan: 25,
      daysLeft: 270,
      color: '#A259FF'
    },
    {
      title: 'Emergency Fund',
      current: 3500,
      target: 10000,
      dailyPlan: 30,
      daysLeft: 217,
      color: '#39FF14'
    }
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
          <h3 className="text-white">Goal Planning</h3>
        </div>

        {/* Existing Goals */}
        {goals.map((goal, index) => {
          const progress = (goal.current / goal.target) * 100;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-6 rounded-3xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-white">{goal.title}</h4>
                  <p className="text-gray-400 mt-1">
                    ₹{goal.current.toLocaleString()} / ₹{goal.target.toLocaleString()}
                  </p>
                </div>
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: `${goal.color}30` }}
                >
                  <Target className="w-6 h-6" style={{ color: goal.color }} />
                </div>
              </div>

              <div className="mb-4">
                <Progress
                  value={progress}
                  className="h-3"
                  style={{
                    '--progress-color': goal.color
                  } as any}
                />
              </div>

              <div className="bg-[#ffffff05] p-4 rounded-2xl border border-[#ffffff10]">
                <p className="text-gray-400 mb-2">AI-Generated Plan</p>
                <p className="text-white">
                  Invest ₹{goal.dailyPlan} per day for {goal.daysLeft} days
                </p>
                <motion.div
                  className="mt-3 text-[#39FF14]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💪 You're just 10 days away from your next badge!
                </motion.div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 py-2 rounded-xl bg-[#ffffff10] text-white hover:bg-[#ffffff20] transition-colors">
                  Edit Goal
                </button>
                <button
                  className="flex-1 py-2 rounded-xl text-white hover:bg-[#ffffff20] transition-colors"
                  style={{
                    background: `${goal.color}30`,
                    border: `1px solid ${goal.color}`
                  }}
                >
                  Invest Now
                </button>
              </div>
            </motion.div>
          );
        })}

        {/* Add New Goal Button */}
        {!showNewGoal && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => setShowNewGoal(true)}
            className="w-full bg-[#00FFFF20] hover:bg-[#00FFFF30] border-2 border-dashed border-[#00FFFF] p-6 rounded-3xl flex items-center justify-center gap-3 transition-all"
          >
            <Plus className="w-6 h-6 text-[#00FFFF]" />
            <span className="text-[#00FFFF]">Add New Goal</span>
          </motion.button>
        )}

        {/* New Goal Form */}
        {showNewGoal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#ffffff10] backdrop-blur-lg border border-[#00FFFF] p-6 rounded-3xl space-y-4"
          >
            <h4 className="text-white">Create New Goal</h4>
            
            <Input
              placeholder="Goal name (e.g., New Laptop)"
              className="bg-[#ffffff10] border-[#00FFFF50] text-white placeholder:text-gray-500 focus:border-[#00FFFF] rounded-xl h-12"
            />
            
            <Input
              type="number"
              placeholder="Target amount (₹)"
              className="bg-[#ffffff10] border-[#00FFFF50] text-white placeholder:text-gray-500 focus:border-[#00FFFF] rounded-xl h-12"
            />
            
            <Input
              type="number"
              placeholder="Duration (days)"
              className="bg-[#ffffff10] border-[#00FFFF50] text-white placeholder:text-gray-500 focus:border-[#00FFFF] rounded-xl h-12"
            />

            <div className="bg-[#00FFFF10] p-4 rounded-2xl border border-[#00FFFF30]">
              <p className="text-gray-400 mb-1">AI Recommendation</p>
              <p className="text-white">Invest ₹35 daily to reach your goal in time!</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowNewGoal(false)}
                className="flex-1 py-3 rounded-xl bg-[#ffffff10] text-white hover:bg-[#ffffff20] transition-colors"
              >
                Cancel
              </button>
              <div className="flex-1 flex justify-center">
                <GlowingButton 
                  variant="accent" 
                  onClick={() => {
                    setShowNewGoal(false);
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                  }}
                >
                  <Sparkles className="inline w-5 h-5 mr-2" />
                  Create Goal
                </GlowingButton>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <SuccessToast 
        show={showToast}
        message="Goal created successfully! Let's start saving! 🎯"
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
