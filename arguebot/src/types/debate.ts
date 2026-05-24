// ============================================================
// ArgueBot - Debate Types
// ============================================================

export type DebateMode = 'free' | 'structured' | 'timed' | 'judge' | 'group';

export type DebateStyle =
  | 'friendly'
  | 'competitive'
  | 'academic'
  | 'political'
  | 'formal'
  | 'aggressive'
  | 'casual';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type AIPersonality =
  | 'philosopher'
  | 'lawyer'
  | 'scientist'
  | 'politician'
  | 'professor'
  | 'motivational_speaker'
  | 'strict_critic'
  | 'friendly_mentor';

export type DebatePhase = 'opening' | 'rebuttal' | 'crossfire' | 'conclusion';

export type MessageRole = 'user' | 'ai' | 'system';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: number;
  phase?: DebatePhase;
  isVoice?: boolean;
}

export interface DebateConfig {
  topic: string;
  mode: DebateMode;
  style: DebateStyle;
  difficulty: Difficulty;
  personality: AIPersonality;
  userPosition: 'for' | 'against';
  timeLimit?: number; // seconds, for timed mode
}

export interface DebateScores {
  overall: number;
  logic: number;
  persuasion: number;
  confidence: number;
  fluency: number;
  grammar: number;
  criticalThinking: number;
  emotionalTone: number;
}

export interface Fallacy {
  type: string;
  description: string;
  messageId: string;
  suggestion: string;
}

export interface DebateFeedback {
  scores: DebateScores;
  fallacies: Fallacy[];
  strongPoints: string[];
  weakPoints: string[];
  improvementTips: string[];
  overallSummary: string;
  betterCounterarguments: string[];
}

export interface DebateSession {
  id: string;
  config: DebateConfig;
  messages: Message[];
  feedback?: DebateFeedback;
  status: 'setup' | 'active' | 'paused' | 'completed';
  startedAt?: number;
  endedAt?: number;
  duration?: number;
  result?: 'win' | 'loss' | 'draw';
}

export interface TopicCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Topic {
  id: string;
  title: string;
  category: string;
  difficulty: Difficulty;
  description?: string;
  trending?: boolean;
}

export const PERSONALITY_INFO: Record<AIPersonality, { name: string; icon: string; description: string; color: string }> = {
  philosopher: {
    name: 'The Philosopher',
    icon: '🏛️',
    description: 'Deep, thoughtful arguments rooted in philosophical reasoning',
    color: '#a78bfa',
  },
  lawyer: {
    name: 'The Lawyer',
    icon: '⚖️',
    description: 'Precise, evidence-based argumentation with sharp cross-examination',
    color: '#f59e0b',
  },
  scientist: {
    name: 'The Scientist',
    icon: '🔬',
    description: 'Data-driven arguments backed by research and empirical evidence',
    color: '#34d399',
  },
  politician: {
    name: 'The Politician',
    icon: '🎤',
    description: 'Persuasive rhetoric with emotional appeals and crowd-pleasing logic',
    color: '#f87171',
  },
  professor: {
    name: 'The Professor',
    icon: '📚',
    description: 'Academic rigor with structured arguments and educational depth',
    color: '#60a5fa',
  },
  motivational_speaker: {
    name: 'The Motivator',
    icon: '🔥',
    description: 'Inspiring arguments with emotional power and storytelling',
    color: '#fb923c',
  },
  strict_critic: {
    name: 'The Critic',
    icon: '🎯',
    description: 'Ruthless analysis that exposes every weakness in your argument',
    color: '#ef4444',
  },
  friendly_mentor: {
    name: 'The Mentor',
    icon: '🤝',
    description: 'Supportive debate style that guides you while challenging your thinking',
    color: '#2dd4bf',
  },
};

export const MODE_INFO: Record<DebateMode, { name: string; icon: string; description: string }> = {
  free: {
    name: 'Free Debate',
    icon: '💬',
    description: 'Open-ended debate on any topic with no time constraints',
  },
  structured: {
    name: 'Structured Debate',
    icon: '📋',
    description: 'Opening → Rebuttal → Conclusion format',
  },
  timed: {
    name: 'Timed Debate',
    icon: '⏱️',
    description: 'Countdown timer with strict speaking time limits',
  },
  judge: {
    name: 'AI Judge Mode',
    icon: '🏆',
    description: 'AI evaluates both sides and declares a winner',
  },
  group: {
    name: 'Group Discussion',
    icon: '👥',
    description: 'Multiple AI participants discuss together',
  },
};
