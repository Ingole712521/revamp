export function SectionHeading({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-10 md:mb-12">
            <h2 className="text-balance text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-zinc-950 md:text-4xl dark:text-white">
                {title}
            </h2>
            {description ? (
                <p className="mt-3 max-w-[65ch] text-pretty text-[15px] leading-[1.65] text-zinc-500 dark:text-zinc-400">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
