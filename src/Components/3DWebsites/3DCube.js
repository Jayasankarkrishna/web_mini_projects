

// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const ThreeDImage = () => {
//   const containerRef = useRef();

//   useEffect(() => {
    // Set up scene
    // const scene = new THREE.Scene();
    
    // Set up camera
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.z = 5;
    
    // Set up renderer
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // containerRef.current.appendChild(renderer.domElement);
    
    // Create a cube with image texture
    // const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load('NTR_logo.png');
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ map: texture });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    
    // Animation loop
    // const animate = () => {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render(scene, camera);
//     };
    
//     animate();

//     return () => {
//       containerRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={containerRef} />;
// };

// export default ThreeDImage;



import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDIcon = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10; // Increase the distance of the camera from the cube
    
    // Set up renderer with transparent background
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 200); // Increase the size of the renderer
    containerRef.current.appendChild(renderer.domElement);
    
    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Create a cube with image texture
    const geometry = new THREE.BoxGeometry(2, 2, 2); // Increase the size of the cube
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Set cube color to white
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    
    animate();

    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeDIcon;