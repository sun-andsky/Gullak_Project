import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { LoginScreen } from './components/LoginScreen';
import { SignupScreen } from './components/SignupScreen';
import { HomeScreen } from './components/HomeScreen';
import { GoalPlanningScreen } from './components/GoalPlanningScreen';
import { MicroInvestmentScreen } from './components/MicroInvestmentScreen';
import { AIAgentsScreen } from './components/AIAgentsScreen';
import { ChatScreen } from './components/ChatScreen';
import { LearnScreen } from './components/LearnScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { BottomNav } from './components/BottomNav';

type Screen = 
  | 'splash' 
  | 'onboarding' 
  | 'login' 
  | 'signup' 
  | 'home' 
  | 'goals' 
  | 'invest' 
  | 'agents' 
  | 'chat'
  | 'learn'
  | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [chatAgentId, setChatAgentId] = useState<string>('');

  const showBottomNav = ['home', 'goals', 'invest', 'agents', 'profile'].includes(currentScreen);

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleOpenChat = (agentId: string) => {
    setChatAgentId(agentId);
    setCurrentScreen('chat');
  };

  return (
    <div className="size-full flex items-center justify-center bg-black">
      <div className="relative w-full h-full max-w-md mx-auto bg-[#0a0015] overflow-hidden shadow-2xl">
        {currentScreen === 'splash' && (
          <SplashScreen onComplete={() => setCurrentScreen('onboarding')} />
        )}
        
        {currentScreen === 'onboarding' && (
          <OnboardingScreen onComplete={() => setCurrentScreen('login')} />
        )}
        
        {currentScreen === 'login' && (
          <LoginScreen
            onLogin={() => setCurrentScreen('home')}
            onSignup={() => setCurrentScreen('signup')}
          />
        )}
        
        {currentScreen === 'signup' && (
          <SignupScreen
            onSignup={() => setCurrentScreen('home')}
            onBack={() => setCurrentScreen('login')}
          />
        )}
        
        {currentScreen === 'home' && (
          <HomeScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'goals' && (
          <GoalPlanningScreen onBack={() => setCurrentScreen('home')} />
        )}
        
        {currentScreen === 'invest' && (
          <MicroInvestmentScreen onBack={() => setCurrentScreen('home')} />
        )}
        
        {currentScreen === 'agents' && (
          <AIAgentsScreen
            onBack={() => setCurrentScreen('home')}
            onOpenChat={handleOpenChat}
          />
        )}
        
        {currentScreen === 'chat' && (
          <ChatScreen
            agentId={chatAgentId}
            onBack={() => setCurrentScreen('agents')}
          />
        )}

        {currentScreen === 'learn' && (
          <LearnScreen onBack={() => setCurrentScreen('home')} />
        )}

        {currentScreen === 'profile' && (
          <ProfileScreen onBack={() => setCurrentScreen('home')} />
        )}
        
        {showBottomNav && (
          <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
        )}
      </div>
    </div>
  );
}
