import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Background: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1000], [0.8, 0.4]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  return (
    <motion.div 
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black"
      style={{ opacity, scale }}
    >
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-vision-cyan/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-[40vw] h-[60vh] bg-vision-purple/20 rounded-full blur-[150px] mix-blend-screen animate-spin-slow" style={{ animationDuration: '30s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[60vw] h-[40vh] bg-vision-blueGlow/20 rounded-full blur-[140px] mix-blend-screen animate-float" style={{ animationDuration: '10s' }} />
    </motion.div>
  );
};
