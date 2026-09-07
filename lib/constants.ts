import type { ProjectCardItem } from "@/components/project-card";

export const NAVIGATION_LINKS = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#work" },
    { label: "Contact", href: "/#contact" },
];

export type FooterLink = {
    label: string;
    href: string;
    external?: boolean;
};

export const FOOTER_NAV: FooterLink[] = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "Projects", href: "/#projects" },
    { label: "Videos", href: "/video" },
    { label: "Bio", href: "/#bio" },
    { label: "Blog", href: "https://learnwithnehal.hashnode.dev", external: true },
    { label: "Contact", href: "/#contact" },
    { label: "Resume", href: "/Nehal_Ingole_7397966719.pdf", external: true },
];

export const HERO = {
    name: "Nehal Ingole",
    greet: "Hi, I'm Nehal Ingole",
    role: "Software Developer",
    headline:
        "I build modern web apps, reusable UI systems, and the cloud workflows that keep them in production.",
    subline:
        "Primary stack: React, TypeScript, and AWS. I also write, contribute to open source, and ship AnimioUI.",
    avatar: "/image (3).jpg",
    location: "Pune, India",
};

export const ABOUT_SNAPSHOT = [
    "3+ years shipping web and cloud products",
    "Creator of AnimioUI",
    "13+ open-source contributions",
    "80+ technical articles on Hashnode",
];

export type PortfolioVideo = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    youtubeUrl: string;
    videoSrc: string;
    thumbnailSrc: string;
    thumbnailAlt: string;
};

export const VIDEO_PAGE = {
    title: "Videos",
    description:
        "Introductions, demos, and technical walkthroughs across DevOps, React, cybersecurity, and cloud automation.",
};

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
    {
        id: "devops-intro",
        title: "Intro for DevOps Engineer",
        description:
            "A personal introduction covering my DevOps background, tooling, and approach to cloud automation.",
        tags: ["DevOps", "Intro", "Cloud"],
        youtubeUrl: "https://youtu.be/XNm-txThsb0",
        videoSrc: "https://www.youtube.com/embed/XNm-txThsb0",
        thumbnailSrc: "https://img.youtube.com/vi/XNm-txThsb0/maxresdefault.jpg",
        thumbnailAlt: "Intro for DevOps Engineer",
    },
    {
        id: "react-intro",
        title: "Intro for React.js Developer",
        description:
            "Overview of my frontend journey — React, UI craft, and building polished web experiences.",
        tags: ["React", "Intro", "Frontend"],
        youtubeUrl: "https://youtu.be/Ms0ANSRat8I",
        videoSrc: "https://www.youtube.com/embed/Ms0ANSRat8I",
        thumbnailSrc: "https://img.youtube.com/vi/Ms0ANSRat8I/maxresdefault.jpg",
        thumbnailAlt: "Intro for React.js Developer",
    },
    {
        id: "cybersecurity-ml",
        title: "CyberSecurity with Machine Learning",
        description:
            "Exploring how machine learning supports cybersecurity workflows, detection, and analysis.",
        tags: ["Cybersecurity", "Machine Learning"],
        youtubeUrl: "https://youtu.be/9uI6P0yER9w",
        videoSrc: "https://www.youtube.com/embed/9uI6P0yER9w",
        thumbnailSrc: "https://img.youtube.com/vi/9uI6P0yER9w/maxresdefault.jpg",
        thumbnailAlt: "CyberSecurity with Machine Learning",
    },
    {
        id: "ruby-rails-eks",
        title: "Ruby on Rails on EKS using CI/CD Pipeline",
        description:
            "Deploying a Rails application on Amazon EKS with a full CI/CD pipeline walkthrough.",
        tags: ["Ruby on Rails", "EKS", "CI/CD", "AWS"],
        youtubeUrl: "https://youtu.be/33jlF58zEaQ",
        videoSrc: "https://www.youtube.com/embed/33jlF58zEaQ",
        thumbnailSrc: "https://img.youtube.com/vi/33jlF58zEaQ/maxresdefault.jpg",
        thumbnailAlt: "Ruby on Rails on EKS using CI/CD Pipeline",
    },
    {
        id: "gcp-terraform-docker",
        title:
            "Automating Docker on GCP with Terraform",
        description:
            "Provisioning and automating a Docker environment on Google Cloud Platform using Terraform.",
        tags: ["GCP", "Docker", "Terraform", "IaC"],
        youtubeUrl: "https://youtu.be/ViDbRiR3ajI",
        videoSrc: "https://www.youtube.com/embed/ViDbRiR3ajI",
        thumbnailSrc: "https://img.youtube.com/vi/ViDbRiR3ajI/maxresdefault.jpg",
        thumbnailAlt:
            "Automating Docker Environment Deployment on Google Cloud Platform with Terraform",
    },
];

