export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUINT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_SHEET: [number, number, number, number] = [0.32, 0.72, 0, 1];

export const SPRING_MAGNETIC = {
    stiffness: 280,
    damping: 26,
    mass: 0.4,
} as const;

export const SPRING_PROGRESS = {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
} as const;
