import React from 'react';
import { BookOpen, Award, Zap } from 'lucide-react';

const educationData = [
  {
    year: '2020',
    degree: 'SSC',
    institution: 'Technical Training Centre',
    gpa: '4.93',
    icon: BookOpen,
  },
  {
    year: '2022',
    degree: 'HSC',
    institution: 'Govt. Shahid Smrity College',
    gpa: '3.42',
    icon: Award,
  },
  {
    year: '2024 - Present',
    degree: 'BSc in Computer Science & Engineering',
    institution: 'European University of Bangladesh',
    gpa: 'In Progress',
    icon: Zap,
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About & Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-navy-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* About Bio */}
        <div className="mb-16 animate-slide-up">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a disciplined developer with a unique background combining military service in the Bangladesh Air Force with advanced computer science education. This blend of backgrounds enables me to approach problem-solving with precision, strategic thinking, and unwavering dedication. I believe in writing clean, maintainable code and delivering solutions that exceed expectations.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 animate-fade-in">
            Educational Journey
          </h3>
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-6 group">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-600 to-emerald-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all">
                      <IconComponent size={24} />
                    </div>
                    {index !== educationData.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-navy-600/50 to-emerald-500/50 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg hover:border-navy-500 dark:hover:border-emerald-500 transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-navy-600 dark:text-emerald-500 bg-navy-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">
                        GPA: <span className="text-navy-600 dark:text-emerald-400">{edu.gpa}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
