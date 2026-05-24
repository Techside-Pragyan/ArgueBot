'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'cyan' | 'purple' | 'pink' | 'none';
  delay?: number;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = 'none',
  delay = 0,
}: GlassCardProps) {
  const glowClass = glow !== 'none' ? `neon-glow-${glow}` : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      className={`glass ${hover ? 'glass-hover' : ''} ${glowClass} p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
