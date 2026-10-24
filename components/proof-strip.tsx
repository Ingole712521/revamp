import { PROOF } from "@/lib/constants";

export function ProofStrip() {
    return (
        <section
            aria-label="Shipping record"
            className="section-container border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
                {PROOF.map((item) => (
                    <div key={item.figure}>
                        <dt className="font-semibold tabular-nums leading-none tracking-[-0.03em] text-zinc-950 dark:text-white text-[clamp(2.25rem,4vw,3.25rem)]">
                            {item.figure}
                        </dt>
                        <dd className="mt-2 max-w-[28ch] text-sm leading-snug text-zinc-600 dark:text-zinc-300">
                            {item.detail}
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
