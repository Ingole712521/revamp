export function SectionHeading({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-8 md:mb-10">
            <h2 className="text-balance text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-zinc-950 md:text-2xl dark:text-white">
                {title}
            </h2>
            {description ? (
                <p className="mt-2.5 max-w-[65ch] text-pretty text-[15px] leading-[1.65] text-zinc-500 dark:text-zinc-400">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
