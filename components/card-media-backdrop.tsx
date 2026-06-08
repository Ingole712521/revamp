import { CARD_MEDIA_BACKDROP, CARD_MEDIA_GRID_STYLE } from "@/lib/card-styles";
import { cn } from "@/lib/utils";

export function CardMediaBackdrop({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex items-center justify-center overflow-hidden",
                CARD_MEDIA_BACKDROP,
                className,
            )}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-30"
                style={CARD_MEDIA_GRID_STYLE}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-slate-300/60 blur-3xl dark:bg-slate-600/20"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-8 size-44 rounded-full bg-zinc-300/50 blur-3xl dark:bg-zinc-700/15"
            />
            {children}
        </div>
    );
}
