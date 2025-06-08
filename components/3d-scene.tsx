"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Scene3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create a floating laptop model (simplified as cubes for now)
    const laptop = new THREE.Group();

    // Laptop base
    const baseGeometry = new THREE.BoxGeometry(3, 0.2, 2);
    const baseMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a1a1a,
      flatShading: true,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    laptop.add(base);

    // Laptop screen
    const screenGeometry = new THREE.BoxGeometry(2.8, 0.1, 1.8);
    const screenMaterial = new THREE.MeshPhongMaterial({
      color: 0x333333,
      flatShading: true,
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.y = 0.15;
    laptop.add(screen);

    // Screen display
    const displayGeometry = new THREE.PlaneGeometry(2.7, 1.7);
    const displayMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      side: THREE.DoubleSide,
    });
    const display = new THREE.Mesh(displayGeometry, displayMaterial);
    display.position.y = 0.21;
    display.position.z = 0.01;
    display.rotation.x = Math.PI * 0.5;
    laptop.add(display);

    // Floating code particles
    const particlesGroup = new THREE.Group();
    const particleGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);

    // Create different colored particles
    const colors = [0x3b82f6, 0x10b981, 0xf97316, 0x8b5cf6];

    for (let i = 0; i < 100; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.8,
      });

      const particle = new THREE.Mesh(particleGeometry, material);

      // Random position around laptop
      particle.position.x = (Math.random() - 0.5) * 4;
      particle.position.y = (Math.random() - 0.5) * 4;
      particle.position.z = (Math.random() - 0.5) * 4;

      // Store random animation values
      particle.userData = {
        speed: Math.random() * 0.02 + 0.01,
        rotationSpeed: Math.random() * 0.02 + 0.01,
        direction: Math.random() > 0.5 ? 1 : -1,
      };

      particlesGroup.add(particle);
    }

    scene.add(particlesGroup);
    scene.add(laptop);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 1);
    pointLight2.position.set(-5, 3, -5);
    scene.add(pointLight2);

    // Position camera
    camera.position.z = 5;
    camera.position.y = 2;
    camera.lookAt(laptop.position);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Slightly float the laptop up and down
      laptop.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      laptop.rotation.y += 0.002;

      // Animate each particle
      particlesGroup.children.forEach((particle: THREE.Object3D) => {
        if (particle.type === "Mesh") {
          const mesh = particle as THREE.Mesh;
          const { speed, rotationSpeed, direction } = mesh.userData;

          // Rotate each particle
          mesh.rotation.x += rotationSpeed;
          mesh.rotation.y += rotationSpeed * 0.5;

          // Move in a circular pattern
          const time = Date.now() * 0.001;
          const radius = 2 + Math.sin(time * speed) * 0.5;
          const angle = time * speed * direction;

          mesh.position.x = Math.cos(angle) * radius;
          mesh.position.z = Math.sin(angle) * radius;
          mesh.position.y = Math.sin(time * speed * 2) * 1.5;
        }
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;

      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[300px] lg:h-[500px] rounded-lg overflow-hidden"
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
}
