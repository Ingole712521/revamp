/**
 * Single source of truth for SEO. Override with NEXT_PUBLIC_SITE_URL in production
 * if the canonical domain differs (e.g. custom domain on Vercel).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.nehalingole.in";

/** Google Analytics 4 measurement ID (gtag). Override via NEXT_PUBLIC_GA_MEASUREMENT_ID. */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-CJECPML6ES";

export const SITE_NAME = "Nehal Ingole";
export const SITE_TITLE =
  "Nehal Ingole | Frontend Developer & DevOps Engineer | Portfolio";
export const SITE_TAGLINE =
  "Frontend Developer & DevOps Engineer — React, Next.js, AWS, Docker";

export const SITE_DESCRIPTION =
  "Official portfolio of Nehal Ingole: Frontend Developer and DevOps Engineer in India. React, Next.js, TypeScript, AWS, Docker, Kubernetes, CI/CD, cloud automation, and open source. View projects, experience, proof of work, and blog.";

export const SITE_KEYWORDS = [
  "Nehal Ingole",
  "Nehal Ingole portfolio",
  "frontend developer India",
  "DevOps engineer",
  "React developer",
  "Next.js developer",
  "TypeScript developer",
  "AWS engineer",
  "Docker Kubernetes",
  "full stack developer",
  "cloud automation",
  "CI/CD",
  "Terraform",
  "GitHub Actions",
  "Pune developer",
  "open source contributor",
];

/** Prefer a dedicated 1200×630 asset; falls back to avatar. Encode spaces in paths. */
export const OG_IMAGE_PATH = "/image%20(3).jpg";

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function getPersonJsonLd() {
  return {
    "@type": "Person",
    name: "Nehal Ingole",
    url: SITE_URL,
    image: absoluteUrl("/image%20(3).jpg"),
    jobTitle: "Frontend Developer | DevOps Engineer",
    description: SITE_DESCRIPTION,
    email: "nehalingole2001@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/nehal-ingole/",
      "https://github.com/Ingole712521",
      "https://x.com/IngoleNehal",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "AWS",
      "Docker",
      "Kubernetes",
      "DevOps",
      "Terraform",
      "GitHub Actions",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Government College of Engineering, Karad",
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: SITE_TITLE,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: "Nehal Ingole",
      url: SITE_URL,
    },
  };
}

export function getWebPageJsonLd() {
  return {
    "@type": "WebPage",
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl("/image%20(3).jpg"),
    },
  };
}

/** Single @graph document — preferred for multiple entities on one page */
export function getJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...getWebSiteJsonLd(),
        "@id": `${SITE_URL}/#website`,
      },
      {
        ...getPersonJsonLd(),
        "@id": `${SITE_URL}/#person`,
      },
      {
        ...getWebPageJsonLd(),
        "@id": `${SITE_URL}/#webpage`,
      },
    ],
  };
}
