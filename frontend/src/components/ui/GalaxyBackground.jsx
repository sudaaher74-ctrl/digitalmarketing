"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GalaxyBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#02020A");
    
    // Add subtle fog to blend the deep tunnel
    scene.fog = new THREE.FogExp2("#02020A", 0.0003);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 5000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Responsive limits
    const isMobile = width < 768;
    
    // 2. Deep Space Stars (System 1)
    const deepSpaceCount = isMobile ? 3000 : 25000;
    const deepSpaceGeo = new THREE.BufferGeometry();
    const deepSpacePos = new Float32Array(deepSpaceCount * 3);
    const deepSpaceColors = new Float32Array(deepSpaceCount * 3);
    
    const color1 = new THREE.Color("#7A38EB");
    const color2 = new THREE.Color("#543D98");
    
    for(let i=0; i<deepSpaceCount; i++) {
      deepSpacePos[i*3] = (Math.random() - 0.5) * 4000;
      deepSpacePos[i*3+1] = (Math.random() - 0.5) * 4000;
      deepSpacePos[i*3+2] = (Math.random() - 0.5) * 4000 - 1000;
      
      const mixedColor = color1.clone().lerp(color2, Math.random());
      deepSpaceColors[i*3] = mixedColor.r;
      deepSpaceColors[i*3+1] = mixedColor.g;
      deepSpaceColors[i*3+2] = mixedColor.b;
    }
    deepSpaceGeo.setAttribute('position', new THREE.BufferAttribute(deepSpacePos, 3));
    deepSpaceGeo.setAttribute('color', new THREE.BufferAttribute(deepSpaceColors, 3));
    
    const deepSpaceMat = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.8
    });
    const deepSpace = new THREE.Points(deepSpaceGeo, deepSpaceMat);
    scene.add(deepSpace);

    // Helper to generate a glowing circle texture for foreground stars
    const getCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
      
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    // 3. Foreground Flow / Sphere (System 2)
    const fgCount = isMobile ? 800 : 3000;
    const fgGeo = new THREE.BufferGeometry();
    const fgPos = new Float32Array(fgCount * 3);
    
    for(let i=0; i<fgCount; i++) {
      // Spherical distribution
      const r = Math.random() * 120 + 50; // Inner radius 50, outer 170
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      fgPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
      fgPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      fgPos[i*3+2] = r * Math.cos(phi);
    }
    fgGeo.setAttribute('position', new THREE.BufferAttribute(fgPos, 3));
    
    const fgMat = new THREE.PointsMaterial({
      size: 2.5,
      color: "#7C3AED",
      map: getCircleTexture(),
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const foreground = new THREE.Points(fgGeo, fgMat);
    scene.add(foreground);

    // 4. Warp Tunnel (System 3)
    const tunnelCount = isMobile ? 200 : 880;
    const tunnelGeo = new THREE.BufferGeometry();
    const tunnelPos = new Float32Array(tunnelCount * 3);
    
    for(let i=0; i<tunnelCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 300 + 100;
      tunnelPos[i*3] = Math.cos(angle) * radius;
      tunnelPos[i*3+1] = Math.sin(angle) * radius;
      tunnelPos[i*3+2] = (Math.random() - 1.0) * 3000; // Z from 0 to -3000
    }
    tunnelGeo.setAttribute('position', new THREE.BufferAttribute(tunnelPos, 3));
    
    const tunnelMat = new THREE.PointsMaterial({
      size: 2.0,
      color: "#7C3AED",
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.7
    });
    const tunnel = new THREE.Points(tunnelGeo, tunnelMat);
    scene.add(tunnel);

    // 5. Parallax & Scroll setup
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const onMouseMove = (event) => {
      mouseX = (event.clientX - width / 2);
      mouseY = (event.clientY - height / 2);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // 6. Animation Loop
    let reqId;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      
      const time = clock.getElapsedTime();

      // Ambient Rotations
      deepSpace.rotation.y = time * 0.01;
      deepSpace.rotation.x = time * 0.005;
      
      foreground.rotation.y = time * 0.03;
      foreground.rotation.z = time * 0.01;
      
      tunnel.rotation.z = time * 0.02;

      // Mouse Parallax (smooth)
      targetX = mouseX * 0.05;
      targetY = mouseY * 0.05;
      
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (-targetY - camera.position.y) * 0.02;
      
      // Scroll Parallax (Camera moves forward through tunnel)
      // Base Z is 400. As scrollY increases, Z decreases (moving forward)
      const targetZ = 400 - (scrollY * 0.2); 
      camera.position.z += (targetZ - camera.position.z) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      // Cleanup Three.js
      deepSpaceGeo.dispose();
      deepSpaceMat.dispose();
      fgGeo.dispose();
      fgMat.dispose();
      tunnelGeo.dispose();
      tunnelMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none bg-[#02020A]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      {/* Soft gradient overlay matching Impulse Digital */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          background: "radial-gradient(circle at center, transparent 0%, #02020A 100%)",
          opacity: 0.8
        }}
      />
    </div>
  );
}
