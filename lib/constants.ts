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
        duration: "Jan 2025 - Present",
        description: "Building responsive web applications using React, TypeScript, and MongoDB."
    },
    {
        title: "React Developer",
        company: "Alief View Media Group",
        duration: "March 2024 - Sept 2024",
        description: "Spearheaded full-site development from concept to deployment, ensuring seamless UX across devices."
    },
    {
        title: "DevOps Engineer Trainee",
        company: "Trainee",
        duration: "Sept 2020 - Aug 2021",
        description: "Worked with Kubernetes, Jenkins, and Docker. Increased security efficiency by 2% and reduced costs by 10%."
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
