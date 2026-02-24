import { HERO } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="section-container border-t border-zinc-100 dark:border-zinc-900 text-center py-10">
            <p className="text-sm">© {new Date().getFullYear()} {HERO.name}. Built with Next.js & ScrollX UI.</p>
        </footer>
    );
}
