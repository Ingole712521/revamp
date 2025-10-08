import { motion } from "framer-motion";
import { HERO } from "../constants";
import carImg from "../assets/Nehal_Ingole.jpeg";
import resume from "../assets/Nehal_Ingole_7397966719.pdf";
import { DownloadOutlined, LinkedinOutlined } from "@ant-design/icons";

const Hero = ({ isDark = true }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const frameBg = isDark ? 'from-white/10 to-white/5 border-white/20' : 'from-white to-slate-100 border-slate-200';

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center py-20 scroll-mt-24">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4"
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full border border-white/20 backdrop-blur-sm"
                        >
                            <span className="text-2xl mr-2">👋</span>
                            <span className="text-white/90 font-medium">{HERO.greet}</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl lg:text-7xl xl:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent leading-tight"
                        >
                            {HERO.name}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl"
                        >
                            {HERO.description}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={resume}
                                download
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <DownloadOutlined className="mr-2 text-lg group-hover:animate-bounce" />
                                Download Resume
                            </motion.a>
                            
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.linkedin.com/in/nehal-ingole/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 group"
                            >
                                <LinkedinOutlined className="mr-2 text-lg group-hover:scale-110" />
                                LinkedIn
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-6 pt-8"
                        >
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-white">80+</div>
                                <div className="text-white/60 text-sm">Blog Posts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-white">23+</div>
                                <div className="text-white/60 text-sm">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-white">1</div>
                                <div className="text-white/60 text-sm">Years Exp</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        variants={imageVariants}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Portrait frame matching image aspect ratio */}
                            <div className={`relative  p-3 shadow-2xl w-64 h-[30rem] sm:w-72 sm:h-[34rem] lg:w-80 lg:h-[36rem] flex items-center justify-center overflow-hidden`}>
                                <img
                                    src={carImg}
                                    alt="Nehal Ingole"
                                    className="max-h-full max-w-full object-contain rounded-2xl"
                                />
                            </div>
                            {/* Soft shadow glow */}
                            <div className="absolute -inset-4 -z-10 rounded-[2rem] blur-2xl opacity-40 bg-gradient-to-r from-indigo-500/30 to-purple-600/30" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
