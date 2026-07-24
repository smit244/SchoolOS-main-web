import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const AuroraMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Custom Shader for Aurora/Mesh Gradient Effect
  const shaderArgs = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        // Premium Apple-like colors (very soft)
        uColor1: { value: new THREE.Color('#3B82F6') }, // Blue
        uColor2: { value: new THREE.Color('#06B6D4') }, // Cyan
        uColor3: { value: new THREE.Color('#8B5CF6') }, // Purple
        uMouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float uTime;
        
        // Simplex 3D Noise
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        float snoise(vec3 v){ 
          const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
          const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy) );
          vec3 x0 = v - i + dot(i, C.xxx) ;
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min( g.xyz, l.zxy );
          vec3 i2 = max( g.xyz, l.zxy );
          vec3 x1 = x0 - i1 + 1.0 * C.xxx;
          vec3 x2 = x0 - i2 + 2.0 * C.xxx;
          vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
          i = mod(i, 289.0 ); 
          vec4 p = permute( permute( permute( 
                     i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
          float n_ = 1.0/7.0; // N=7
          vec3  ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_ );
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4( x.xy, y.xy );
          vec4 b1 = vec4( x.zw, y.zw );
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                        dot(p2,x2), dot(p3,x3) ) );
        }

        void main() {
          vUv = uv;
          
          // Displace vertices to create slow fluid motion
          vec3 pos = position;
          float noiseFreq = 1.0;
          float noiseAmp = 0.5;
          vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.05, pos.y * noiseFreq + uTime * 0.05, pos.z);
          pos.z += snoise(noisePos) * noiseAmp;

          vPosition = pos;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;

        void main() {
          // Mix colors based on position and time (very slow movement)
          float mix1 = sin(vPosition.x * 2.0 + uTime * 0.1) * 0.5 + 0.5;
          float mix2 = cos(vPosition.y * 2.0 + uTime * 0.15) * 0.5 + 0.5;
          
          vec3 color = mix(uColor1, uColor2, mix1);
          color = mix(color, uColor3, mix2);
          
          // Soft edge blending
          float alpha = 1.0 - smoothstep(0.3, 1.0, length(vUv - 0.5) * 2.0);
          
          // Use very low opacity for premium subtle look on white background
          gl_FragColor = vec4(color, alpha * 0.08);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    };
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} scale={1.5}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <shaderMaterial ref={materialRef} args={[shaderArgs]} />
    </mesh>
  );
};

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-white overflow-hidden pointer-events-none">
      
      {/* 2% Opacity Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-30" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* DOM-based Animated Orbs (Mesh Gradient Look) */}
      <div className="absolute inset-0 z-10 overflow-hidden opacity-60">
        
        {/* Large Blue Gradient Orb */}
        <motion.div 
          animate={{ 
            x: ['-10%', '10%', '-5%', '-10%'],
            y: ['-10%', '5%', '10%', '-10%'],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-vision-blueGlow/10 blur-[120px]"
        />

        {/* Soft Cyan Lighting */}
        <motion.div 
          animate={{ 
            x: ['10%', '-10%', '5%', '10%'],
            y: ['10%', '-5%', '-10%', '10%'],
            scale: [0.9, 1.1, 1, 0.9]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-vision-cyan/10 blur-[130px]"
        />

        {/* Purple Ambient Glow (Bottom) */}
        <motion.div 
          animate={{ 
            x: ['-5%', '15%', '-10%', '-5%'],
            y: ['5%', '-15%', '10%', '5%'],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[10%] w-[80vw] h-[80vw] rounded-full bg-vision-purple/10 blur-[150px]"
        />

        {/* Radial Spotlight Behind Hero */}
        <motion.div 
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_70%)] opacity-80 mix-blend-overlay"
        />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />

        {/* Floating Blurred Circles / Translucent Shapes */}
        <motion.div 
          animate={{ 
            y: ['0vh', '-100vh'],
            x: ['0vw', '10vw', '-5vw', '0vw'],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-[20%] w-[30vw] h-[30vw] rounded-full border border-white/40 bg-white/10 blur-3xl"
        />

        <motion.div 
          animate={{ 
            y: ['0vh', '-120vh'],
            x: ['0vw', '-15vw', '10vw', '0vw'],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear", delay: 10 }}
          className="absolute -bottom-[40%] right-[20%] w-[40vw] h-[40vw] rounded-full border border-vision-cyan/20 bg-vision-cyan/5 blur-[80px]"
        />

      </div>

      {/* Layered Glass Reflection (Static Overlay) */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-white/30 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
      
      {/* React Three Fiber Canvas for WebGL Aurora Light Waves */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <AuroraMesh />
        </Canvas>
      </div>
      
    </div>
  );
};
