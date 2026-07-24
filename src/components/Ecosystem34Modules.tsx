import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ALL_34_MODULES, Module34Item } from '../data/all34Modules';
import { Search } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export const Ecosystem34Modules: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(ALL_34_MODULES.map((m: Module34Item) => m.category)))];

  const filteredModules = ALL_34_MODULES.filter((m: Module34Item) => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          module.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || m.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl sm:text-6xl font-medium tracking-tighter text-white mb-6">
          Everything you need. <br />
          <span className="text-vision-textMuted">Nothing you don't.</span>
        </h2>
        <p className="text-lg text-vision-textMuted max-w-2xl mx-auto font-light">
          34 pro-level modules integrated into one fluid ecosystem. 
        </p>
      </motion.div>

      {/* Glass Search & Filter Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-3xl mx-auto mb-12 glass-panel rounded-full p-2 flex flex-col sm:flex-row items-center gap-2"
      >
        <div className="relative w-full sm:w-1/2 flex-shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search modules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-vision-cyan/50 transition-colors"
          />
        </div>
        <div className="flex-1 w-full overflow-x-auto pb-2 sm:pb-0 hide-scrollbar flex items-center gap-2 px-2">
           {categories.slice(0, 4).map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-white text-black' : 'text-white/60 hover:bg-white/10 hover:text-white'}`}
             >
               {cat}
             </button>
           ))}
        </div>
      </motion.div>

      {/* Grid of Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {filteredModules.map((module: Module34Item, idx: number) => {
          // @ts-ignore
          const Icon = LucideIcons[module.iconName] || LucideIcons.Box;
          return (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (idx % 8) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-6 rounded-3xl group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-vision-cyan/0 to-vision-purple/0 group-hover:from-vision-cyan/10 group-hover:to-vision-purple/10 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                <Icon className="w-6 h-6 group-hover:text-vision-cyan transition-colors" />
              </div>
              
              <h3 className="text-xl font-medium text-white tracking-tight mb-2">{module.title}</h3>
              <p className="text-sm text-vision-textMuted font-light leading-relaxed flex-grow">{module.tagline}</p>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">{module.category}</span>
              </div>
            </div>
          </motion.div>
        )})}
      </div>

    </section>
  );
};
