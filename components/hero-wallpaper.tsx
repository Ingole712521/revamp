"use client";

import type { CSSProperties } from "react";

const COLUMNS = [
    {
        duration: "42s",
        delay: "0s",
        lines: [
            "export async function deploy(env: Stage) {",
            "  const cluster = await aws.ecs.describeClusters()",
            "  const image = await docker.build({ tag: env })",
            "  await github.actions.run('terraform-apply')",
            "}",
            "",
            "const pipeline = createPipeline({",
            "  stack: ['Next.js', 'TypeScript', 'AWS'],",
            "  infra: ['Docker', 'Kubernetes', 'Terraform'],",
            "})",
            "",
            "export function AnimioUI({ children }: Props) {",
            "  return <System tokens={tokens}>{children}</System>",
            "}",
            "",
            "type Review = { pr: number; model: 'codex' }",
            "await revio.comment({ file, line, body })",
            "",
            "kubectl apply -f deploy.yaml --namespace prod",
            "ansible-playbook site.yml --limit web",
        ],
    },
    {
        duration: "56s",
        delay: "-12s",
        lines: [
            "interface Service {",
            "  name: string",
            "  region: 'ap-south-1'",
            "}",
            "",
            "const db = await mongodb.connect(uri)",
            "const notes = await generateNotes(pdf)",
            "",
            "git commit -m 'ship: reusable ui primitives'",
            "git push origin main",
            "",
            "terraform apply -auto-approve",
            "docker compose up -d --build",
            "",
            "app.get('/health', (_req, res) => {",
            "  res.json({ ok: true, region })",
            "})",
            "",
            "// 13+ open source contributions",
            "// 80+ articles on Hashnode",
        ],
    },
    {
        duration: "48s",
        delay: "-22s",
        lines: [
            "use client",
            "",
            "export default function Page() {",
            "  return (",
            "    <main className='min-h-screen'>",
            "      <Hero />",
            "      <Work />",
            "    </main>",
            "  )",
            "}",
            "",
            "const tokens = {",
            "  font: 'Inter'",
            "  radius: 8",
            "}",
            "",
            "az acr login --name registry",
            "helm upgrade --install api ./chart",
            "",
            "pnpm build && vercel --prod",
        ],
    },
] as const;

function CodeColumn({
    lines,
    duration,
    delay,
}: {
    lines: readonly string[];
    duration: string;
    delay: string;
}) {
    const block = (
        <ul className="space-y-1.5 font-mono text-[10px] leading-5 sm:text-[11px] sm:leading-5">
            {lines.map((line, i) => (
                <li
                    key={`${line}-${i}`}
                    className={
                        line.startsWith("//")
                            ? "text-zinc-400/80 dark:text-zinc-600"
                            : line.startsWith("export") ||
                                line.startsWith("const") ||
                                line.startsWith("type") ||
                                line.startsWith("interface") ||
                                line.startsWith("await") ||
                                line.startsWith("use ")
                              ? "text-zinc-600 dark:text-zinc-400"
                              : "text-zinc-500/90 dark:text-zinc-500"
                    }
                >
                    {line || "\u00a0"}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="relative min-w-0 flex-1 overflow-hidden">
            <div
                className="hero-code-scroll"
                style={{ "--hero-code-duration": duration, animationDelay: delay } as CSSProperties}
            >
                {block}
                <div className="mt-1.5" aria-hidden>
                    {block}
                </div>
            </div>
        </div>
    );
}

export function HeroWallpaper() {
    return (
        <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-950">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgb(113 113 122 / 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgb(113 113 122 / 0.22) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="absolute inset-0 flex gap-6 px-4 pt-3 sm:gap-10 sm:px-6">
                {COLUMNS.map((column) => (
                    <CodeColumn key={column.duration} {...column} />
                ))}
            </div>

            <div className="absolute inset-x-3 top-3 hidden items-center gap-2 rounded-md border border-zinc-200/80 bg-white/70 px-3 py-1.5 font-mono text-[10px] text-zinc-500 shadow-sm backdrop-blur-sm sm:flex dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
                <span className="flex gap-1" aria-hidden>
                    <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                </span>
                <span>nehal@pune — deploy.yml</span>
                <span className="hero-caret ml-1 inline-block h-3 w-1.5 bg-emerald-500/80" />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent dark:from-black dark:via-black/35 dark:to-transparent" />
        </div>
    );
}
