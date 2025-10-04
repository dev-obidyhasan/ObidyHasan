/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import React, { useEffect, useRef } from "react";

interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}

const Earth: React.FC<EarthProps> = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.08, 0.08, 0.08],
  markerColor = [1, 0, 0],
  glowColor = [0, 0, 0],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let globe: any;
    let animation: any;

    const resizeAndInit = () => {
      if (!canvasRef.current) return;

      const width = canvasRef.current.offsetWidth * 2; // devicePixelRatio handled
      const height = width;

      // Destroy previous globe on resize
      if (globe) globe.destroy();

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width,
        height,
        phi: 0,
        theta,
        dark,
        scale,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        opacity: 1,
        offset: [0, 0],
        markers: [],
        onRender: (state: Record<string, any>) => {
          state.phi = phi;
          phi += 0.003;
        },
      });
    };

    resizeAndInit();
    window.addEventListener("resize", resizeAndInit);

    return () => {
      if (globe) globe.destroy();
      window.removeEventListener("resize", resizeAndInit);
      cancelAnimationFrame(animation);
    };
  }, [
    baseColor,
    dark,
    diffuse,
    glowColor,
    mapBrightness,
    mapSamples,
    scale,
    theta,
    markerColor,
  ]);

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full max-w-md aspect-square", // aspect-square keeps it responsive
        className
      )}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default Earth;
