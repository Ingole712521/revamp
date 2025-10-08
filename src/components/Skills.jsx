import { motion } from "framer-motion";
import {  Card } from "antd";
import { 
    CloudOutlined, 
    CodeOutlined, 
    DatabaseOutlined, 
    ToolOutlined,
    SafetyOutlined,
    RocketOutlined
} from "@ant-design/icons";
import { useInView } from "react-intersection-observer";

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillsData = [
        {
            category: "Cloud & DevOps",
            icon: <CloudOutlined className="text-2xl" />,
            skills: [
                { name: "AWS", percentage: 90 },
                { name: "Docker", percentage: 85 },
                { name: "Kubernetes", percentage: 80 },
                { name: "Jenkins", percentage: 85 },
                { name: "Terraform", percentage: 75 }
            ]
        },
        {
            category: "Frontend Development",
            icon: <CodeOutlined className="text-2xl" />,
            skills: [
                { name: "React", percentage: 90 },
                { name: "JavaScript", percentage: 85 },
                { name: "TypeScript", percentage: 80 },
                { name: "HTML/CSS", percentage: 95 },
                { name: "Tailwind CSS", percentage: 85 }
            ]
        },
        {
            category: "Backend & Database",
            icon: <DatabaseOutlined className="text-2xl" />,
            skills: [
                { name: "Node.js", percentage: 80 },
                { name: "MongoDB", percentage: 75 },
                { name: "PostgreSQL", percentage: 70 },
                { name: "Express.js", percentage: 80 },
                { name: "REST APIs", percentage: 85 }
            ]
        },
        {
            category: "Tools & Technologies",
            icon: <ToolOutlined className="text-2xl" />,
            skills: [
                { name: "Git", percentage: 90 },
                { name: "GitHub Actions", percentage: 85 },
                { name: "Ansible", percentage: 80 },
                { name: "Linux", percentage: 85 },
                { name: "Portainer", percentage: 80 }
            ]
        },
        {
            category: "Security & Monitoring",
            icon: <SafetyOutlined className="text-2xl" />,
            skills: [
                { name: "Cybersecurity", percentage: 75 },
                { name: "Security Best Practices", percentage: 80 },
                { name: "Monitoring Tools", percentage: 75 },
                { name: "Log Management", percentage: 70 },
                { name: "Incident Response", percentage: 70 }
            ]
        },
        {
            category: "MLOps & Automation",
            icon: <RocketOutlined className="text-2xl" />,
            skills: [
                { name: "MLOps", percentage: 75 },
                { name: "Model Deployment", percentage: 70 },
                { name: "CI/CD Pipelines", percentage: 85 },
                { name: "Automation Scripts", percentage: 80 },
                { name: "Performance Optimization", percentage: 75 }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const progressVariants = {
        hidden: { width: 0 },
        visible: (percentage) => ({
            width: `${percentage}%`,
            transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
        })
    };

    return (
        <section id="skills" className="py-20">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="container mx-auto px-4"
            >
                {/* Section Header */}
                <motion.div
                    variants={cardVariants}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        My technical expertise spans across DevOps, cloud platforms, and full-stack development
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -5,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group"
                        >
                            {/* 3D Card Container */}
                            <div className="relative transform-gpu perspective-1000">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Main Card */}
                                <Card
                                    className="relative bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full"
                                    bodyStyle={{ padding: '24px' }}
                                >
                                    {/* Category Header */}
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            {category.category}
                                        </h3>
                                    </div>

                                    {/* Skills List */}
                                    <div className="space-y-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white/80 font-medium text-sm">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-white/60 text-xs">
                                                        {skill.percentage}%
                                                    </span>
                                                </div>
                                                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        custom={skill.percentage}
                                                        variants={progressVariants}
                                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                {/* <motion.div
                    variants={cardVariants}
                    className="mt-16 text-center"
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Continuous Learning & Growth
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed">
                            I'm constantly expanding my skill set through hands-on projects, 
                            industry certifications, and staying updated with the latest technologies. 
                            My passion for learning drives me to explore new tools and methodologies 
                            that can enhance development workflows and deliver better solutions.
                        </p>
                    </div>
                </motion.div> */}
            </motion.div>
        </section>
    );
};

export default Skills;
