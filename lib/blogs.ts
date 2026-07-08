import { BLOGS } from "@/lib/constants";

export interface BlogPost {
    title: string;
    slug: string;
    publishedAt: string;
    brief: string;
    href: string;
    coverImage?: {
        url: string;
    };
    tags?: Array<{
        name: string;
    }>;
}

const MONTH_INDEX: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
};

function parseDisplayDate(date: string): string {
    const match = date.match(/^(\w+)\s+(\d{1,2}),\s+(\d{4})$/);
    if (!match) {
        return new Date().toISOString();
    }

    const [, monthName, day, year] = match;
    const month = MONTH_INDEX[monthName];
    if (month === undefined) {
        return new Date().toISOString();
    }

    return new Date(Number(year), month, Number(day)).toISOString();
}

function slugFromLink(link: string): string {
    try {
        const pathname = new URL(link).pathname.replace(/\/$/, "");
        const segment = pathname.split("/").filter(Boolean).pop();
        return segment ?? link;
    } catch {
        return link;
    }
}

/** Featured posts sourced from `lib/constants.ts` (Hashnode free GraphQL API was retired). */
export function getFeaturedBlogPosts(): BlogPost[] {
    return BLOGS.map((blog) => ({
        title: blog.title,
        slug: slugFromLink(blog.link),
        publishedAt: parseDisplayDate(blog.date),
        brief: blog.description,
        href: blog.link,
        coverImage: { url: blog.image },
        tags: blog.tags.map((name) => ({ name })),
    }));
}
