export const NAVIGATION_LINKS = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

export const HERO = {
    name: "Nehal Ingole",
    greet: "Hi, I'm Nehal —",
    role: "Frontend Developer |  DevOps Engineer",
    description:
        "focused on cloud automation, stylish development, and high-performance systems. Passionate about Docker, AWS, and building minimalist technical aesthetics.",
    avatar: "/image (3).jpg",
};

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
    email: {
        url: "mailto:nehalingole2001@gmail.com",
        label: "Email",
        preview: "nehalingole2001@gmail.com",
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

export const PROJECTS = [
    {
        id: 1,
        name: "HLS Adaptive Bitrate Streaming With AWS",
        description: "Deployed a High-Level Streaming (HLS) solution using Docker and Amazon Web Services (AWS) for optimized video delivery.",
        image: "/webpratice.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_streaming-videostreaming-docker-activity-7207360568955924481--ZGI",
        videoUrl: "https://www.youtube.com/embed/VkoHykQrWOY?autoplay=1&mute=1&controls=0&loop=1&playlist=VkoHykQrWOY",

        tags: ["AWS", "Docker", "HLS", "S3"]
    },
    {
        id: 2,
        name: "Simplifying Docker Management",
        description: "Explored Portainer CE to streamline container management, resource monitoring, and deployment workflows.",
        image: "/dockerPontaner.png",
        link: "https://learnwithnehal.hashnode.dev/simplifying-docker-management-with-portainer-ce",
        tags: ["Docker", "Portainer", "DevOps"]
    },
    {
        id: 3,
        name: "CI/CD on ECR and Docker",
        description: "Automated Docker container uploads to AWS ECR using GitHub Actions, boosting deployment efficiency.",
        image: "/ECR.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_githubactions-aws-ecr-activity-7183878521130217474-oS8C",
        tags: ["GitHub Actions", "AWS ECR", "CI/CD"]
    },
    {
        id: 4,
        name: "Ansible Server Automation",
        description: "Simplified server management through Ansible playbooks, inventory management, and automated service deployments.",
        image: "/ansible.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_document-activity-7178789372949897216-h1FK",
        tags: ["Ansible", "Automation", "IAAC"]
    },
    {
        id: 5,
        name: "Docker Deployment on GCP Using Terraform",
        description: "Deployed a Docker environment on Google Cloud Platform using Terraform, achieving efficient resource provisioning and management for scalable applications.",
        videoUrl: "https://www.youtube.com/embed/VkoHykQrWOY?autoplay=1&mute=1&controls=0&loop=1&playlist=VkoHykQrWOY",
        image: "/terraform.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_terraform-docker-googlecloud-activity-7187755010640801792-4rFl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC508FUBuGfTDjOmT3MnzkFrrqilcF1xhAw",
        tags: ["Docker", "Terraform", "IAAC", "GCP", "Ubuntu"]
    },
    {
        id: 6,
        name: "Own Github Repository Using AWS",
        description: "Deployed a Docker environment on Google Cloud Platform using Terraform, achieving efficient resource provisioning and management for scalable applications.",
        videoUrl: "https://www.youtube.com/embed/Xu9RLiXOa5k?autoplay=1&mute=1&loop=1&playlist=Xu9RLiXOa5k",
        image: "/github.png",
        link: "https://www.linkedin.com/posts/nehal-ingole_github-aws-codingjourney-activity-7172914850921148416-9Lue?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC508FUBuGfTDjOmT3MnzkFrrqilcF1xhAw",
        tags: ["Docker", "Git", "AWS", "Ubuntu", "Windows"]
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
        logo: "/logos/kshan.png",
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
        title: "React Developer (Freelancer)",
        company: "Alief View Media Group",
        logo: "/logos/alief.png",
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
