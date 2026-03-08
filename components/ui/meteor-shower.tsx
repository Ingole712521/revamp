"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const MeteorShower = ({
  number = 200,
}: {
  number?: number;
}) => {
  const [meteors, setMeteors] = useState<any[]>([]);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    // Generate meteor properties on the client side to prevent hydration mismatches
    const generatedMeteors = new Array(number).fill(true).map(() => ({
      left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteors(generatedMeteors);
  }, [number]);

  // Determine if we should show a dark-mode styled meteor or light-mode styled meteor
  const isDarkMode = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={`absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor-effect ${
            isDarkMode ? "bg-slate-500" : "bg-blue-400"
          }`}
          style={{
            top: 0,
            left: el.left,
            animationDelay: el.animationDelay,
            animationDuration: el.animationDuration,
          }}
        >
          {/* Meteor Tail */}
          <div
            className={`pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-transparent ${
              isDarkMode ? "to-slate-500" : "to-blue-400"
            }`}
          />
        </span>
      ))}
    </>
  );
};
