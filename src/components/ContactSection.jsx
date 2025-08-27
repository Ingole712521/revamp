import { useState } from "react";
import { motion } from "framer-motion";
import { 
    Form, 
    Input, 
    Button, 
    message, 
    Card,
    Row,
    Col
} from "antd";
import { 
    UserOutlined, 
    MailOutlined, 
    MessageOutlined,
    PhoneOutlined,
    LinkedinOutlined,
    GithubOutlined,
    SendOutlined
} from "@ant-design/icons";
import { useInView } from "react-intersection-observer";

const { TextArea } = Input;

const API_BASE = import.meta.env.VITE_EMAIL_API || "http://localhost:3001";

const ContactSection = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
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

    const contactInfo = [
        {
            icon: <MailOutlined className="text-2xl" />,
            title: "Email",
            value: "nehal.ingole@example.com",
            link: "mailto:nehal.ingole@example.com"
        },
        {
            icon: <PhoneOutlined className="text-2xl" />,
            title: "Phone",
            value: "+91 7397966719",
            link: "tel:+917397966719"
        },
        {
            icon: <LinkedinOutlined className="text-2xl" />,
            title: "LinkedIn",
            value: "nehal-ingole",
            link: "https://www.linkedin.com/in/nehal-ingole/"
        },
        {
            icon: <GithubOutlined className="text-2xl" />,
            title: "GitHub",
            value: "github.com/Ingole712521",
            link: "https://github.com/Ingole712521"
        }
    ];

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE}/api/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to send');
            message.success('Message sent successfully!');
            if (data.previewUrl) {
                message.info(`Preview email: ${data.previewUrl}`);
            }
            form.resetFields();
        } catch (error) {
            console.error('Error sending email:', error);
            message.error(error.message || 'Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20">
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
                        Get In Touch
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Ready to collaborate? Let's discuss your next project or opportunity
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <Card
                            className="bg-white/5 backdrop-blur-sm border-white/10"
                            bodyStyle={{ padding: '32px' }}
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                                    <SendOutlined className="text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Send Message</h3>
                            </div>

                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                className="space-y-6"
                            >
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="name"
                                            rules={[{ required: true, message: 'Please enter your name' }]}
                                        >
                                            <Input
                                                prefix={<UserOutlined className="text-white/50" />}
                                                placeholder="Your Name"
                                                size="large"
                                                className="bg-white/10 border-white/20 text-white placeholder-white/50 hover:bg-white/20 focus:bg-white/20"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                { required: true, message: 'Please enter your email' },
                                                { type: 'email', message: 'Please enter a valid email' }
                                            ]}
                                        >
                                            <Input
                                                prefix={<MailOutlined className="text-white/50" />}
                                                placeholder="Your Email"
                                                size="large"
                                                className="bg-white/10 border-white/20 text-white placeholder-white/50 hover:bg-white/20 focus:bg-white/20"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item
                                    name="message"
                                    rules={[{ required: true, message: 'Please enter your message' }]}
                                >
                                    <TextArea
                                        prefix={<MessageOutlined className="text-white/50" />}
                                        placeholder="Your Message"
                                        rows={6}
                                        className="bg-white/10 border-white/20 text-white placeholder-white/50 hover:bg-white/20 focus:bg-white/20"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        loading={loading}
                                        size="large"
                                        className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 border-0 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl"
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ 
                                        y: -5,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group block"
                                >
                                    <div className="relative transform-gpu perspective-1000">
                                        {/* Glow Effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Main Card */}
                                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                                                    {info.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white mb-1">
                                                        {info.title}
                                                    </h4>
                                                    <p className="text-white/70">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-2xl border border-white/20 p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Let's Connect</h4>
                            <p className="text-white/70 leading-relaxed mb-4">
                                I'm always interested in hearing about new opportunities, 
                                interesting projects, or just having a chat about technology.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-white/80">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                                    <span>Available for freelance projects</span>
                                </div>
                                <div className="flex items-center text-white/80">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                    <span>Open to full-time opportunities</span>
                                </div>
                                <div className="flex items-center text-white/80">
                                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                                    <span>Happy to discuss collaborations</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-16"
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Start a Project?
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed mb-6">
                            Whether you have a specific project in mind or just want to explore possibilities, 
                            I'd love to hear from you. Let's create something amazing together!
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:nehal.ingole@example.com"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                        >
                            Start a Conversation
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
