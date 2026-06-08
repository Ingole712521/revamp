const SPLASH_KEY = "splash-shown";

let splashCompleted = false;

export function hasSplashCompleted(): boolean {
    if (splashCompleted) return true;

    if (typeof window !== "undefined") {
        const stored = sessionStorage.getItem(SPLASH_KEY) === "true";
        if (stored) splashCompleted = true;
        return stored;
    }

    return false;
}

export function markSplashCompleted(): void {
    splashCompleted = true;
    if (typeof window !== "undefined") {
        sessionStorage.setItem(SPLASH_KEY, "true");
    }
}
