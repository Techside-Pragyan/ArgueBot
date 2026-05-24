'use client';

import { motion } from 'framer-motion';

interface AIAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  speaking?: boolean;
  personality?: string;
  className?: string;
}

const sizeMap = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

const innerSizeMap = {
  sm: 'w-8 h-8 text-lg',
  md: 'w-14 h-14 text-2xl',
  lg: 'w-24 h-24 text-5xl',
  xl: 'w-36 h-36 text-7xl',
};

export default function AIAvatar({
  size = 'lg',
  speaking = false,
  personality = '🤖',
  className = '',
}: AIAvatarProps) {
  return (
    <div className={`relative ${sizeMap[size]} ${className}`}>
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-30"
        animate={
          speaking
            ? { scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }
            : { scale: [1, 1.1, 1], opacity: [0.2, 0.1, 0.2] }
        }
        transition={{ duration: speaking ? 0.8 : 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink opacity-20"
        animate={
          speaking
            ? { scale: [1, 1.2, 1], opacity: [0.2, 0.05, 0.2] }
            : { scale: [1, 1.05, 1], opacity: [0.15, 0.05, 0.15] }
        }
        transition={{ duration: speaking ? 1 : 4, repeat: Infinity, delay: 0.2 }}
      />

      {/* Main avatar circle */}
      <motion.div
        className={`relative z-10 rounded-full flex items-center justify-center ${sizeMap[size]}`}
        style={{
          background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(168, 85, 247, 0.15))',
          border: '2px solid rgba(0, 240, 255, 0.3)',
          boxShadow: '0 0 20px rgba(0, 240, 255, 0.2), inset 0 0 20px rgba(0, 240, 255, 0.1)',
        }}
        animate={speaking ? { borderColor: ['rgba(0,240,255,0.3)', 'rgba(168,85,247,0.5)', 'rgba(0,240,255,0.3)'] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className={`rounded-full flex items-center justify-center ${innerSizeMap[size]}`}
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(0, 240, 255, 0.2), rgba(5, 5, 16, 0.8))',
          }}
          animate={speaking ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {personality}
        </motion.div>
      </motion.div>

      {/* Orbiting dots */}
      {speaking && (
        <>
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-neon-cyan"
            style={{ top: '50%', left: '50%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute -top-8 left-0 w-2 h-2 rounded-full bg-neon-cyan" />
          </motion.div>
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-neon-purple"
            style={{ top: '50%', left: '50%' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute -top-10 left-0 w-1.5 h-1.5 rounded-full bg-neon-purple" />
          </motion.div>
        </>
      )}
    </div>
  );
}
