import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ALL_34_MODULES, Module34Item } from '../data/all34Modules';
import * as LucideIcons from 'lucide-react';

export const Ecosystem34Modules: React.FC = () => {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  // Group modules into clusters for a Bento box layout
  const coreModules = ALL_34_MODULES.filter(m => m.category === 'core').slice(0, 4);
  const academicModules = ALL_34_MODULES.filter(m => m.category === 'academic').slice(0, 4);
  const otherModules = ALL_34_MODULES.filter(m => !['core', 'academic'].includes(m.category)).slice(0, 8);

  const renderModule = (module: Module34Item, isLarge: boolean = false) => {
    // @ts-ignore
    const Icon = LucideIcons[module.iconName] || LucideIcons.Box;
    const isHovered = hoveredModule === module.id;

    return (
      <motion.div
        key={module.id}
        onMouseEnter={() => setHoveredModule(module.id)}
        onMouseLeave={() => setHoveredModule(null)}
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl group cursor-pointer ${
          isLarge ? 'col-span-2 row-span-2 p-8' : 'col-span-1 row-span-1 p-6'
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br from-${module.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ backgroundImage: `linear-gradient(to bottom right, ${module.color}33, transparent)` }} />
        
        <div className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 relative z-10 transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className={`font-bold text-white mb-2 relative z-10 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          {module.title.replace(/^\d+\.\s/, '')}
        </h3>
        
        <p className={`text-vision-textMuted font-light relative z-10 ${isLarge ? 'text-base' : 'text-sm line-clamp-2'}`}>
          {module.tagline}
        </p>

        {isLarge && (
          <div className="mt-6 flex flex-wrap gap-2 relative z-10">
            {module.featuresList.slice(0, 4).map((feat, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/5">
                {feat}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="relative w-full py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
            An entire school on <span className="text-vision-cyan">one platform</span>.
          </h2>
          <p className="text-xl text-vision-textMuted max-w-2xl mx-auto font-light">
            34 tightly integrated modules built with Apple-grade precision. No data silos.
          </p>
        </div>

        {/* Cinematic Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-6">
          
          {/* Core Cluster */}
          {coreModules.map((m, i) => renderModule(m, i === 0))}

          {/* Academic Cluster */}
          {academicModules.map((m, i) => renderModule(m, i === 0))}
          
          {/* Remaining Modules scattered */}
          {otherModules.map(m => renderModule(m, false))}

        </div>

      </div>
    </section>
  );
};
