import { motion } from "framer-motion";
import { EDUCATION } from "../constants";
import { 
    ReadOutlined, 
    CalendarOutlined, 
    BookOutlined,
    TrophyOutlined
} from "@ant-design/icons";
import { useInView } from "react-intersection-observer";

const EducationSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const achievements = [
        { icon: <BookOutlined />, text: "20+ Projects Completed" },
        { icon: <TrophyOutlined />, text: "72+ Blog Posts Published" },
        { icon: <ReadOutlined />, text: "Bachelor of Technology" },
        { icon: <CalendarOutlined />, text: "4 Years of Learning" }
    ];

    return (
        <section id="education" className="py-20">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="container mx-auto px-4"
            >
                {/* Section Header */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
                        Education
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        My academic foundation and continuous learning journey
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Education Details */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        {EDUCATION.map((education, index) => (
                            <motion.div
                                key={index}
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
                                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                                        {/* Degree Badge */}
                                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full border border-white/20 mb-6">
                                            <ReadOutlined className="text-indigo-400 mr-2" />
                                            <span className="text-white/90 font-medium">
                                                {education.degree}
                                            </span>
                                        </div>

                                        {/* Institution */}
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {education.institution}
                                        </h3>

                                        {/* Duration */}
                                        <div className="flex items-center text-white/60 mb-6">
                                            <CalendarOutlined className="mr-2 text-purple-400" />
                                            <span>{education.duration}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-white/70 leading-relaxed">
                                            {education.description}
                                        </p>

                                        {/* Achievement Highlights */}
                                        <div className="mt-6 pt-6 border-t border-white/10">
                                            <h4 className="text-lg font-semibold text-white mb-3">
                                                Key Achievements
                                            </h4>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="flex items-center text-white/70 text-sm">
                                                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                                                    <span>20+ Projects</span>
                                                </div>
                                                <div className="flex items-center text-white/70 text-sm">
                                                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                                                    <span>72+ Blog Posts</span>
                                                </div>
                                                <div className="flex items-center text-white/70 text-sm">
                                                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                                                    <span>DevOps Focus</span>
                                                </div>
                                                <div className="flex items-center text-white/70 text-sm">
                                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                                                    <span>Full-Stack Skills</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Achievements & Stats */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Achievements Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ 
                                        y: -5,
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group"
                                >
                                    <div className="relative transform-gpu perspective-1000">
                                        {/* Glow Effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Main Card */}
                                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300">
                                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                                                {achievement.icon}
                                            </div>
                                            <div className="text-white/80 text-sm font-medium">
                                                {achievement.text}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-2xl border border-white/20 p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Learning Philosophy</h4>
                            <div className="space-y-3">
                                <div className="flex items-start text-white/80">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span>Hands-on project-based learning</span>
                                </div>
                                <div className="flex items-start text-white/80">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span>Continuous skill development</span>
                                </div>
                                <div className="flex items-start text-white/80">
                                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span>Knowledge sharing through blogging</span>
                                </div>
                                <div className="flex items-start text-white/80">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span>Staying updated with latest technologies</span>
                                </div>
                            </div>
                        </div>

                        {/* Certifications Placeholder */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Certifications</h4>
                            <p className="text-white/70 mb-4">
                                Continuously pursuing industry certifications to validate and enhance my skills.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30">
                                    AWS Certified
                                </span>
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                                    Docker Certified
                                </span>
                                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full border border-pink-500/30">
                                    Kubernetes
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                {/* <motion.div
                    variants={itemVariants}
                    className="text-center mt-16"
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Always Learning, Always Growing
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed mb-6">
                            Education is a lifelong journey. I'm committed to continuous learning 
                            and staying at the forefront of technology to deliver the best solutions.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                        >
                            Let's Discuss Opportunities
                        </motion.a>
                    </div>
                </motion.div> */}
            </motion.div>
        </section>
    );
};

export default EducationSection;