export const CONTACT_EMAIL = "nehalingole2001@gmail.com";

/** Opens Gmail compose with CONTACT_EMAIL in the To field */
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;

export const SOCIALS = {
    linkedin: {
        url: "https://www.linkedin.com/in/nehal-ingole/",
        label: "LinkedIn",
        preview: "linkedin.com/in/nehal-ingole",
    },
    github: {
        url: "https://github.com/Ingole712521",
        label: "GitHub",
        preview: "github.com/Ingole712521",
    },
    twitter: {
        url: "https://x.com/IngoleNehal",
        label: "Twitter",
        preview: "x.com/IngoleNehal",
    },
    youtube: {
        url: "https://www.youtube.com/@nehalingole1754",
        label: "YouTube",
        preview: "youtube.com/@nehalingole1754",
    },
    email: {
        url: GMAIL_COMPOSE_URL,
        label: "Email",
        preview: CONTACT_EMAIL,
    },
    hashnode: {
        url: "https://learnwithnehal.hashnode.dev",
        label: "Hashnode",
        preview: "learnwithnehal.hashnode.dev",
    },
};

export const TECH_STACK = [
    "AWS", "Azure", "Docker", "Kubernetes", "MongoDB", "React", "Next.js", "TypeScript", "Linux", "Terraform", "GitHub Actions", "Ansible", "Cursor", "ChatGPT", "Grok", "Gemini"
];

export const CORE_TECH = [
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Tailwind CSS",
];

export const SKILLS_CATEGORIES = [
    {
        title: "Frontend",
        accent: "text-sky-700 dark:text-sky-300",
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript"],
    },
    {
        title: "Cloud",
        accent: "text-amber-700 dark:text-amber-300",
        skills: ["AWS", "Azure"],
    },
    {
        title: "DevOps",
        accent: "text-emerald-700 dark:text-emerald-300",
        skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "ArgoCD"],
    },
    {
        title: "Version Control",
        accent: "text-violet-700 dark:text-violet-300",
        skills: ["Git", "GitHub", "GitLab"],
    },
    {
        title: "OS",
        accent: "text-zinc-700 dark:text-zinc-300",
        skills: ["Linux"],
    },
    {
        title: "Data",
        accent: "text-rose-700 dark:text-rose-300",
        skills: ["MongoDB"],
    },
    {
        title: "AI Tools",
        accent: "text-indigo-700 dark:text-indigo-300",
        skills: ["Cursor", "ChatGPT", "Grok", "Gemini"],
    },
];

