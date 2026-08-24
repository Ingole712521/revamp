export function SectionHeading({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-8 md:mb-10">
            <h2 className="text-balance text-[1.75rem] leading-[1.15] tracking-[-0.02em] text-zinc-950 md:text-[2rem] dark:text-white">
                {title}
            </h2>
            {description ? (
                <p className="mt-3 max-w-[65ch] text-pretty text-[15px] leading-[1.65] text-zinc-600 dark:text-zinc-400">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
