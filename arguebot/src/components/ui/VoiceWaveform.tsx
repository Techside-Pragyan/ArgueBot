'use client';

import { motion } from 'framer-motion';

interface VoiceWaveformProps {
  active?: boolean;
  bars?: number;
  color?: string;
  className?: string;
}

export default function VoiceWaveform({
  active = false,
  bars = 24,
  color = '#00f0ff',
  className = '',
}: VoiceWaveformProps) {
  return (
    <div className={`flex items-center gap-[2px] h-12 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full"
          style={{ backgroundColor: color }}
          animate={
            active
              ? {
                  height: [4, Math.random() * 40 + 8, 4],
                  opacity: [0.4, 1, 0.4],
                }
              : { height: 4, opacity: 0.3 }
          }
          transition={
            active
              ? {
                  duration: 0.4 + Math.random() * 0.4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.03,
                }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  );
}
