import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, GraduationCap, Lock, CheckCircle, Star, Trophy, BookOpen } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
import { Progress } from './ui/progress';

interface LearnScreenProps {
  onBack: () => void;
}

const lessons = [
  {
    id: 1,
    title: 'What is Investing?',
    description: 'Learn the basics of making your money grow',
    duration: '5 min',
    points: 50,
    completed: true,
    color: '#A259FF',
    icon: '💰'
  },
  {
    id: 2,
    title: 'Understanding SIP',
    description: 'Systematic Investment Plans made simple',
    duration: '7 min',
    points: 75,
    completed: true,
    color: '#00FFFF',
    icon: '📈'
  },
  {
    id: 3,
    title: 'Risk vs Reward',
    description: 'How to balance your investment portfolio',
    duration: '6 min',
    points: 60,
    completed: false,
    locked: false,
    color: '#39FF14',
    icon: '⚖️'
  },
  {
    id: 4,
    title: 'Mutual Funds 101',
    description: 'Everything about mutual fund investing',
    duration: '8 min',
    points: 80,
    completed: false,
    locked: true,
    color: '#FFD700',
    icon: '🏦'
  },
  {
    id: 5,
    title: 'Building Wealth',
    description: 'Long-term strategies for financial freedom',
    duration: '10 min',
    points: 100,
    completed: false,
    locked: true,
    color: '#FF6B6B',
    icon: '🎯'
  }
];

export function LearnScreen({ onBack }: LearnScreenProps) {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const totalPoints = 265;
  const earnedPoints = 125;
  const progress = (earnedPoints / totalPoints) * 100;

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
          <div className="flex-1">
            <h3 className="text-white">Finance Learning</h3>
            <p className="text-gray-400 mt-1">Level up your money skills</p>
          </div>
        </div>

        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#A259FF] to-[#00FFFF] p-6 rounded-3xl shadow-[0_0_30px_rgba(162,89,255,0.5)]"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/80">Your Progress</p>
              <h2 className="text-white mt-1">{earnedPoints} / {totalPoints} Points</h2>
            </div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Trophy className="w-12 h-12 text-[#39FF14]" />
            </motion.div>
          </div>
          <Progress value={progress} className="h-3 bg-white/20" />
          <p className="text-white/80 mt-3">2 lessons completed • 3 to go</p>
        </motion.div>

        {/* Achievement Badges */}
        <div className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white">Recent Badges</h4>
            <button className="text-[#A259FF]">View All</button>
          </div>
          <div className="flex gap-3">
            {[
              { emoji: '🌟', name: 'First Steps', color: '#A259FF' },
              { emoji: '🎓', name: 'Quick Learner', color: '#00FFFF' },
              { emoji: '🔥', name: '5-Day Streak', color: '#39FF14' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex-1 bg-[#ffffff10] border p-3 rounded-xl text-center"
                style={{ borderColor: `${badge.color}50` }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="text-2xl mb-1"
                >
                  {badge.emoji}
                </motion.div>
                <p className="text-white text-xs">{badge.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-3">
          <h4 className="text-white">Lessons</h4>
          
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => !lesson.locked && setSelectedLesson(lesson.id)}
              className={`bg-[#ffffff10] backdrop-blur-lg border-2 p-5 rounded-2xl transition-all ${
                lesson.locked 
                  ? 'opacity-60 cursor-not-allowed' 
                  : 'cursor-pointer hover:border-opacity-100'
              }`}
              style={{
                borderColor: lesson.locked ? '#ffffff20' : `${lesson.color}50`,
              }}
              whileHover={!lesson.locked ? { 
                scale: 1.02,
                boxShadow: `0 0 25px ${lesson.color}60`
              } : {}}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${lesson.color}30` }}
                  animate={lesson.completed ? {
                    boxShadow: [
                      `0 0 10px ${lesson.color}50`,
                      `0 0 20px ${lesson.color}80`,
                      `0 0 10px ${lesson.color}50`
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-3xl">{lesson.icon}</span>
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white">{lesson.title}</h4>
                      <p className="text-gray-400 mt-1">{lesson.description}</p>
                    </div>
                    {lesson.locked && <Lock className="w-5 h-5 text-gray-500" />}
                    {lesson.completed && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                      </motion.div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-gray-400 flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {lesson.duration}
                    </span>
                    <span className="text-[#39FF14] flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      +{lesson.points} pts
                    </span>
                  </div>

                  {!lesson.completed && !lesson.locked && (
                    <button
                      className="mt-3 w-full py-2 rounded-xl text-white transition-all"
                      style={{
                        backgroundColor: `${lesson.color}30`,
                        border: `1px solid ${lesson.color}60`
                      }}
                    >
                      Start Lesson
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-[#39FF1420] to-[#00FFFF20] border border-[#39FF14] p-5 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🎮</span>
            <div>
              <h4 className="text-white">Daily Finance Quiz</h4>
              <p className="text-gray-400 mt-1">Answer 5 questions to earn bonus points</p>
            </div>
          </div>
          <button className="w-full py-3 rounded-xl bg-[#39FF14] text-black hover:bg-[#39FF14]/80 transition-colors shadow-[0_0_20px_rgba(57,255,20,0.4)]">
            Take Quiz (+50 pts)
          </button>
        </motion.div>
      </div>
    </div>
  );
}
