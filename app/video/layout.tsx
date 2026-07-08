import type { Metadata } from "next";
import { VIDEO_PAGE } from "@/lib/constants";
import { SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: VIDEO_PAGE.title,
  description: VIDEO_PAGE.description,
  alternates: {
    canonical: "/video",
  },
  openGraph: {
    title: `${VIDEO_PAGE.title} | ${SITE_NAME}`,
    description: VIDEO_PAGE.description,
    url: "/video",
  },
};

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