export const PROJECTS: ProjectCardItem[] = [
    {
        id: "revio",
        name: "Revio",
        category: "Fullstack",
        shipped: true,
        description:
            "AI-powered GitHub PR reviewer that automatically posts inline comments on bugs, security issues, and logic errors using gpt-5.3-codex via OpenRouter. Built the full webhook → worker → comment pipeline with clean architecture.",
        impact: "Reviews PRs in seconds and reduces manual review time.",
        image: "/revio.png",
        link: "https://ai-code-reviwer-web.vercel.app/",
        featured: true,
        githubRepo: "https://github.com/Ingole712521/AI-Code-Reviwer",
        tags: ["GitHub App", "Next.js", "OpenRouter", "Clean Architecture", "TypeScript"],
    },
    {
        id: "alief-view",
        name: "Alief View Media Group",
        category: "Frontend",
        shipped: true,
        description:
            "Responsive marketing site for conference organizing and corporate events. Built the frontend, layouts, and contact flows.",
        impact: "Live production site for a media group's events brand.",
        image: "/lightmodeofalifview.png",
        link: "https://alifviewmedia.com/",
        githubRepo: "https://github.com/Ingole712521/AlifViewMedia",
        tags: ["React", "Tailwind CSS", "EmailJS", "Adobe"],
        imageFit: "contain",
    },
    {
        id: "rsquare",
        name: "R Square",
        category: "Frontend",
        shipped: true,
        description:
            "Creative studio site for design-led brand and marketing work. Built the responsive marketing frontend.",
        impact: "Shipped a polished live brand site for a design studio.",
        image: "/rsquaree.png",
        link: "https://www.rsquaree.com/",
        tags: ["React", "Tailwind CSS", "Marketing", "Design"],
    },
    {
        id: "animioui",
        name: "AnimioUI",
        category: "Frontend",
        shipped: true,
        description:
            "Production-ready React component library focused on performance, smooth animations (Framer Motion), and modern aesthetics. Built reusable primitives so teams can ship UIs faster.",
        impact: "Creator of AnimioUI — used in multiple projects.",
        image: "/componentLibrary.png",
        link: "https://www.animioui.in/",
        featured: true,
        githubRepo: "https://github.com/Ingole712521/component",
        tags: ["Next.js", "Git", "Motion", "Tailwind CSS"],
    },
    {
        id: 8,
        name: "AI Workspace",
        category: "Fullstack",
        description:
            "AI-powered infinite whiteboard. Draw, chat with an assistant, and instantly convert a topic or rough sketch into a clean beginner-friendly mindmap — all on one screen with no login required.",
        impact: "Zero-auth collaborative whiteboard + AI mindmap generation.",
        image: "/01-empty-canvas.png",
        link: "https://a-icanvas.vercel.app/",
        caseStudyLink:
            "https://forest-breath-f27.notion.site/AI-Workspace-Complete-Project-Documentation-3c0ac888d27581219ffbfd8c82e00984",
        featured: true,
        githubRepo: "https://github.com/Ingole712521/AIcanvas",
        tags: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "OpenRouter",
            "Docker",
            "Docker Compose",
        ],
    },
    {
        id: 7,
        name: "PDF2Notes Pro",
        category: "Frontend",
        description:
            "Turns any General Studies PDF into structured UPSC Mains Q&A revision notes + downloadable A4 PDF. Features answer frameworks, data tables, memory cues, and flowcharts.",
        impact: "PDF → structured revision notes in one click.",
        image:
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
        link: "https://generate-notes.vercel.app/",
        caseStudyLink:
            "https://forest-breath-f27.notion.site/How-PDF2Notes-Pro-Turns-a-GS-PDF-Into-UPSC-Mains-Notes-3c0ac888d27581eaae3ff77a473a8607",
        githubRepo: "https://github.com/Ingole712521/generate_notes",
        tags: ["Next.js 14", "TypeScript", "React", "Tailwind CSS", "pdf-parse", "OpenRouter", "react-markdown", "@react-pdf/renderer", "Vercel"]
    },
    {
        id: 9,
        name: "EMQX on AWS",
        category: "DevOps",
        description:
            "Terraform-managed EMQX MQTT cluster on AWS that handles 300K concurrent connections with NLB + auto-scaling. Includes full deploy, verify, and load-test automation.",
        impact: "Scaled to 300K concurrent MQTT users.",
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        link: "https://app.notion.com/p/EMQX-AWS-Deployment-Proof-Demo-377ac888d27580438dd8e14545a7b471",
        featured: true,
        githubRepo: "https://github.com/Ingole712521/EMQX_autoScaling",
        tags: ["Terraform", "AWS", "EMQX 5.8", "MQTT", "NLB", "Python", "Ubuntu"]
    },
    {
        id: 1,
        name: "HLS Adaptive Bitrate Streaming With AWS",
        category: "DevOps",
        description:
            "HLS adaptive bitrate streaming on AWS with Docker for optimized video delivery.",
        impact: "End-to-end streaming pipeline on AWS.",
        image: "/webpratice.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_streaming-videostreaming-docker-activity-7207360568955924481--ZGI",
        videoUrl: "https://www.youtube.com/embed/VkoHykQrWOY?autoplay=1&mute=1&controls=0&loop=1&playlist=VkoHykQrWOY",
        tags: ["AWS", "Docker", "HLS", "S3"]
    },
    {
        id: 3,
        name: "CI/CD on ECR and Docker",
        category: "DevOps",
        description:
            "Automated Docker image builds and uploads to AWS ECR with GitHub Actions.",
        impact: "Faster, repeatable container deploys.",
        image: "/ECR.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_githubactions-aws-ecr-activity-7183878521130217474-oS8C",
        tags: ["GitHub Actions", "AWS ECR", "CI/CD"]
    },
    {
        id: 4,
        name: "Ansible Server Automation",
        category: "DevOps",
        description:
            "Ansible playbooks and inventory for automated server and service deployments.",
        impact: "Repeatable server setup with infrastructure as code.",
        image: "/ansible.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_document-activity-7178789372949897216-h1FK",
        tags: ["Ansible", "Automation", "IAAC"]
    },
    {
        id: 6,
        name: "Own Github Repository Using AWS",
        category: "DevOps",
        description:
            "Docker environment provisioned with Terraform for a self-hosted repository workflow.",
        impact: "Automated cloud provisioning for a Git-style workflow.",
        videoUrl: "https://www.youtube.com/embed/Xu9RLiXOa5k?autoplay=1&mute=1&loop=1&playlist=Xu9RLiXOa5k",
        image: "/github.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_github-aws-codingjourney-activity-7172914850921148416-9Lue?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC508FUBuGfTDjOmT3MnzkFrrqilcF1xhAw",
        tags: ["Docker", "Git", "AWS", "Ubuntu", "Windows"]
    }
];

