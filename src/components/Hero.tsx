import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { scrollToSection, downloadFile } from '../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white dark:bg-slate-950 pt-20 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 rounded-full border border-emerald-200 dark:border-emerald-800">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  Disciplined Developer
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Hossain MDB Sabbir
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Soldier | Disciplined Developer | CSE Student
              </p>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Blending military discipline with technical innovation to build robust digital solutions. Passionate about crafting clean code and solving complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => downloadFile('CV.pdf')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105 duration-300"
              >
                <Download size={20} />
                Download CV
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-navy-600 dark:text-emerald-500 font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-navy-600 dark:hover:border-emerald-500 transition-all hover:shadow-lg hover:scale-105 duration-300"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div>
                <div className="text-2xl font-bold text-navy-600 dark:text-emerald-500">3+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-600 dark:text-emerald-500">20+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Done</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-600 dark:text-emerald-500">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Discipline</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex items-center justify-center animate-scale-in">
            <div className="relative w-full h-96">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
              <div className="absolute inset-0 border-2 border-navy-500/30 dark:border-emerald-500/30 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    Building Tomorrow's Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
