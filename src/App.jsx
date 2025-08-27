import Bio from "./components/Bio";
import EducationSection from "./components/EducationSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import { ConfigProvider, theme } from 'antd';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark((v) => !v);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#6366f1',
          borderRadius: 12,
        },
      }}
    >
      <div className={
        isDark
          ? "relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black overflow-x-hidden"
          : "relative min-h-screen bg-gradient-to-br from-white via-indigo-50 to-white overflow-x-hidden"
      }>
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
          
          <main className="container mx-auto px-4 py-8 space-y-16">
            <Hero isDark={isDark} />
            <Projects />
            <Blogs />
            <Bio />
            <Skills />
            <WorkExperience />
            <EducationSection />
            <ContactSection />
          </main>
          
          <Footer />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;