export const BIO = [
    "I like work that feels fast in the browser and stays reliable after deploy. Most days that means React and TypeScript on the product side, with AWS, Docker, and CI/CD on the path to production.",
    "AnimioUI started as the component system I wanted for my own projects — reusable primitives, motion, and a look I could actually ship. Writing and open source are how I keep that craft sharp.",
];

export const PORTFOLIO_BUILD_NOTE = {
    title: "How I built this portfolio",
    body: "Next.js 16, Tailwind, and Motion — with Lenis scrolling, a custom theme chain, and project cards I designed and wired myself. The source is public if you want to see how the pieces fit.",
    href: "https://github.com/Ingole712521/revamp",
};

export const EXPERIENCES = [
    {
        title: "Software Developer",
        company: "Kshan Tech Soft Pvt Ltd",
        logo: "/kshansofttech.png",
        duration: "Jan 2025 - Present",
        location: "Pune, India (On-Site)",
        description: "Developing high-performance web applications with a focus on cloud integration and smooth user experiences.",
        techStack: ["Docker", "TypeScript", "GitHub Actions", "Ubuntu", "GCP", "MongoDB", "React", "JavaScript", "Tailwind CSS", "Next.js", "GSAP", "AWS"],
        points: [
            "Own architecture and delivery for flagship product infrastructure and automation agents (on-site since Jan 2025).",
            "Ship high-performance automation agents end-to-end across a 12-tool stack — TypeScript/React on the UI, Docker + GitHub Actions into AWS/GCP.",
            "Cover authentication, automation, and stability testing before release; keep internal tools and docs current so the team can ship without blockers.",
        ],
        socials: {
            website: "https://kshantechsoft.com/",
            linkedin: "https://www.linkedin.com/company/kshan-tech-soft-pvt-ltd/",
            twitter: "https://x.com/IngoleNehal"
        }
    },
    {
        title: "Software Developer",
        company: "Alief View Media Group",
        logo: "/alifview-logo.png",
        duration: "April 2023 - December 2024",
        location: "Remote (India)",
        description: "Spearheaded full-site development from concept to deployment, ensuring seamless UX across devices.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Figma", "GSAP"],
        points: [
            "Built the full marketing site from Figma: responsive layouts, event pages, and GSAP motion.",
            "Shipped pixel-accurate React + Tailwind UI across conference and corporate surfaces.",
            "Worked with the team to deliver cloud-based media experiences end to end.",
        ],
        socials: {
            website: "#",
            linkedin: "#",
            github: "https://github.com/nehal-ingole"
        }
    },
    {
        title: "DevOps Intern",
        company: "LinuxWorld Informatics Pvt. Ltd",
        logo: "/linuxworld.png",
        duration: "Sept 2020 - Aug 2021",
        location: "Jaipur, India (Remote)",
        description: "Mastered cloud orchestration and automation tools during an intensive DevOps internship.",
        techStack: ["Docker", "Kubernetes", "Ansible", "AWS", "GCP", "Microsoft Azure", "Machine Learning", "Ubuntu", "Redhat 7", "Terraform"],
        points: [
            "Ran containerized workloads with Docker and Kubernetes in day-to-day lab and intern projects.",
            "Automated provisioning with Terraform and configuration with Ansible.",
            "Built CI/CD pipelines across AWS, GCP, and Azure on Linux (Ubuntu / RHEL).",
        ],
        socials: {
            website: "https://www.linuxworldindia.org/",
            linkedin: "https://www.linkedin.com/company/linuxworld-informatics-pvt-ltd/",

        }
    }
];

