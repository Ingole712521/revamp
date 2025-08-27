import { motion } from "framer-motion";
import { 
    LinkedinOutlined, 
    GithubOutlined, 
    MailOutlined,
    HeartOutlined,
    RocketOutlined
} from "@ant-design/icons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <LinkedinOutlined className="text-xl" />,
            href: "https://www.linkedin.com/in/nehal-ingole/",
            label: "LinkedIn"
        },
        {
            icon: <GithubOutlined className="text-xl" />,
            href: "https://github.com/Ingole712521",
            label: "GitHub"
        },
        {
            icon: <MailOutlined className="text-xl" />,
            href: "mailto:nehal.ingole@example.com",
            label: "Email"
        }
    ];

    const quickLinks = [
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#work" },
        { name: "Blogs", href: "#blogs" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="relative py-16 mt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-purple-900/50 to-transparent"></div>
            
            <div className="relative z-10 container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <span className="text-white font-bold text-2xl">Nehal Ingole</span>
                        </div>
                        
                        <p className="text-white/70 leading-relaxed max-w-md">
                            Passionate DevOps engineer and full-stack developer dedicated to creating 
                            efficient, scalable solutions that drive business value.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ 
                                        y: -3,
                                        scale: 1.1,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <div className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="block text-white/70 hover:text-white transition-colors duration-300"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
                        <div className="space-y-3">
                            <div className="flex items-center text-white/70">
                                <MailOutlined className="mr-3 text-indigo-400" />
                                <span>nehal.ingole@example.com</span>
                            </div>
                            <div className="flex items-center text-white/70">
                                <RocketOutlined className="mr-3 text-purple-400" />
                                <span>Available for opportunities</span>
                            </div>
                        </div>

                        {/* Newsletter Signup Placeholder */}
                        <div className="mt-6">
                            <p className="text-white/60 text-sm mb-3">
                                Stay updated with my latest projects
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-500"
                                />
                                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-r-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-white/60 text-sm">
                            © {currentYear} Nehal Ingole. All rights reserved.
                        </div>
                        
                        <div className="flex items-center space-x-2 text-white/60 text-sm">
                            <span>Made with</span>
                            <HeartOutlined className="text-red-400 animate-pulse" />
                            <span>using React & Ant Design</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-40 animate-ping"></div>
        </footer>
    );
};

export default Footer;
