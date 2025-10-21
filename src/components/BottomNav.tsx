import { Home, TrendingUp, Target, Bot, User } from 'lucide-react';
import { motion } from 'motion/react';

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'invest', icon: TrendingUp, label: 'Invest' },
    { id: 'goals', icon: Target, label: 'Goals' },
    { id: 'agents', icon: Bot, label: 'Agents' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0a0015]/90 backdrop-blur-xl border-t border-[#ffffff20] px-6 py-4">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative flex flex-col items-center gap-1 transition-all"
            >
              <motion.div
                className="relative"
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
              >
                <item.icon
                  className="w-6 h-6"
                  style={{
                    color: isActive ? '#A259FF' : '#808080'
                  }}
                />
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#A259FF]"
                    style={{
                      boxShadow: '0 0 10px #A259FF'
                    }}
                  />
                )}
              </motion.div>
              <span
                className="text-xs"
                style={{
                  color: isActive ? '#A259FF' : '#808080'
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
