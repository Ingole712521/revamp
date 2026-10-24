export function SectionHeading({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-8 md:mb-10">
            <h2 className="text-balance text-[length:var(--text-title)] font-semibold leading-[1.2] tracking-[-0.02em] text-zinc-950 dark:text-white">
                {title}
            </h2>
            {description ? (
                <p className="mt-2 max-w-[65ch] text-pretty text-[0.9375rem] leading-[1.6] text-zinc-500 md:text-base dark:text-zinc-400">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
