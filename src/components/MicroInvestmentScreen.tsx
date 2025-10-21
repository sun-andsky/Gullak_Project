import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, PiggyBank } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
import { GlowingButton } from './GlowingButton';
import { Slider } from './ui/slider';
import { SuccessToast } from './SuccessToast';

interface MicroInvestmentScreenProps {
  onBack: () => void;
}

export function MicroInvestmentScreen({ onBack }: MicroInvestmentScreenProps) {
  const [amount, setAmount] = useState(25);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInvest = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 2000);
  };

  return (
    <div className="relative h-full bg-gradient-to-b from-[#0a0015] via-[#1a0a2e] to-[#0a0015] overflow-auto">
      <FloatingParticles />
      
      <div className="relative px-6 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-[#ffffff10] text-white hover:bg-[#ffffff20]"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h3 className="text-white">Micro Investment</h3>
        </div>

        {/* Amount Selection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#A259FF] to-[#00FFFF] p-8 rounded-3xl text-center shadow-[0_0_40px_rgba(162,89,255,0.6)]"
        >
          <p className="text-white/80">Investment Amount</p>
          <h1 className="text-white mt-2">₹{amount}</h1>
          
          <div className="mt-8 px-4">
            <Slider
              value={[amount]}
              onValueChange={(values) => setAmount(values[0])}
              min={10}
              max={500}
              step={5}
              className="w-full"
            />
          </div>

          <div className="flex justify-between mt-4 text-white/60">
            <span>₹10</span>
            <span>₹500</span>
          </div>
        </motion.div>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {[10, 20, 50, 100].map((quickAmount) => (
            <button
              key={quickAmount}
              onClick={() => setAmount(quickAmount)}
              className={`py-3 rounded-xl transition-all ${
                amount === quickAmount
                  ? 'bg-[#A259FF] text-white shadow-[0_0_15px_rgba(162,89,255,0.6)]'
                  : 'bg-[#ffffff10] text-gray-400 hover:bg-[#ffffff20]'
              }`}
            >
              ₹{quickAmount}
            </button>
          ))}
        </div>

        {/* AI Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#39FF1410] border border-[#39FF14] p-4 rounded-2xl"
        >
          <p className="text-[#39FF14]">🤖 AI Recommendation</p>
          <p className="text-white mt-2">
            Invest ₹{Math.min(amount + 5, 50)} today to stay on track with your goals!
          </p>
        </motion.div>

        {/* Investment Options */}
        <div className="space-y-3">
          <h4 className="text-white">Investment Options</h4>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-4 rounded-2xl flex items-center gap-4"
          >
            <div className="bg-[#A259FF30] p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-[#A259FF]" />
            </div>
            <div className="flex-1">
              <p className="text-white">Mutual Funds</p>
              <p className="text-gray-400 mt-1">Low risk • 8-12% returns</p>
            </div>
            <input
              type="radio"
              name="investment"
              defaultChecked
              className="w-5 h-5 accent-[#A259FF]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-4 rounded-2xl flex items-center gap-4"
          >
            <div className="bg-[#00FFFF30] p-3 rounded-xl">
              <PiggyBank className="w-6 h-6 text-[#00FFFF]" />
            </div>
            <div className="flex-1">
              <p className="text-white">Micro-SIP</p>
              <p className="text-gray-400 mt-1">Very low risk • 6-9% returns</p>
            </div>
            <input
              type="radio"
              name="investment"
              className="w-5 h-5 accent-[#00FFFF]"
            />
          </motion.div>
        </div>

        {/* Weekly History Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#ffffff10] backdrop-blur-lg border border-[#ffffff20] p-6 rounded-2xl"
        >
          <h4 className="text-white mb-4">This Week's Investments</h4>
          <div className="flex items-end justify-between gap-2 h-32">
            {[40, 65, 45, 80, 55, 70, 60].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="w-full bg-gradient-to-t from-[#A259FF] to-[#00FFFF] rounded-t-lg"
                  style={{ minHeight: '20%' }}
                />
                <span className="text-gray-500">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Invest Button */}
        <div className="flex justify-center pb-8">
          <GlowingButton onClick={handleInvest}>
            Invest ₹{amount} Now
          </GlowingButton>
        </div>
      </div>

      {/* Coin Drop Animation */}
      {showAnimation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
        >
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 1, repeat: 3 }}
            >
              <PiggyBank className="w-32 h-32 text-[#39FF14] mx-auto drop-shadow-[0_0_30px_rgba(57,255,20,1)]" />
            </motion.div>
            <h3 className="text-white mt-4">Investment Successful! 🎉</h3>
            <p className="text-gray-400 mt-2">₹{amount} invested in your portfolio</p>
          </motion.div>
        </motion.div>
      )}

      <SuccessToast 
        show={showToast}
        message={`Successfully invested ₹${amount}! Keep growing! 🌱`}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
