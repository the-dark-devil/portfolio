import React from 'react';
import {
  Code2,
  Database,
  Layers,
  GitBranch,
  Shield,
  Zap,
  Target,
  Users,
  Clock,
  Brain,
} from 'lucide-react';

const skillsData = {
  core: [
    { name: 'React & TypeScript', icon: Code2, level: 'Expert' },
    { name: 'Full-Stack Development', icon: Layers, level: 'Expert' },
    { name: 'PostgreSQL & Supabase', icon: Database, level: 'Advanced' },
    { name: 'Frontend Optimization', icon: Zap, level: 'Advanced' },
    { name: 'Git & Version Control', icon: GitBranch, level: 'Expert' },
    { name: 'API Design & Integration', icon: Shield, level: 'Advanced' },
  ],
  professional: [
    { name: 'Problem Solving', icon: Brain, level: 'Expert' },
    { name: 'Discipline & Dedication', icon: Target, level: 'Expert' },
    { name: 'Team Leadership', icon: Users, level: 'Advanced' },
    { name: 'Time Management', icon: Clock, level: 'Expert' },
    { name: 'Communication', icon: Users, level: 'Advanced' },
    { name: 'Strategic Thinking', icon: Brain, level: 'Advanced' },
  ],
};

interface SkillCardProps {
  name: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  level: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, level, index }) => (
  <div
    className="animate-slide-up"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <div className="group h-full bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:border-navy-500 dark:hover:border-emerald-500 transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy-500/20 to-emerald-500/20 flex items-center justify-center group-hover:from-navy-500 group-hover:to-emerald-500 transition-all">
          <Icon className="text-navy-600 dark:text-emerald-500 group-hover:text-white transition-colors" size={24} />
        </div>
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
          {level}
        </span>
      </div>
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
        {name}
      </h4>
    </div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-navy-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Core Tech Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2 animate-fade-in">
            <div className="w-1 h-8 bg-navy-600 dark:bg-emerald-500 rounded-full"></div>
            Core Technology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.core.map((skill, index) => (
              <SkillCard
                key={skill.name}
                {...skill}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Professional Strengths */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2 animate-fade-in">
            <div className="w-1 h-8 bg-emerald-500 dark:bg-navy-600 rounded-full"></div>
            Professional Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.professional.map((skill, index) => (
              <SkillCard
                key={skill.name}
                {...skill}
                index={index + skillsData.core.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
