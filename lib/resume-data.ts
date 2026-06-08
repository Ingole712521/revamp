import { CONTACT_EMAIL, SOCIALS } from "@/lib/constants";

export const NOTION_RESUME_URL =
    "https://www.notion.so/Nehal-Ingole-372ac888d27581b0b005e3d014382df7";

export const RESUME_PDF_URL = "/Nehal_Ingole_7397966719.pdf";
export const RESUME_PDF_FILENAME = "Nehal_Ingole_7397966719.pdf";

export type ResumeSkillGroup = {
    category: string;
    skills: string[];
};

export type ResumeExperience = {
    company: string;
    title: string;
    duration: string;
    location: string;
    website?: string;
    points: string[];
    techStack: string[];
};

export type ResumeAchievement = {
    title: string;
    description: string;
    tags?: string[];
};

export const RESUME_AVATAR = "/image (3) copy.jpg";

export const RESUME = {
    name: "Nehal Ingole",
    avatar: RESUME_AVATAR,
    title: "Frontend Developer & DevOps Engineer",
    location: "Pune, India",
    email: CONTACT_EMAIL,
    phone: "+91 7397966719",
    website: "https://www.nehalingole.in",
    notionUrl: NOTION_RESUME_URL,
    links: {
        linkedin: SOCIALS.linkedin.url,
        github: SOCIALS.github.url,
        twitter: SOCIALS.twitter.url,
        youtube: SOCIALS.youtube.url,
        blog: "https://learnwithnehal.hashnode.dev",
    },
    summary:
        "DevOps Engineer and Frontend Developer specialising in cloud automation, high-performance web experiences, and technical documentation. Proficient in AWS, Docker/Kubernetes, and modern React/Next.js stacks. Author of 80+ technical blog posts. Open-source contributor (Kestra). Focused on CI/CD, infrastructure as code, and building scalable, secure, user-centred products.",
    skills: [
        {
            category: "Cloud",
            skills: ["AWS", "GCP", "Microsoft Azure"],
        },
        {
            category: "DevOps & IaC",
            skills: [
                "Docker",
                "Kubernetes",
                "Jenkins",
                "Terraform",
                "Ansible",
                "ArgoCD",
                "GitHub Actions",
                "Portainer",
            ],
        },
        {
            category: "Frontend",
            skills: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "GSAP",
                "Motion",
            ],
        },
        {
            category: "Data & Tools",
            skills: [
                "MongoDB",
                "Git",
                "GitHub",
                "GitLab",
                "Linux",
                "Cybersecurity",
            ],
        },
        {
            category: "Other",
            skills: [
                "Rust (learning)",
                "Machine Learning",
                "EmailJS",
                "OpenRouter/LLM APIs",
            ],
        },
    ] satisfies ResumeSkillGroup[],
    experience: [
        {
            company: "Kshan Tech Soft Pvt Ltd",
            title: "Software Developer (DevOps Engineer)",
            duration: "Jan 2025 – Present",
            location: "Pune, India (On-Site)",
            website: "https://kshantechsoft.com/",
            points: [
                "Architect core infrastructure and develop automation agents for flagship products",
                "Engineer and deploy high-performance automation agents to enhance product capabilities",
                "Conduct comprehensive testing for authentication, automation, and system stability",
                "Optimise internal tools and maintain detailed technical documentation to streamline workflows",
            ],
            techStack: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "GSAP",
                "Docker",
                "GitHub Actions",
                "MongoDB",
                "AWS",
                "GCP",
                "Ubuntu",
            ],
        },
        {
            company: "Alief View Media Group",
            title: "React Developer (Freelancer)",
            duration: "Mar 2024 – Sep 2024",
            location: "Remote (India)",
            website: "https://alifviewmedia.com/",
            points: [
                "Spearheaded full-site development from concept to deployment, ensuring seamless UX across devices",
                "Designed and developed fully responsive web interfaces using React and GSAP for animations",
                "Translated complex Figma designs into pixel-perfect, performant code",
                "Collaborated with cross-functional teams to deliver cloud-based media solutions",
                "Implemented modern CSS practices with Tailwind for scalable and maintainable styling",
            ],
            techStack: ["React", "TypeScript", "Tailwind CSS", "Figma", "GSAP"],
        },
        {
            company: "LinuxWorld Informatics Pvt. Ltd",
            title: "DevOps Intern",
            duration: "Sep 2020 – Aug 2021",
            location: "Jaipur, India (Remote)",
            website: "https://www.linuxworldindia.org/",
            points: [
                "Deployed and managed containerised applications using Docker and Kubernetes clusters",
                "Automated infrastructure provisioning with Terraform and configuration management with Ansible",
                "Implemented CI/CD pipelines across AWS, GCP, and Microsoft Azure",
                "Leveraged machine learning models for predictive infrastructure monitoring",
            ],
            techStack: [
                "Docker",
                "Kubernetes",
                "Ansible",
                "AWS",
                "GCP",
                "Azure",
                "Terraform",
                "Ubuntu",
                "Red Hat 7",
                "Machine Learning",
            ],
        },
    ] satisfies ResumeExperience[],
    achievements: [
        {
            title: "Technical Blogger — Hashnode",
            description:
                "Published 80+ technical articles on React, DevOps, Rust, cloud automation, CI/CD, and system design at learnwithnehal.hashnode.dev — sharing practical guides and production-focused learnings with the developer community.",
            tags: ["React", "DevOps", "Rust", "Hashnode"],
        },
        {
            title: "Hackathon — 3rd Runner-Up",
            description:
                "Secured 3rd runner-up placement in a competitive hackathon, delivering an end-to-end solution under time constraints with strong teamwork, rapid prototyping, and clear technical presentation.",
            tags: ["Hackathon", "Teamwork"],
        },
        {
            title: "Open Source Contributor",
            description:
                "Contributed to Kestra (merged PR #15043 — blueprint tag filters stay aligned with the URL when navigating the Blueprints Browser). Committed to growing open-source impact further — solving real issues, shipping meaningful PRs, and contributing more actively to community-driven projects ahead.",
            tags: ["Kestra", "Open Source", "Vue"],
        },
    ] satisfies ResumeAchievement[],
    education: {
        degree: "Bachelor of Technology",
        school: "Government College of Engineering, Karad",
        duration: "Aug 2019 – Jun 2023",
        highlights: [
            "Strong foundation in full-stack engineering and DevOps",
            "Completed 20+ academic projects; authored 80+ Hashnode blog posts on React, DevOps, Rust, and cloud practices",
            "Hands-on experience in modern development and cloud practices",
        ],
    },
};
