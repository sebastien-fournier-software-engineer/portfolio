import React, { useMemo } from "react";
import Particles from "react-tsparticles";

/**
 * Robotics-themed particle background: connected nodes (grid-like),
 * white/cyan palette, subtle motion.
 */
function Particle() {
  const config = useMemo(
    () => ({
      fullScreen: { enable: false },
      pauseOnBlur: false,
      pauseOnOutsideViewport: false,
      background: { color: { value: "transparent" } },
      particles: {
        number: {
          value: 60,
          density: { enable: true, value_area: 800 },
        },
        color: { value: ["#ffffff", "#7dd3fc", "#22d3ee", "#a78bfa"] },
        shape: { type: "edge" },
        opacity: {
          value: { min: 0.15, max: 0.5 },
          animation: { enable: true, speed: 0.8, sync: false, opacity_min: 0.1 },
        },
        size: { value: { min: 0.5, max: 1.5 } },
        links: {
          enable: true,
          distance: 140,
          color: "#ffffff",
          opacity: 0.12,
          width: 0.8,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: {
            distance: 180,
            links: { opacity: 0.25, color: "#7dd3fc" },
          },
          push: { quantity: 2 },
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