export const QUOTES = [
    {
        text: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions.",
        author: "Bhagavad Gita"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Whole Earth Catalog"
    },
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci"
    }
];

export const BLOGS = [
    {
        title: "UPI Architecture Explained: NPCI, Banks, and Transaction Flow",
        description: "A deep dive into how UPI works, the roles of NPCI, PSPs, and banks in ensuring seamless real-time payments.",
        image: "/up.png",
        link: "https://learnwithnehal.hashnode.dev/upi-architecture-explained-npci-banks-and-transaction-flow",
        date: "February 24, 2026",
        tags: ["Architecture", "Fintech", "UPI"]
    },
    {
        title: "Simplifying Docker Management with Portainer CE",
        description: "Learn how to use Portainer to manage your Docker environments with ease, from containers to stacks.",
        image: "/dockercontainer.png",
        link: "https://learnwithnehal.hashnode.dev/simplifying-docker-management-with-portainer-ce",
        date: "January 15, 2026",
        tags: ["Docker", "DevOps", "Portainer"]
    },
    {
        title: "CI/CD on ECR and Docker with GitHub Actions",
        description: "A step-by-step guide to automating your container deployment pipeline using AWS ECR and GitHub Actions.",
        image: "/dockeraws.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_githubactions-aws-ecr-activity-7183878521130217474-oS8C",
        date: "December 10, 2025",
        tags: ["GitHub Actions", "ECR", "CI/CD"]
    }
];

export const GITHUB_STATS = {
    username: "Ingole712521",
    totalContributions: 1847,
    lastWorked: "4h 44m",
    offlineStatus: true
};
