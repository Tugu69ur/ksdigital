import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 5.8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const outerGeometry = new THREE.IcosahedronGeometry(1.72, 1);
    const outerMaterial = new THREE.MeshBasicMaterial({
      color: 0x3a3a38,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
    mainGroup.add(outerMesh);

    const pointsGeometry = new THREE.IcosahedronGeometry(1.72, 1);
    const pointsCount = pointsGeometry.attributes.position.count;
    const colors = new Float32Array(pointsCount * 3);

    for (let i = 0; i < pointsCount; i++) {
      if (i % 3 === 0) {
        colors[i * 3] = 0.784;
        colors[i * 3 + 1] = 1.0;
        colors[i * 3 + 2] = 0.0;
      } else {
        colors[i * 3] = 0.85;
        colors[i * 3 + 1] = 0.85;
        colors[i * 3 + 2] = 0.8;
      }
    }
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    mainGroup.add(pointsMesh);

    const knotGeometry = new THREE.TorusKnotGeometry(0.72, 0.18, 128, 16);
    const knotMaterial = new THREE.MeshBasicMaterial({
      color: 0xc8ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    mainGroup.add(knotMesh);

    const ringGeometry = new THREE.TorusGeometry(2.15, 0.008, 8, 128);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xc8ff00,
      transparent: true,
      opacity: 0.22,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 2.4;
    mainGroup.add(ringMesh);

    const particleCount = 90;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 7;
      particlePos[i + 1] = (Math.random() - 0.5) * 7;
      particlePos[i + 2] = (Math.random() - 0.5) * 5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xc8ff00,
      size: 0.028,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 1.15;
      targetRotationX = y * 1.15;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        outerMesh.rotation.y += delta * 0.14;
        outerMesh.rotation.x += delta * 0.07;
        pointsMesh.rotation.y = outerMesh.rotation.y;
        pointsMesh.rotation.x = outerMesh.rotation.x;

        knotMesh.rotation.y -= delta * 0.32;
        knotMesh.rotation.z += delta * 0.14;

        ringMesh.rotation.z += delta * 0.08;
        ringMesh.rotation.y = Math.sin(elapsedTime * 0.35) * 0.2;

        particles.rotation.y = elapsedTime * 0.04;

        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;

        mainGroup.rotation.x = currentRotationX;
        mainGroup.rotation.y = currentRotationY;
        mainGroup.position.y = Math.sin(elapsedTime * 1.15) * 0.09;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      outerGeometry.dispose();
      outerMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      knotGeometry.dispose();
      knotMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div className="hero-canvas-container" ref={mountRef} aria-hidden="true" />;
}
