import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { 
    CalendarOutlined, 
    EnvironmentOutlined, 
    TrophyOutlined,
    RocketOutlined
} from "@ant-design/icons";
import { useInView } from "react-intersection-observer";

const WorkExperience = () => {
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
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const timelineVariants = {
        hidden: { opacity: 0, scaleY: 0 },
        visible: {
            opacity: 1,
            scaleY: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    return (
        <section id="work" className="py-20">
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
                        Work Experience
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        My professional journey in DevOps, cloud engineering, and full-stack development
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <motion.div
                        variants={timelineVariants}
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 transform -translate-x-1/2"
                    />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {EXPERIENCES.map((experience, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative flex items-center ${
                                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-slate-900 z-10">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-ping opacity-75"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 lg:ml-0 lg:w-5/12 ${
                                    index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                                }`}>
                                    <motion.div
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
                                            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                                                {/* Role Badge */}
                                                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full border border-white/20 mb-4">
                                                    <RocketOutlined className="text-indigo-400 mr-2" />
                                                    <span className="text-white/90 text-sm font-medium">
                                                        {experience.title}
                                                    </span>
                                                </div>

                                                {/* Company & Duration */}
                                                <div className="space-y-2 mb-4">
                                                    <div className="flex items-center text-white/80">
                                                        <EnvironmentOutlined className="mr-2 text-indigo-400" />
                                                        <span className="font-semibold">{experience.company}</span>
                                                    </div>
                                                    <div className="flex items-center text-white/60 text-sm">
                                                        <CalendarOutlined className="mr-2 text-purple-400" />
                                                        <span>{experience.duration}</span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-white/70 leading-relaxed">
                                                    {experience.description}
                                                </p>

                                                {/* Achievement Badge */}
                                                <div className="mt-4 flex items-center">
                                                    <TrophyOutlined className="text-yellow-400 mr-2" />
                                                    <span className="text-white/60 text-sm">
                                                        Key Achievement
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                {/* <motion.div
                    variants={itemVariants}
                    className="text-center mt-16"
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready for New Challenges
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed mb-6">
                            I'm always excited to take on new opportunities that allow me to 
                            leverage my DevOps expertise and contribute to innovative projects.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                        >
                            Let's Connect
                        </motion.a>
                    </div>
                </motion.div> */}
            </motion.div>
        </section>
    );
};

export default WorkExperience;
