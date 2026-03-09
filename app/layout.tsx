import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nehal Ingole | Frontend Developer & DevOps Engineer",
    template: "%s | Nehal Ingole",
  },
  description:
    "Portfolio of Nehal Ingole, Frontend Developer and DevOps Engineer specializing in cloud automation, high‑performance React/Next.js apps, and modern DevOps practices.",
  keywords: [
    "Nehal Ingole",
    "frontend developer",
    "devops engineer",
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "portfolio",
  ],
  metadataBase: new URL("https://your-production-domain.com"),
  openGraph: {
    title: "Nehal Ingole | Frontend Developer & DevOps Engineer",
    description:
      "Explore projects, experience, and blogs by Nehal Ingole – a Frontend Developer and DevOps Engineer focused on scalable, high‑performance systems.",
    url: "https://your-production-domain.com",
    siteName: "Nehal Ingole Portfolio",
    type: "website",
    images: [
      {
        url: "/image (3).jpg",
        width: 1200,
        height: 630,
        alt: "Nehal Ingole",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nehal Ingole | Frontend Developer & DevOps Engineer",
    description:
      "Frontend Developer and DevOps Engineer building fast, reliable applications in React, Next.js, and AWS.",
    images: ["/image (3).jpg"],
    creator: "@IngoleNehal",
  },
  alternates: {
    canonical: "https://your-production-domain.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
