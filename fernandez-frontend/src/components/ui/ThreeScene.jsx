import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Load the FBX car model
    const loader = new FBXLoader();
    loader.load(
      '/car.fbx', // Path to car.fbx in public folder
      (fbx) => {
        modelRef.current = fbx;
        scene.add(fbx);
        fbx.position.set(0, -1, 0); // Adjust position for car model
        fbx.scale.set(0.01, 0.01, 0.01); // Adjust scale as needed
      },
      undefined,
      (error) => console.error('Error loading FBX model:', error)
    );

    // Position the camera
    camera.position.z = 5;

    // Scroll event for rotation
    const handleScroll = () => {
      if (modelRef.current) {
        const scrollY = window.scrollY;
        modelRef.current.rotation.y = scrollY * 0.005; // Slower rotation for smooth effect
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="rounded-none shadow-apple w-full h-64 sm:h-80 md:h-96 lg:h-screen object-contain"
    />
  );
};

export default ThreeScene;
