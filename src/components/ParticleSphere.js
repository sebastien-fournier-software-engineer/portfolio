import React, { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * 3D Orbiting Particle Sphere — Three.js (vanilla)
 *
 * Single sphere of particles with interactive hover effects:
 *   • Repulsion  — particles near the cursor push outward
 *   • Highlight  — opacity brightens on hover
 *   • Speed boost — rotation accelerates while hovering
 *   • Satellite  — a small dot orbiting inside the sphere with a fading trail
 */

/* ---------- helpers ---------- */

/** Fibonacci-sphere distribution — near-uniform point spread */
function fibonacciSphere(count, radius) {
  const positions = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // −1 → 1
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    positions[i * 3] = Math.cos(theta) * r * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * r * radius;
  }

  return positions;
}

/* ---------- config ---------- */

const SPHERE = {
  count: 700,
  radius: 1.9,
  color: "#000000",
  opacity: 1.0,
  size: 0.038,
  speed: { x: 0.06, y: 0.18, z: 0.03 },
};

// Hover interaction tuning
const REPULSE_RADIUS = 0.9;      // influence zone around hover point
const REPULSE_STRENGTH = 0.7;    // max outward push distance
const RESTORE_SPEED = 2.5;       // how fast particles snap back
const HOVER_SPEED_MUL = 4.0;     // rotation multiplier on hover
const SPEED_LERP = 3.0;          // easing speed for rotation transition

// Satellite (inner orbiting dots) — shared defaults + per-satellite overrides
const SAT_DEFAULTS = {
  radius: 0.045,                 // satellite dot radius
  glowScale: 0.38,              // soft halo size around the dot
  orbitRadius: 1.05,             // how far from centre the satellite orbits
  verticalScale: 0.55,           // flattens the orbit vertically
  trailLength: 50,               // number of trail dots
  trailDotSize: 0.018,           // largest trail dot (near satellite)
  trailOpacity: 0.45,            // peak trail opacity
};

const SATS = [
  { // Satellite A — wider, slower orbit
    ...SAT_DEFAULTS,
    freqX: 0.30, freqY: 0.47, freqZ: 0.37,
    phaseX: 0, phaseY: Math.PI / 3, phaseZ: Math.PI / 5,
  },
  { // Satellite B — tighter, faster, tilted orbit (smaller dot)
    ...SAT_DEFAULTS,
    radius: 0.025,
    glowScale: 0.22,
    orbitRadius: 0.85,
    trailDotSize: 0.010,
    trailOpacity: 0.30,
    freqX: 0.43, freqY: 0.31, freqZ: 0.53,
    phaseX: Math.PI / 2, phaseY: Math.PI / 7, phaseZ: Math.PI * 0.8,
  },
];

/* ---------- component ---------- */

