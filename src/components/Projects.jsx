import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { FaGithubAlt } from "react-icons/fa";
import { IoIosNavigate } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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

    return (
        <section id="projects" className="py-20">
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
                        Featured Projects
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Explore my latest work showcasing DevOps, cloud solutions, and full-stack development
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            {/* 3D Card Container */}
                            <div className="relative transform-gpu perspective-1000">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Main Card */}
                                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full hover:bg-white/10 transition-all duration-300">
                                    {/* Project Image */}
                                    <div className="relative mb-6 overflow-hidden rounded-xl">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                                            {project.name}
                                        </h3>
                                        
                                        <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Action Button */}
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white font-medium rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 group/btn"
                                        >
                                            <IoIosNavigate  className="mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            View Project
                                        </motion.a>
                                    </div>

                                    {/* Floating Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium rounded-full">
                                            #{String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    variants={cardVariants}
                    className="text-center mt-16"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/Ingole712521"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 group"
                    >
                        <FaGithubAlt  className="mr-2 text-lg group-hover:scale-110 transition-transform duration-300" />
                        View All Projects on GitHub
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
