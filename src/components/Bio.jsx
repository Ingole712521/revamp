import { motion } from "framer-motion";
import { BIO } from "../constants";
import { 
    UserOutlined, 
    BookOutlined, 
    TrophyOutlined,
    RocketOutlined
} from "@ant-design/icons";
import { useInView } from "react-intersection-observer";

const Bio = () => {
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

    const stats = [
        { icon: <BookOutlined />, value: "80+", label: "Blog Posts" },
        { icon: <TrophyOutlined />, value: "23+", label: "Projects" },
        { icon: <RocketOutlined />, value: "1", label: "Years Experience" },
        // { icon: <UserOutlined />, value: "100%", label: "Dedicated" }
    ];

    return (
        <section id="bio" className="py-20">
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
                        About Me
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Passionate DevOps engineer and full-stack developer with a love for innovation
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Bio Content */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        {/* Main Bio Text */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                                    <UserOutlined className="text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">My Journey</h3>
                            </div>
                            
                            <div className="space-y-4 text-white/80 leading-relaxed">
                                {BIO.map((paragraph, index) => (
                                    <p key={index} className="text-lg">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-xl border border-white/20 p-4 text-center">
                                <div className="text-2xl font-bold text-white mb-1">2023</div>
                                <div className="text-white/70 text-sm">Graduated</div>
                            </div>
                            <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-xl border border-white/20 p-4 text-center">
                                <div className="text-2xl font-bold text-white mb-1">DevOps</div>
                                <div className="text-white/70 text-sm">Specialist</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
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
                                                {stat.icon}
                                            </div>
                                            <div className="text-3xl font-bold text-white mb-2">
                                                {stat.value}
                                            </div>
                                            <div className="text-white/70 text-sm">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-2xl border border-white/20 p-6">
                            <h4 className="text-xl font-bold text-white mb-4">What Drives Me</h4>
                            <div className="space-y-3">
                                <div className="flex items-center text-white/80">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                                    <span>Automation & Efficiency</span>
                                </div>
                                <div className="flex items-center text-white/80">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                    <span>Cloud-Native Solutions</span>
                                </div>
                                <div className="flex items-center text-white/80">
                                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                                    <span>Security-First Approach</span>
                                </div>
                                <div className="flex items-center text-white/80">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                    <span>Continuous Learning</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                {/* <motion.div
                    variants={itemVariants}
                    className="text-center mt-16"
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Let's Build Something Amazing Together
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed mb-6">
                            I'm passionate about creating efficient, scalable solutions that drive business value. 
                            Whether it's DevOps automation, cloud architecture, or full-stack development, 
                            I'm ready to contribute to your next project.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                        >
                            Start a Conversation
                        </motion.a>
                    </div>
                </motion.div> */}
            </motion.div>
        </section>
    );
};

export default Bio;
