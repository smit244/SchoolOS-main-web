import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Stars, Trail, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckSquare, Users, Presentation, Smartphone, CreditCard, 
  FileText, Sparkles, BookOpen, Library, Bus, PieChart, 
  FileBarChart, Award, Activity 
} from 'lucide-react';

const PLANETS_DATA = [
  { id: 'attendance', title: 'Attendance', icon: CheckSquare, color: '#3b82f6', radius: 4, speed: 0.2, size: 0.4 },
  { id: 'student', title: 'Student Management', icon: Users, color: '#f8fafc', radius: 5.5, speed: 0.15, size: 0.5 },
  { id: 'teacher', title: 'Teacher Portal', icon: Presentation, color: '#14b8a6', radius: 7, speed: 0.1, size: 0.45 },
  { id: 'parent', title: 'Parent App', icon: Smartphone, color: '#ec4899', radius: 8.5, speed: 0.08, size: 0.4 },
  { id: 'fee', title: 'Fee Management', icon: CreditCard, color: '#10b981', radius: 10, speed: 0.12, size: 0.55 },
  { id: 'exam', title: 'Examination', icon: FileText, color: '#ef4444', radius: 11.5, speed: 0.09, size: 0.45 },
  { id: 'ai', title: 'Question Paper AI', icon: Sparkles, color: '#06b6d4', radius: 13, speed: 0.07, size: 0.6 },
  { id: 'homework', title: 'Homework', icon: BookOpen, color: '#6366f1', radius: 14.5, speed: 0.11, size: 0.4 },
  { id: 'library', title: 'Library', icon: Library, color: '#8b5cf6', radius: 16, speed: 0.06, size: 0.5 },
  { id: 'transport', title: 'Transport', icon: Bus, color: '#f97316', radius: 17.5, speed: 0.05, size: 0.45 },
  { id: 'analytics', title: 'Analytics', icon: PieChart, color: '#eab308', radius: 19, speed: 0.04, size: 0.65 },
  { id: 'reports', title: 'Reports', icon: FileBarChart, color: '#84cc16', radius: 20.5, speed: 0.03, size: 0.4 },
  { id: 'certificates', title: 'Certificates', icon: Award, color: '#fcd34d', radius: 22, speed: 0.02, size: 0.35 }
];

// The VisionOS Glass Window UI
const GlassDashboard = ({ planet, isHovered }: { planet: typeof PLANETS_DATA[0], isHovered: boolean }) => {
  if (!isHovered) return null;
  const Icon = planet.icon;
  
  return (
    <Html position={[1, 1, 0]} center zIndexRange={[100, 0]} className="pointer-events-none">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -20, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -20, rotateX: -10 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="w-72 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[2rem] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner" style={{ color: planet.color }}>
              <Icon size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{planet.title}</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_currentColor]" style={{ backgroundColor: planet.color }} />
                <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Live Sync</span>
              </div>
            </div>
          </div>
          
          {/* Animated Mock Charts */}
          <div className="space-y-3">
            <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden border border-white/5">
              <motion.div className="h-full rounded-full" style={{ backgroundColor: planet.color }} initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, delay: 0.2 }} />
            </div>
            <div className="w-3/4 h-2 bg-black/20 rounded-full overflow-hidden border border-white/5">
              <motion.div className="h-full rounded-full" style={{ backgroundColor: planet.color }} initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ duration: 1, delay: 0.4 }} />
            </div>
            
            <div className="pt-2 flex justify-between items-end h-16">
              {[40, 70, 50, 90, 60, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.1), type: 'spring' }}
                  className="w-3 rounded-t-sm opacity-80"
                  style={{ backgroundColor: planet.color }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Html>
  );
};

