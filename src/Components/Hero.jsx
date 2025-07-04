import React from "react";
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";
import { Island } from "../models/Island";
import { Sky } from "../models/Sky";
import { Plane } from "../models/Plane";
import { Bird } from "../models/Bird";
import HeroInfo from "./HeroInfo";
export const Hero = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currStage, setCurrentStage] = useState(1);
  const adjustIslandScreenSize = () => {
    let screenscale = null;
    let screenposition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenscale = [0.9, 0.9, 0.9];
    } else {
      screenscale = [1, 1, 1];
    }
    return [screenscale, screenposition, rotation];
  };
  const adjustPlaneScreenSize = () => {
    let screenscale, screenposition;
    if (window.innerWidth < 768) {
      screenscale = [1.5, 1.5, 1.5];
      screenposition = [0, -1.5, 0];
    } else {
      screenscale = [3, 3, 3];
      screenposition = [-4, -4, -4];
    }
    return [screenscale, screenposition];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandScreenSize();
  const [planeScale, planePosition] = adjustPlaneScreenSize();
  return (
    <section id="hero" className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currStage && <HeroInfo currStage={currStage} />}
      </div>
      <Canvas
        className={`w-full h-screen relative ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            rotation={[0, 20, 0]}
            position={planePosition}
            scale={planeScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
