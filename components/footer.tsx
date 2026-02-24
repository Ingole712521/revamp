import { HERO } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="w-full py-10 border-t border-zinc-100 dark:border-zinc-900 text-center">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">© {new Date().getFullYear()} {HERO.name}. Built with Next.js & ScrollX UI.</p>
        </footer>
    );
}