// Single Orbiting Planet
const Planet = ({ data, hoveredId, setHoveredId }: { data: typeof PLANETS_DATA[0], hoveredId: string | null, setHoveredId: (id: string | null) => void }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  // Random starting angle
  const [angle] = useState(() => Math.random() * Math.PI * 2);
  const isHovered = hoveredId === data.id;

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;
    
    // Orbit rotation (Pause if anything is hovered to focus)
    if (!hoveredId) {
      groupRef.current.rotation.y += delta * data.speed;
    } else if (isHovered) {
      // Very slow orbit when specifically focusing on this planet
      groupRef.current.rotation.y += delta * (data.speed * 0.1);
    }
    
    // Self rotation
    meshRef.current.rotation.y += delta;
    meshRef.current.rotation.x += delta * 0.5;
  });

  return (
    <group ref={groupRef} rotation={[0, angle, 0]}>
      {/* Orbit Path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[data.radius - 0.02, data.radius + 0.02, 64]} />
        <meshBasicMaterial color={data.color} transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>

      {/* The Planet Group placed at the radius */}
      <group position={[data.radius, 0, 0]}>
        
        {/* Trail effect */}
        <Trail width={1} color={data.color} length={20} decay={1} local={false}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh 
              ref={meshRef}
              onPointerOver={(e) => { e.stopPropagation(); setHoveredId(data.id); document.body.style.cursor = 'pointer'; }}
              onPointerOut={() => { setHoveredId(null); document.body.style.cursor = 'auto'; }}
            >
              <sphereGeometry args={[data.size, 32, 32]} />
              <meshStandardMaterial 
                color={data.color} 
                emissive={data.color} 
                emissiveIntensity={isHovered ? 1 : 0.4} 
                roughness={0.2}
                metalness={0.8}
              />
              
              {/* Outer Atmosphere Glow */}
              <mesh scale={1.2}>
                <sphereGeometry args={[data.size, 32, 32]} />
                <meshBasicMaterial color={data.color} transparent opacity={0.15} blending={THREE.AdditiveBlending} />
              </mesh>
            </mesh>
          </Float>
        </Trail>
        
        <GlassDashboard planet={data} isHovered={isHovered} />
      </group>
    </group>
  );
};

// Central Sun / AI Core
const SchoolOSCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <group>
      {/* Outer Glow */}
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </mesh>
      
      {/* Liquid Glass Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          transmission={0.9}
          opacity={1}
          metalness={0}
          roughness={0}
          ior={1.5}
          thickness={2}
          specularIntensity={1}
          specularColor="#ffffff"
        />
      </mesh>

      {/* HTML Logo exactly in the center */}
      <Html center zIndexRange={[50, 0]} className="pointer-events-none">
        <div className="flex flex-col items-center justify-center">
          <img src="/logo.png" alt="SchoolOS Core" className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(59,130,246,1)]" />
        </div>
      </Html>
    </group>
  );
};

// Dynamic Camera Controller
const SceneController = ({ hoveredId }: { hoveredId: string | null }) => {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Scroll progress affects base rotation and height
    const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    
    // Target position based on interaction
    const targetZ = hoveredId ? 15 : 25 + scroll * 10;
    const targetY = hoveredId ? 2 : 15 - scroll * 10;
    const targetX = hoveredId ? Math.sin(state.clock.elapsedTime * 0.1) * 2 : 0;
    
    // Smoothly interpolate camera
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    
    camera.lookAt(0, 0, 0);
  });
  
  return null;
};

export const SolarSystem: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative w-full h-[150vh] bg-[#020617] overflow-hidden" id="ecosystem">
      
      {/* HTML Overlay Headers (Top) */}
      <div className="absolute top-24 left-0 right-0 z-10 text-center pointer-events-none px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
        >
          <Activity className="w-4 h-4 text-vision-cyan" />
          <span className="text-sm font-bold text-white tracking-wide">Unified Intelligence</span>
        </motion.div>
        
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-vision-blueGlow to-vision-cyan">AI Ecosystem.</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
          Experience the interconnected universe of SchoolOS. Hover over any planet to view live module telemetry.
        </p>
      </div>

      <div className="sticky top-0 w-full h-screen">
        <Canvas camera={{ position: [0, 15, 25], fov: 45 }} gl={{ antialias: true, alpha: false }}>
          
          {/* Deep Space Background Color */}
          <color attach="background" args={['#020617']} />
          
          {/* Ambient & Directional Lights */}
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#06b6d4" distance={50} />
          <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -20, -10]} intensity={0.5} color="#8b5cf6" />
          
          {/* Environment */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* Controllers */}
          <SceneController hoveredId={hoveredId} />
          
          {/* Center Core */}
          <SchoolOSCore />
          
          {/* Planets */}
          {PLANETS_DATA.map((planet) => (
            <Planet key={planet.id} data={planet} hoveredId={hoveredId} setHoveredId={setHoveredId} />
          ))}
          
        </Canvas>
      </div>
    </section>
  );
};
