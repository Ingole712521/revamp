"use client";

import type { CSSProperties } from "react";

const COLUMNS = [
    {
        duration: "38s",
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
        duration: "46s",
        delay: "-14s",
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
            "  res.json({ ok: true, region: 'pune' })",
            "})",
            "",
            "// 12 merged open-source PRs",
            "// 80+ articles on Hashnode",
        ],
    },
    {
        duration: "42s",
        delay: "-24s",
        lines: [
            "'use client'",
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
            "  font: 'Geist'",
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

function lineClass(line: string) {
    if (!line.trim()) return "text-transparent";
    if (line.trim().startsWith("//")) {
        return "text-zinc-400 dark:text-zinc-500";
    }
    if (
        /^(export|const|type|interface|return|await|function)\b/.test(line.trim()) ||
        line.includes("export ") ||
        line.includes("function ")
    ) {
        return "text-emerald-700 dark:text-emerald-400/90";
    }
    if (
        /^(kubectl|ansible|terraform|docker|git |helm|az |pnpm|app\.get)/.test(
            line.trim(),
        )
    ) {
        return "text-sky-700 dark:text-sky-400/90";
    }
    if (line.includes("'") || line.includes("`")) {
        return "text-amber-800/80 dark:text-amber-200/70";
    }
    return "text-zinc-600 dark:text-zinc-400";
}

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
        <ul className="space-y-1.5 font-mono text-[11px] leading-5 sm:text-xs sm:leading-6">
            {lines.map((line, i) => (
                <li key={`${line}-${i}`} className={lineClass(line)}>
                    {line || "\u00a0"}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="relative min-w-0 flex-1 overflow-hidden">
            <div
                className="hero-code-scroll"
                style={
                    {
                        "--hero-code-duration": duration,
                        animationDelay: delay,
                    } as CSSProperties
                }
            >
                {block}
                <div className="mt-2" aria-hidden>
                    {block}
                </div>
            </div>
        </div>
    );
}

export function HeroWallpaper() {
    return (
        <div className="absolute inset-0 bg-zinc-100 dark:bg-[#09090b]">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-40"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgb(113 113 122 / 0.28) 1px, transparent 1px), linear-gradient(to bottom, rgb(113 113 122 / 0.28) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-emerald-400/15 to-transparent dark:from-emerald-400/10"
            />

            <div className="absolute inset-x-3 top-3 bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-zinc-300/80 bg-white/40 shadow-[0_12px_40px_rgba(15,23,42,0.08)] dark:border-zinc-800 dark:bg-zinc-950/50 dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:inset-x-5">
                <div className="relative flex items-center gap-3 border-b border-zinc-200/80 bg-zinc-50/90 px-3 py-2 font-mono text-[11px] text-zinc-600 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400">
                    <span className="flex gap-1.5" aria-hidden>
                        <span className="size-2.5 rounded-full bg-[#ff5f57] shadow-[0_0_8px_rgba(255,95,87,0.55)]" />
                        <span className="size-2.5 rounded-full bg-[#febc2e] shadow-[0_0_8px_rgba(254,188,46,0.45)]" />
                        <span className="size-2.5 rounded-full bg-[#28c840] shadow-[0_0_8px_rgba(40,200,64,0.45)]" />
                    </span>
                    <span className="truncate tracking-tight">
                        nehal@pune - deploy.yml
                    </span>
                    <span className="hero-caret ml-auto hidden h-3.5 w-1.5 bg-emerald-500 sm:inline-block" />
                </div>

                <div className="relative h-full px-4 pt-3 sm:px-5">
                    <div className="flex h-full gap-5 opacity-90 sm:gap-10 dark:opacity-80">
                        {COLUMNS.map((column) => (
                            <CodeColumn key={column.duration} {...column} />
                        ))}
                    </div>
                    <div
                        aria-hidden
                        className="hero-scanline pointer-events-none absolute inset-x-0 top-8 h-10 bg-linear-to-b from-emerald-400/0 via-emerald-400/12 to-emerald-400/0"
                    />
                </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-white via-white/35 to-transparent dark:from-black dark:via-black/45 dark:to-transparent" />
        </div>
    );
}
