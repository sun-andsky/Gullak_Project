import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

export function SuccessToast({ show, message, onClose }: SuccessToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6"
        >
          <div className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] p-4 rounded-2xl shadow-[0_0_30px_rgba(57,255,20,0.6)] flex items-center gap-3 max-w-md w-full">
            <CheckCircle className="w-6 h-6 text-black" />
            <p className="text-black flex-1">{message}</p>
            <button onClick={onClose} className="p-1 hover:bg-black/10 rounded-full transition-colors">
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
