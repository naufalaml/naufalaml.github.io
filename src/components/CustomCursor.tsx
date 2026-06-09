import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'text'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop screens
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      const textCursor = target.closest('[data-cursor-text]');

      if (textCursor) {
        setCursorType('text');
        setCursorText(textCursor.getAttribute('data-cursor-text') || '');
      } else if (interactive) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkScreen);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer spring circle */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-indigo-500 pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          scale: cursorType === 'hover' ? 1.5 : cursorType === 'text' ? 2.5 : 1,
          backgroundColor: cursorType === 'hover' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(0,0,0,0)',
          borderColor: cursorType === 'text' ? 'rgba(0, 212, 255, 0.8)' : 'rgba(99, 102, 241, 0.8)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      >
        {cursorType === 'text' && (
          <span className="text-[6px] font-mono font-bold text-[#00D4FF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase tracking-widest whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-indigo-400 pointer-events-none z-50 hidden lg:block"
        animate={{
          scale: cursorType === 'hover' ? 0 : cursorType === 'text' ? 0 : 1,
        }}
      />
    </>
  );
}
