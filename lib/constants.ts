export const NAVIGATION_LINKS = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export const HERO = {
    name: "Nehal Ingole",
    greet: "Hi, I'm Nehal —",
    role: "Frontend Developer & DevOps Engineer & Rust learner",
    description:
        "focused on cloud automation, stylish development, and high-performance systems. Passionate about Docker, AWS, and building minimalist technical aesthetics.",
    avatar: "/image (3).jpg",
};

export const TECH_STACK = [
    "AWS", "Docker", "Kubernetes", "Rust", "React", "Linux", "Terraform", "GitHub Actions", "Ansible", "Cybersecurity"
];

export const PROJECTS = [
    {
        id: 1,
        name: "HLS Adaptive Bitrate Streaming With AWS",
        description: "Deployed a High-Level Streaming (HLS) solution using Docker and Amazon Web Services (AWS) for optimized video delivery.",
        image: "https://images.unsplash.com/photo-1614064641938-3bcee2c0f937?q=80&w=2070&auto=format&fit=crop",
        link: "https://www.linkedin.com/posts/nehal-ingole_streaming-videostreaming-docker-activity-7207360568955924481--ZGI",
        videoUrl: "https://www.youtube.com/embed/VkoHykQrWOY?autoplay=1&mute=1&controls=0&loop=1&playlist=VkoHykQrWOY",
        tags: ["AWS", "Docker", "HLS"]
    },
    {
        id: 2,
        name: "Simplifying Docker Management",
        description: "Explored Portainer CE to streamline container management, resource monitoring, and deployment workflows.",
        image: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?q=80&w=2071&auto=format&fit=crop",
        link: "https://learnwithnehal.hashnode.dev/simplifying-docker-management-with-portainer-ce",
        tags: ["Docker", "Portainer", "DevOps"]
    },
    {
        id: 3,
        name: "CI/CD on ECR and Docker",
        description: "Automated Docker container uploads to AWS ECR using GitHub Actions, boosting deployment efficiency.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
        link: "https://www.linkedin.com/posts/nehal-ingole_githubactions-aws-ecr-activity-7183878521130217474-oS8C",
        tags: ["GitHub Actions", "AWS ECR", "CI/CD"]
    },
    {
        id: 4,
        name: "Ansible Server Automation",
        description: "Simplified server management through Ansible playbooks, inventory management, and automated service deployments.",
        image: "https://images.unsplash.com/photo-1558494949-ef010958b4e7?q=80&w=2070&auto=format&fit=crop",
        link: "https://www.linkedin.com/posts/nehal-ingole_document-activity-7178789372949897216-h1FK",
        tags: ["Ansible", "Automation", "IAAC"]
    }
];

export const BIO = [
    "I graduated from Government College of Engineering, Karad, in 2023, establishing a strong foundation in full-stack engineering and DevOps.",
    "With a proven track record on AWS and expertise in Docker orchestration, I excel in automating and securing cloud environments.",
    "I have authored over 72 blog posts, sharing insights on DevOps methodologies and modern development practices."
];

export const EXPERIENCES = [
    {
        title: "Jr React Developer",
        company: "Kshan Tech Soft Pvt Ltd",
        logo: "/logos/kshan.png", // Placeholder
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
            twitter: "#"
        }
    },
    {
        title: "React Developer (Freelancer)",
        company: "Alief View Media Group",
        logo: "/logos/alief.png", // Placeholder
        duration: "March 2024 - Sept 2024",
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
        logo: "/logos/linuxworld.png", // Placeholder
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
            twitter: "#"
        }
    }
];

export const EDUCATION = [
    {
        degree: "Bachelor of Technology",
        institution: "GCE Karad",
        duration: "2019 - 2023",
        description: "Focused on coding and management. Completed 20+ projects and authored 72+ technical articles."
    }
];
