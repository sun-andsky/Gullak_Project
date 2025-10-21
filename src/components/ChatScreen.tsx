import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send, Mic } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
import { Input } from './ui/input';

interface ChatScreenProps {
  agentId: string;
  onBack: () => void;
}

const agentDetails: Record<string, any> = {
  investment: {
    name: 'Investment Agent',
    color: '#A259FF',
    emoji: '🪙',
    firstMessage: "Hey! I'll help you invest your spare change effortlessly. Want to start small today?"
  },
  goal: {
    name: 'Goal Planner Agent',
    color: '#39FF14',
    emoji: '🎯',
    firstMessage: "Let's plan your next goal! What are you saving for this month?"
  },
  tutor: {
    name: 'Finance Tutor Agent',
    color: '#00FFFF',
    emoji: '📘',
    firstMessage: "Finance is fun! I can teach you investing basics through quick interactive lessons."
  },
  budget: {
    name: 'Budget Coach Agent',
    color: '#FFD700',
    emoji: '💡',
    firstMessage: "I'll analyze your spending and help you save smarter without cutting essentials."
  },
  engagement: {
    name: 'Engagement Agent',
    color: '#FF6B6B',
    emoji: '💬',
    firstMessage: "I'm your motivator! Let's keep your streak alive and your goals growing!"
  }
};

export function ChatScreen({ agentId, onBack }: ChatScreenProps) {
  const agent = agentDetails[agentId];
  const [messages, setMessages] = useState([
    { type: 'agent', text: agent.firstMessage, timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies: Record<string, string[]> = {
    investment: ['Help me invest', 'Show my portfolio', 'Investment tips'],
    goal: ['Create new goal', 'Track progress', 'Update goal'],
    tutor: ['Start lesson', 'Take quiz', 'Finance basics'],
    budget: ['Analyze spending', 'Save money', 'Budget tips'],
    engagement: ['My streak', 'Earn badges', 'Daily challenge']
  };

  const sendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    setMessages([
      ...messages,
      { type: 'user', text: messageText, timestamp: new Date() }
    ]);
    setInputValue('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const agentResponses: Record<string, string[]> = {
        investment: [
          "Great! I recommend starting with ₹25 today. Your portfolio is looking good! 📈",
          "Based on your goals, a micro-SIP of ₹30 daily would be perfect!",
          "You're doing amazing! Let's invest ₹20 to keep the momentum going."
        ],
        goal: [
          "Let's set up your new goal! What are you saving for? 🎯",
          "You're 55% there! Just ₹6,760 more to reach your phone goal!",
          "I've updated your daily plan. Invest ₹25 to stay on track!"
        ],
        tutor: [
          "Finance is fun! Let's start with 'Understanding SIP'. Ready? 📚",
          "Time for a quick quiz! Answer 5 questions and earn 50 points! 🎮",
          "Investing basics: Start small, stay consistent, watch it grow! 💡"
        ],
        budget: [
          "I've analyzed your spending. You can save ₹200 this week by optimizing! 💰",
          "Smart tip: Try the 50-30-20 rule for budgeting!",
          "You're spending 15% less than last month. Great job! 🎉"
        ],
        engagement: [
          "You're on a 12-day streak! Keep it going! 🔥",
          "Just completed 2 lessons? Here's your 'Quick Learner' badge! 🎓",
          "Daily challenge: Invest ₹15 today and earn +25 bonus points!"
        ]
      };

      const responses = agentResponses[agentId] || [
        "That's a great question! Let me help you with that.",
        "You're doing fantastic! Keep up the momentum!",
        "I'm here to help you succeed! 💪"
      ];

      setMessages(prev => [
        ...prev,
        { type: 'agent', text: responses[Math.floor(Math.random() * responses.length)], timestamp: new Date() }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="relative h-full bg-gradient-to-b from-[#0a0015] via-[#1a0a2e] to-[#0a0015] flex flex-col">
      <FloatingParticles />
      
      {/* Header */}
      <div
        className="relative px-6 py-6 flex items-center gap-4"
        style={{
          background: `linear-gradient(135deg, ${agent.color}40 0%, ${agent.color}10 100%)`,
          borderBottom: `1px solid ${agent.color}30`
        }}
      >
        <button
          onClick={onBack}
          className="p-2 rounded-xl bg-[#ffffff10] text-white hover:bg-[#ffffff20]"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <motion.div
          className="p-3 rounded-xl"
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
          <span className="text-2xl">{agent.emoji}</span>
        </motion.div>

        <div className="flex-1">
          <h4 className="text-white">{agent.name}</h4>
          <p className="text-gray-400 mt-1">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto px-6 py-6 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                message.type === 'agent'
                  ? 'rounded-tl-none'
                  : 'rounded-tr-none'
              }`}
              style={{
                backgroundColor: message.type === 'agent'
                  ? `${agent.color}30`
                  : '#ffffff10',
                border: message.type === 'agent'
                  ? `1px solid ${agent.color}50`
                  : '1px solid #ffffff20',
                boxShadow: message.type === 'agent'
                  ? `0 0 15px ${agent.color}30`
                  : 'none'
              }}
            >
              <p className="text-white">{message.text}</p>
            </div>
          </motion.div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div
              className="px-4 py-3 rounded-2xl rounded-tl-none"
              style={{
                backgroundColor: `${agent.color}20`,
                border: `1px solid ${agent.color}30`
              }}
            >
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="relative px-6 py-6 border-t border-[#ffffff20]">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="bg-[#ffffff10] border-[#ffffff20] text-white placeholder:text-gray-500 rounded-full h-12 pr-12"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-[#ffffff10]"
            >
              <Mic className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          <motion.button
            onClick={sendMessage}
            className="p-3 rounded-full"
            style={{
              backgroundColor: agent.color,
              boxShadow: `0 0 20px ${agent.color}60`
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Send className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Quick Replies */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {quickReplies[agentId]?.map((reply, index) => (
            <motion.button
              key={index}
              onClick={() => sendMessage(reply)}
              className="px-4 py-2 rounded-full bg-[#ffffff10] border text-white whitespace-nowrap hover:bg-[#ffffff20] transition-all"
              style={{ borderColor: `${agent.color}40` }}
              whileHover={{ 
                scale: 1.05,
                borderColor: agent.color,
                boxShadow: `0 0 10px ${agent.color}40`
              }}
              whileTap={{ scale: 0.95 }}
            >
              {reply}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
