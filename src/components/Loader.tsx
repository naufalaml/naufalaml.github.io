import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds loading
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(currentProgress);

      if (step >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          y: '-100vh',
          transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
        }}
        className="fixed inset-0 z-[999] bg-[#05050A] flex flex-col items-center justify-center font-mono"
      >
        <div className="space-y-6 w-full max-w-xs text-center px-4">
          
          {/* Typographic Logo */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3 text-white font-heading font-black text-xl tracking-widest"
          >
            <img src="/logo.png" alt="AN Logo" className="w-12 h-12 object-contain animate-pulse" />
            <span>NAUFAL.DEV</span>
          </motion.div>

          {/* Progress Indicator */}
          <div className="space-y-1">
            <div className="text-sm font-bold font-heading text-slate-400">
              <span>{progress}</span>
              <span className="text-xs text-indigo-400 font-normal">%</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-[1px] bg-slate-900 rounded-full overflow-hidden relative">
            <motion.div 
              className="h-full bg-indigo-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <p className="text-[9px] text-slate-500 uppercase tracking-widest font-mono">
            Loading Resources...
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
