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
    role: "Frontend Developer & DevOps Engineer",
    description:
        "I build high-performance interfaces and the cloud systems that keep them shipping. Docker, AWS, and a preference for quiet, precise engineering.",
    avatar: "/image (3).jpg",
    banner:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    location: "Pune, India",
};

export const ABOUT_SNAPSHOT = [
    "Shipping product, not just tickets",
    "Cloud automation on AWS and Docker",
    "80+ technical posts on Hashnode",
    "Open-source work on Kestra",
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
};

export const TECH_STACK = [
    "AWS", "Docker", "Kubernetes", "Rust", "React", "Next.js", "TypeScript", "Linux", "Terraform", "GitHub Actions", "Ansible", "Cybersecurity"
];

export const SKILLS_CATEGORIES = [
    {
        title: "Cloud",
        skills: ["AWS"]
    },
    {
        title: "DevOps",
        skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "ArgoCD"]
    },
    {
        title: "Version Control",
        skills: ["Git", "GitHub", "GitLab"]
    },
    {
        title: "OS",
        skills: ["Linux"]
    },
    {
        title: "Frontend",
        skills: ["React.js", "TypeScript", "JavaScript"]
    }
];

export const PROJECTS: ProjectCardItem[] = [
    {
        id: "revio",
        name: "Revio",
        category: "Fullstack",
        shipped: true,
        description:
            "An AI-powered GitHub Pull Request reviewer: when a PR is opened or updated, a webhook queues a review job, a worker fetches the diff, and gpt-5.3-codex (via OpenRouter) posts inline comments for bugs, security issues, performance problems, error handling, and logic errors",
        image: "/revio.png",
        link: "https://ai-code-reviwer-web.vercel.app/",
        tags: ["GitHub App", "Next.js", "OpenRouter", "Clean Architecture", "TypeScript"],
    },
    {
        id: "alief-view",
        name: "Alief View Media Group",
        category: "Frontend",
        shipped: true,
        description:
            "Conference organizer and corporate events site: responsive marketing experience for technology summits and premier events.",
        image: "/lightmodeofalifview.png",
        link: "https://alifviewmedia.com/",
        tags: ["React", "Tailwind CSS", "EmailJS", "Adobe"],
        imageFit: "contain",
    },
    {
        id: "rsquare",
        name: "R Square",
        category: "Frontend",
        shipped: true,
        description:
            "Creative studio and marketing partner site: we help brands across every industry grow through thoughtful design and results-driven marketing.",
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
            "Ship faster than ever with a library designed for speed, performance, and cutting-edge aesthetics.",
        image: "/componentLibrary.png",
        link: "https://www.animioui.in/",
        tags: ["Next.js", "Git", "Motion", "Tailwind CSS"],
    },
    {
        id: 8,
        name: "AI Workspace",
        category: "Fullstack",
        description:
            "An AI-powered infinite whiteboard. Draw, chat with an assistant, and turn a topic or a rough sketch into a clean beginner-friendly mindmap — all in one screen, with no login.",
        image: "/01-empty-canvas.png",
        link: "https://a-icanvas.vercel.app/",
        caseStudyLink:
            "https://forest-breath-f27.notion.site/AI-Workspace-Complete-Project-Documentation-3c0ac888d27581219ffbfd8c82e00984",
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
            "Turns a General Studies PDF into UPSC Mains Q&A revision notes and a downloadable A4 PDF. Upload a PDF, generate structured notes with answer frameworks, data tables, memory cues, and flowcharts, then export them for quick revision.",
        image:
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
        link: "https://generate-notes.vercel.app/",
        caseStudyLink:
            "https://forest-breath-f27.notion.site/How-PDF2Notes-Pro-Turns-a-GS-PDF-Into-UPSC-Mains-Notes-3c0ac888d27581eaae3ff77a473a8607",
        tags: ["Next.js 14", "TypeScript", "React", "Tailwind CSS", "pdf-parse", "OpenRouter", "react-markdown", "@react-pdf/renderer", "Vercel"]
    },
    {
        id: 9,
        name: "EMQX on AWS",
        category: "DevOps",
        description:
            "Terraform-managed MQTT cluster that serves 300K concurrent users in a single go, with NLB, auto-scaled replicants, and full deploy/verify/load-test automation.",
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        link: "https://app.notion.com/p/EMQX-AWS-Deployment-Proof-Demo-377ac888d27580438dd8e14545a7b471",
        tags: ["Terraform", "AWS", "EMQX 5.8", "MQTT", "NLB", "Python", "Ubuntu"]
    },
    {
        id: 1,
        name: "HLS Adaptive Bitrate Streaming With AWS",
        category: "DevOps",
        description: "Deployed a High-Level Streaming (HLS) solution using Docker and Amazon Web Services (AWS) for optimized video delivery.",
        image: "/webpratice.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_streaming-videostreaming-docker-activity-7207360568955924481--ZGI",
        videoUrl: "https://www.youtube.com/embed/VkoHykQrWOY?autoplay=1&mute=1&controls=0&loop=1&playlist=VkoHykQrWOY",

        tags: ["AWS", "Docker", "HLS", "S3"]
    },
    {
        id: 3,
        name: "CI/CD on ECR and Docker",
        category: "DevOps",
        description: "Automated Docker container uploads to AWS ECR using GitHub Actions, boosting deployment efficiency.",
        image: "/ECR.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_githubactions-aws-ecr-activity-7183878521130217474-oS8C",
        tags: ["GitHub Actions", "AWS ECR", "CI/CD"]
    },
    {
        id: 4,
        name: "Ansible Server Automation",
        category: "DevOps",
        description: "Simplified server management through Ansible playbooks, inventory management, and automated service deployments.",
        image: "/ansible.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_document-activity-7178789372949897216-h1FK",
        tags: ["Ansible", "Automation", "IAAC"]
    },
    {
        id: 6,
        name: "Own Github Repository Using AWS",
        category: "DevOps",
        description: "Deployed a Docker environment on Google Cloud Platform using Terraform, achieving efficient resource provisioning and management for scalable applications.",
        videoUrl: "https://www.youtube.com/embed/Xu9RLiXOa5k?autoplay=1&mute=1&loop=1&playlist=Xu9RLiXOa5k",
        image: "/github.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_github-aws-codingjourney-activity-7172914850921148416-9Lue?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC508FUBuGfTDjOmT3MnzkFrrqilcF1xhAw",
        tags: ["Docker", "Git", "AWS", "Ubuntu", "Windows"]
    }
];

