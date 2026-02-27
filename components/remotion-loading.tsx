"use client";

import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { getTechIcon } from "@/lib/icons";

// Loading animation component using Remotion
export function RemotionLoading() {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Animation progress (0 to 1)
  const progress = frame / durationInFrames;

  // Name reveal animation
  const nameOpacity = interpolate(
    frame,
    [0, 20, 40],
    [0, 0, 1],
    { extrapolateRight: "clamp" }
  );

  const nameY = interpolate(
    frame,
    [0, 20, 40],
    [50, 50, 0],
    { extrapolateRight: "clamp" }
  );

  // Role reveal animation
  const roleOpacity = interpolate(
    frame,
    [20, 40, 60],
    [0, 0, 1],
    { extrapolateRight: "clamp" }
  );

  const roleY = interpolate(
    frame,
    [20, 40, 60],
    [30, 30, 0],
    { extrapolateRight: "clamp" }
  );

  // Progress bar animation
  const barWidth = interpolate(
    frame,
    [60, 120],
    [0, 100],
    { extrapolateRight: "clamp", easing: Easing.out(Easing.ease) }
  );

  // Fade out at the end
  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  // Tech icons floating animation with full names for icon lookup
  const techIcons = [
    { name: "AWS", icon: getTechIcon("AWS") },
    { name: "Docker", icon: getTechIcon("Docker") },
    { name: "Kubernetes", icon: getTechIcon("Kubernetes") },
    { name: "React", icon: getTechIcon("React") },
    { name: "Next.js", icon: getTechIcon("Next.js") },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: exitOpacity,
      }}
    >

      {/* Floating tech badges */}
      {techIcons.map((tech, index) => {
        const delay = index * 10;
        const floatY = interpolate(
          frame,
          [delay, delay + 60],
          [100, -100],
          { extrapolateRight: "clamp" }
        );
        const floatOpacity = interpolate(
          frame,
          [delay, delay + 10, delay + 50, delay + 60],
          [0, 1, 1, 0],
          { extrapolateRight: "clamp" }
        );
        const floatX = Math.sin((frame + delay * 10) * 0.05) * 30;

        return (
          <div
            key={tech.name}
            style={{
              position: "absolute",
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 2) * 40}%`,
              transform: `translate(${floatX}px, ${floatY}px)`,
              opacity: floatOpacity,
              padding: "8px 16px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              color: "rgba(255,255,255,0.6)",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              style={{ width: 16, height: 16, objectFit: "contain" }}
            />
            {tech.name}
          </div>
        );
      })}

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          zIndex: 10,
        }}
      >
        {/* Avatar image with glow */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(251, 191, 36, 0.4)",
            border: "4px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <img
            src="/image (3).jpg"
            alt="Nehal Ingole"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 900,
            color: "#fff",
            margin: 0,
            opacity: nameOpacity,
            transform: `translateY(${nameY}px)`,
            letterSpacing: "-0.02em",
          }}
        >
          Nehal Ingole
        </h1>

        {/* Role */}
        <p
          style={{
            fontSize: "20px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
            opacity: roleOpacity,
            transform: `translateY(${roleY}px)`,
          }}
        >
          Frontend Developer | DevOps Engineer
        </p>

        {/* Progress bar */}
        <div
          style={{
            width: "200px",
            height: "4px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "2px",
            marginTop: "40px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${barWidth}%`,
              height: "100%",
              background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
            }}
          />
        </div>

        {/* Loading text */}
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.4)",
            marginTop: "16px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          Loading Portfolio...
        </p>
      </div>

      {/* Corner decorations */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 60,
          height: 60,
          borderLeft: "2px solid rgba(251, 191, 36, 0.3)",
          borderTop: "2px solid rgba(251, 191, 36, 0.3)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          width: 60,
          height: 60,
          borderRight: "2px solid rgba(251, 191, 36, 0.3)",
          borderBottom: "2px solid rgba(251, 191, 36, 0.3)",
        }}
      />
    </AbsoluteFill>
  );
}

// Root component for Remotion
export function LoadingVideo() {
  return (
    <RemotionLoading />
  );
}