export default function ParticleSphere() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { count, radius, color, opacity, size, speed } = SPHERE;

    /* --- Scene / Camera / Renderer --- */
    const scene = new THREE.Scene();

    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* --- Particle group (so everything rotates together) --- */
    const group = new THREE.Group();
    scene.add(group);

    /* --- Build particles --- */
    const origPositions = fibonacciSphere(count, radius);
    const currentPositions = new Float32Array(origPositions.length);
    currentPositions.set(origPositions);

    const geometry = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(currentPositions, 3);
    geometry.setAttribute("position", posAttr);

    const material = new THREE.PointsMaterial({
      color,
      size,
      sizeAttenuation: true,
      transparent: true,
      opacity,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    group.add(points);

    /* --- Invisible sphere for raycasting --- */
    const hitSphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.15, 32, 16),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    group.add(hitSphere);

    /* --- Shared glow texture (reused by both satellites) --- */
    const glowCanvas = document.createElement("canvas");
    glowCanvas.width = 64;
    glowCanvas.height = 64;
    const ctx = glowCanvas.getContext("2d");
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(26, 26, 26, 0.50)");
    grad.addColorStop(0.35, "rgba(26, 26, 26, 0.18)");
    grad.addColorStop(1, "rgba(26, 26, 26, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const glowTexture = new THREE.CanvasTexture(glowCanvas);

    /* --- Shared trail shader (reused by both satellites) --- */
    const trailShaderMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0x1a1a1a) },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aAlpha;
        varying float vAlpha;
        uniform float uPixelRatio;
        void main() {
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPixelRatio * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float circle = smoothstep(0.5, 0.15, d);
          gl_FragColor = vec4(uColor, circle * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    /* --- Build satellites (dot + glow + trail each) --- */
    const satellites = SATS.map((cfg) => {
      // Dot mesh
      const geom = new THREE.SphereGeometry(cfg.radius, 16, 8);
      const mat = new THREE.MeshBasicMaterial({ color: 0x1a1a1a });
      const mesh = new THREE.Mesh(geom, mat);
      scene.add(mesh);

      // Glow halo (child of mesh → follows automatically)
      const glowMat = new THREE.SpriteMaterial({
        map: glowTexture,
        transparent: true,
        depthWrite: false,
      });
      const glow = new THREE.Sprite(glowMat);
      glow.scale.set(cfg.glowScale, cfg.glowScale, cfg.glowScale);
      mesh.add(glow);

      // Trail buffers
      const trailPos = new Float32Array(cfg.trailLength * 3);
      const trailSizes = new Float32Array(cfg.trailLength);
      const trailAlphas = new Float32Array(cfg.trailLength);

      for (let i = 0; i < cfg.trailLength; i++) {
        const t = i / (cfg.trailLength - 1);
        trailSizes[i] = cfg.trailDotSize * (1 - t * 0.85);
        trailAlphas[i] = cfg.trailOpacity * (1 - t);
      }

      const trailGeom = new THREE.BufferGeometry();
      trailGeom.setAttribute("position", new THREE.BufferAttribute(trailPos, 3));
      trailGeom.setAttribute("aSize", new THREE.BufferAttribute(trailSizes, 1));
      trailGeom.setAttribute("aAlpha", new THREE.BufferAttribute(trailAlphas, 1));
      trailGeom.setDrawRange(0, 0);

      const trail = new THREE.Points(trailGeom, trailShaderMat);
      scene.add(trail);

      return { cfg, mesh, geom, mat, glowMat, trailPos, trailGeom, trail, filled: 0 };
    });

    let satTime = 0;

    /* --- Raycaster & mouse --- */
    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2(-10, -10); // start off-screen

    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }
    window.addEventListener("mousemove", onMouseMove);

    /* --- Animation state --- */
    let currentSpeedMul = 1.0;
    const baseOpacity = opacity;
    const clock = new THREE.Clock();
    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      /* — Raycast to detect hover — */
      raycaster.setFromCamera(mouseNDC, camera);
      const intersects = raycaster.intersectObject(hitSphere);

      let hoverLocal = null;
      const isHovering = intersects.length > 0;

      if (isHovering) {
        // Convert hit point into group's local space
        hoverLocal = group.worldToLocal(intersects[0].point.clone());
      }

      /* — Speed boost (smooth lerp) — */
      const targetMul = isHovering ? HOVER_SPEED_MUL : 1.0;
      currentSpeedMul += (targetMul - currentSpeedMul) * Math.min(delta * SPEED_LERP, 1);

      group.rotation.x += speed.x * delta * currentSpeedMul;
      group.rotation.y += speed.y * delta * currentSpeedMul;
      group.rotation.z += speed.z * delta * currentSpeedMul;

      /* — Highlight (opacity boost) — */
      const targetOpacity = isHovering ? Math.min(baseOpacity + 0.1, 1.0) : baseOpacity;
      material.opacity += (targetOpacity - material.opacity) * Math.min(delta * 4, 1);

      /* — Repulsion — */
      const pos = posAttr.array;
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const ox = origPositions[ix];
        const oy = origPositions[ix + 1];
        const oz = origPositions[ix + 2];

        if (hoverLocal) {
          const dx = ox - hoverLocal.x;
          const dy = oy - hoverLocal.y;
          const dz = oz - hoverLocal.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < REPULSE_RADIUS && dist > 0.001) {
            // Push outward along the direction from hover → particle
            const factor = (1 - dist / REPULSE_RADIUS) * REPULSE_STRENGTH;
            const nx = dx / dist;
            const ny = dy / dist;
            const nz = dz / dist;

            const tx = ox + nx * factor;
            const ty = oy + ny * factor;
            const tz = oz + nz * factor;

            // Smooth toward displaced position
            pos[ix] += (tx - pos[ix]) * Math.min(delta * 8, 1);
            pos[ix + 1] += (ty - pos[ix + 1]) * Math.min(delta * 8, 1);
            pos[ix + 2] += (tz - pos[ix + 2]) * Math.min(delta * 8, 1);
          } else {
            // Outside influence → restore
            pos[ix] += (ox - pos[ix]) * Math.min(delta * RESTORE_SPEED, 1);
            pos[ix + 1] += (oy - pos[ix + 1]) * Math.min(delta * RESTORE_SPEED, 1);
            pos[ix + 2] += (oz - pos[ix + 2]) * Math.min(delta * RESTORE_SPEED, 1);
          }
        } else {
          // Not hovering → restore all
          pos[ix] += (ox - pos[ix]) * Math.min(delta * RESTORE_SPEED, 1);
          pos[ix + 1] += (oy - pos[ix + 1]) * Math.min(delta * RESTORE_SPEED, 1);
          pos[ix + 2] += (oz - pos[ix + 2]) * Math.min(delta * RESTORE_SPEED, 1);
        }
      }
      posAttr.needsUpdate = true;

      /* — Satellite orbits (Lissajous curves inside the sphere) — */
      satTime += delta;
      for (const s of satellites) {
        const { cfg, mesh, trailPos, trailGeom } = s;
        const rx = cfg.orbitRadius * Math.sin(cfg.freqX * satTime + cfg.phaseX);
        const ry = cfg.orbitRadius * cfg.verticalScale * Math.sin(cfg.freqY * satTime + cfg.phaseY);
        const rz = cfg.orbitRadius * Math.cos(cfg.freqZ * satTime + cfg.phaseZ);
        mesh.position.set(rx, ry, rz);

        // Shift trail history (newest at index 0)
        for (let i = cfg.trailLength - 1; i > 0; i--) {
          trailPos[i * 3]     = trailPos[(i - 1) * 3];
          trailPos[i * 3 + 1] = trailPos[(i - 1) * 3 + 1];
          trailPos[i * 3 + 2] = trailPos[(i - 1) * 3 + 2];
        }
        trailPos[0] = rx;
        trailPos[1] = ry;
        trailPos[2] = rz;

        if (s.filled < cfg.trailLength) s.filled++;
        trailGeom.setDrawRange(0, s.filled);
        trailGeom.attributes.position.needsUpdate = true;
      }

      /* — Gentle camera sway (clamp to avoid wild movement when mouse is outside) — */
      const clampedX = Math.max(-1, Math.min(1, mouseNDC.x));
      const clampedY = Math.max(-1, Math.min(1, mouseNDC.y));
      camera.position.x += (clampedX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (clampedY * 0.3 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    animate();

    /* --- Resize handling --- */
    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      trailShaderMat.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    }
    window.addEventListener("resize", onResize);

    /* --- Cleanup --- */
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      hitSphere.geometry.dispose();
      hitSphere.material.dispose();
      for (const s of satellites) {
        s.geom.dispose();
        s.mat.dispose();
        s.glowMat.dispose();
        s.trailGeom.dispose();
      }
      glowTexture.dispose();
      trailShaderMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "550px",
        position: "relative",
      }}
    />
  );
}
