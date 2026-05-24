'use client';

import { Zap } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Debate Modes', 'AI Personalities', 'Voice Mode'],
  Resources: ['Blog', 'Documentation', 'API', 'Community', 'Tutorials'],
  Company: ['About', 'Careers', 'Contact', 'Press', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Zap className="w-4 h-4 text-background" />
              </div>
              <span className="text-lg font-bold font-[family-name:var(--font-display)]">
                <span className="text-neon-cyan">Argue</span>Bot
              </span>
            </Link>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Master the art of debate with AI-powered practice. Sharpen your logic, persuasion, and critical thinking.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/40 hover:text-neon-cyan transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/30">
            © {new Date().getFullYear()} ArgueBot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-foreground/30 hover:text-neon-cyan transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
