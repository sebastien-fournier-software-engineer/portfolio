import React, { useMemo } from "react";
import Particles from "react-tsparticles";

/**
 * Neural-cloud particle background: dark grey/black nodes
 * connected like a network of neurons on a white canvas.
 * Organic, slow movement — sober and premium.
 *
 * Performance-optimised: reduced count, disabled per-particle
 * animations, limited link distance, and FPS cap.
 */
function Particle() {
  const config = useMemo(
    () => ({
      fullScreen: { enable: false },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      fpsLimit: 30,
      background: { color: { value: "transparent" } },
      particles: {
        number: {
          value: 80,
          density: { enable: true, value_area: 900 },
        },
        color: {
          value: ["#1a1a1a", "#333333", "#555555", "#777777", "#999999"],
        },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.15, max: 0.45 },
          animation: {
            enable: true,
            speed: 0.4,
            sync: false,
            opacity_min: 0.08,
          },
        },
        size: {
          value: { min: 1, max: 3.5 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
            size_min: 0.5,
          },
        },
        links: {
          enable: true,
          distance: 160,
          color: "#aaaaaa",
          opacity: 0.12,
          width: 0.8,
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: false },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.25,
              color: "#555555",
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      options={config}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default Particle;
