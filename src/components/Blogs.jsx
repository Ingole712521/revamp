import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { FaHashnode } from "react-icons/fa6";

const Blogs = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Static previews; swap/extend with live data later
    const posts = [
        {
            title: "Building an Interactive Hand-Tracking Game with React, MediaPipe, and GSAP",
            url: "https://learnwithnehal.hashnode.dev/building-an-interactive-hand-tracking-game-with-react-mediapipe-and-gsap",
            tag: ["React"],
            image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1752943687296/ad28538d-521d-455c-be5e-31006f3365bd.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", // optional external og image
            excerpt: "The game displays a video feed from your webcam. Birds fly across the screen, and you “hit” them by showing a single raised finger (the “OK” gesture) in front of your camera."
        },
        {
            title: "HLS Adaptive Bitrate Streaming With AWS",
            url: "https://www.linkedin.com/posts/nehal-ingole_streaming-videostreaming-docker-activity-7207360568955924481--ZGI?utm_source=share&utm_medium=member_desktop",
            tag: "AWS",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
            excerpt: "How I deployed an HLS streaming pipeline on AWS with Docker, enabling smooth playback across varying network conditions."
        },
        {
            title: "Automating Docker Push to AWS ECR with GitHub Actions",
            url: "https://www.linkedin.com/posts/nehal-ingole_githubactions-aws-ecr-activity-7183878521130217474-oS8C?utm_source=share&utm_medium=member_desktop",
            tag: "CI/CD",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
            excerpt: "Step-by-step CI/CD workflow to build and push Docker images to Amazon ECR using GitHub Actions."
        }
    ];

    return (
        <section id="blogs" className="py-20 scroll-mt-24">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="container mx-auto px-4"
            >
                <motion.div variants={cardVariants} className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
                        Latest Blogs
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        I regularly write about DevOps, cloud, and frontend. Read some highlights below.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.a
                            key={idx}
                            variants={cardVariants}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                        >
                            {/* Cover Image */}
                            <div className="h-40 w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full border border-white/20 text-white/80 text-xs mb-3">
                                    <BookOutlined className="mr-2 text-indigo-300" /> {post.tag}
                                </div>
                                <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="mt-2 text-white/70 text-sm leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-4 inline-flex items-center text-indigo-300 group-hover:text-indigo-200">
                                    Read post <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div variants={cardVariants} className="text-center mt-16">
                    <a
                        href="https://learnwithnehal.hashnode.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                        View all on Hashnode    <FaHashnode className="ml-3" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Blogs;