export const BIO = [
    "I am a full-stack engineer who treats frontend craft and infrastructure as one job. Interfaces should feel inevitable; the pipelines behind them should be boring in the best way.",
    "I graduated from Government College of Engineering, Karad in 2023. Since then I have shipped React and Next.js products, automated AWS and Docker environments, and written about the work in public.",
    "I currently build automation and internal tools at Kshan Tech Soft in Pune — testing auth, hardening deploys, and keeping documentation close to the code.",
];

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
            "Architecting core infrastructure and agent development for flagship products.",
            "Engineered and deployed high-performance automation agents enhancing product capabilities.",
            "Conducting comprehensive testing for authentication, automation, and system stability.",
            "Optimizing internal tools and maintaining detailed technical documentation to streamline workflows."
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
            "Designed and developed fully responsive web interfaces using React and GSAP for high-end animations.",
            "Translated complex Figma designs into pixel-perfect, performant code.",
            "Collaborated with cross-functional teams to deliver cloud-based media solutions.",
            "Implemented modern CSS practices with Tailwind for scalable and maintainable styling."
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
            "Deployed and managed containerized applications using Docker and Kubernetes clusters.",
            "Automated infrastructure provisioning with Terraform and configuration management with Ansible.",
            "Implemented CI/CD pipelines across multiple cloud providers (AWS, GCP, Azure).",
            "Leveraged machine learning models for predictive infrastructure monitoring."
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
