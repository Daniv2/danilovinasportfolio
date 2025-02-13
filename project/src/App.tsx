import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Code, Palette, Monitor, Film, Share2, Download, Briefcase, Award, Clock } from 'lucide-react';
import Loader from './components/Loader';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('');
  const fullText = "hello, I'm Danilo Vinas";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setIsLoaded(true), 100);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const roles = [
    "Junior Frontend Developer",
    "UI/UX Designer",
    "Video Editor",
    "Social Media Manager",
    "Web Developer"
  ];

  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, label: "Total Projects", value: "5" },
    { icon: <Award className="w-8 h-8" />, label: "Certificate", value: "1" },
    { icon: <Clock className="w-8 h-8" />, label: "Years of Experience", value: "3" }
  ];
  const showcaseContent = {
    projects: [
      {
        title: "E-commerce Dashboard",
        description: "A comprehensive admin dashboard for managing an e-commerce platform with real-time analytics, inventory management, and order processing.",
        tech: ["React", "TypeScript", "Tailwind CSS", "React Query", "Chart.js"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
      },
      {
        title: "SaaS Platform",
        description: "A modern SaaS application with authentication, subscription management, and a feature-rich dashboard for business analytics.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
      },
      {
        title: "Real-time Chat Application",
        description: "A full-featured chat application with real-time messaging, file sharing, and group conversations.",
        tech: ["React", "WebSocket", "Tailwind CSS", "Firebase"],
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
      },
      {
        title: "Project Management Tool",
        description: "A collaborative project management platform with task tracking, team management, and real-time updates.",
        tech: ["React", "TypeScript", "Tailwind CSS", "React DnD", "Redux"],
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
      },
      {
        title: "Social Media Dashboard",
        description: "A comprehensive social media management dashboard with analytics, scheduling, and content management.",
        tech: ["React", "TypeScript", "Tailwind CSS", "React Query", "D3.js"],
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
      },
      {
        title: "AI-Powered Content Editor",
        description: "A modern content editor with AI-powered suggestions, real-time collaboration, and version control.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Slate.js", "OpenAI API"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
      },
      {
        title: "Design System & Component Library",
        description: "A comprehensive design system with reusable components, documentation, and interactive examples.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Jest"],
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
      }
    ],
    certificates: [
      { title: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
      { title: "React Advanced Concepts", issuer: "Frontend Masters", year: "2023" },
      { title: "UI/UX Design", issuer: "Google", year: "2022" }
    ],
    techStack: [
      { category: "Frontend", skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
      { category: "Tools", skills: ["Git", "Docker", "Figma", "VS Code"] }
    ]
  };

  const descriptionText = [
    { text: "I'm a passionate developer with expertise", tilt: "tilt-l" },
    { text: "in creating beautiful and functional", tilt: "tilt-r" },
    { text: "web applications", tilt: "tilt-l2x" },
    { text: "My focus is on delivering", tilt: "tilt-r" },
    { text: "high-quality solutions", tilt: "tilt-l" },
    { text: "that combine elegant design with robust functionality.", tilt: "tilt-r2x" }
  ];

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white text-black">
      <header className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-2 sm:px-4 max-w-[2000px]">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <button onClick={scrollToTop} className="flex items-center space-x-2 group">
              <span className="text-xl sm:text-2xl font-bold tracking-tighter">
                <span className="nav-text-stroke">DANILO</span>
                <span className="ml-2">VINAS</span>
              </span>
            </button>
            <div className="flex space-x-4 sm:space-x-8">
              <a href="#work" className="nav-link text-xs sm:text-sm uppercase tracking-widest">Work</a>
              <a href="#about" className="nav-link text-xs sm:text-sm uppercase tracking-widest">About</a>
              <a href="#contact" className="nav-link text-xs sm:text-sm uppercase tracking-widest">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <div ref={scrollContainerRef} className="scroll-container">
        <section className="section-height flex items-center justify-center bg-gray-50 relative overflow-hidden">
          <div className="glowing">
            <span style={{"--i": 1} as React.CSSProperties}></span>
            <span style={{"--i": 2} as React.CSSProperties}></span>
            <span style={{"--i": 3} as React.CSSProperties}></span>
          </div>
          <div className="glowing">
            <span style={{"--i": 1} as React.CSSProperties}></span>
            <span style={{"--i": 2} as React.CSSProperties}></span>
            <span style={{"--i": 3} as React.CSSProperties}></span>
          </div>
          <div className="glowing">
            <span style={{"--i": 1} as React.CSSProperties}></span>
            <span style={{"--i": 2} as React.CSSProperties}></span>
            <span style={{"--i": 3} as React.CSSProperties}></span>
          </div>
          <div className="glowing">
            <span style={{"--i": 1} as React.CSSProperties}></span>
            <span style={{"--i": 2} as React.CSSProperties}></span>
            <span style={{"--i": 3} as React.CSSProperties}></span>
          </div>
          
          <div className="container mx-auto px-2 sm:px-4 max-w-[2000px] relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className={`role-container h-8 mb-3 sm:mb-6 hero-element ${isLoaded ? 'loaded' : ''}`}>
                <p className="text-lg sm:text-xl role-text">{roles[currentRole]}</p>
              </div>
              <h1 className={`text-5xl sm:text-7xl lg:text-[8rem] font-bold leading-none mb-3 sm:mb-4 hero-element ${isLoaded ? 'loaded' : ''}`}>
                <span className="text-stroke">DANILO</span>
                <br />
                VINAS
              </h1>
              <div className={`developer-scene mb-6 sm:mb-8 relative hero-element ${isLoaded ? 'loaded' : ''}`}>
                <div className="computer">
                  <div className="screen-content">
                    <div className="tech-stack-slideshow">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                        alt="React"
                        className="tech-logo"
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                        alt="TypeScript"
                        className="tech-logo"
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
                        alt="Tailwind CSS"
                        className="tech-logo"
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
                        alt="Node.js"
                        className="tech-logo"
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" 
                        alt="Git"
                        className="tech-logo"
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" 
                        alt="Figma"
                        className="tech-logo"
                      />
                    </div>
                    <div className="screen-reflection"></div>
                  </div>
                </div>
                <div className={`absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 hero-element ${isLoaded ? 'loaded' : ''}`}>
                  <a href="mailto:contact@example.com" className="social-link">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="section-height py-16 sm:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[2000px]">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-16 sm:mb-24">
                <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-adamina mb-8 sm:mb-16 typewriter ${isTypingComplete ? 'border-transparent' : ''}`}>
                  hello, I'm <span className="about-name">Danilo Vinas</span>
                </h1>
                <div className="chromatica-text">
                  {descriptionText.map((line, index) => (
                    <div key={index} className={`chromatica-line text-lg sm:text-xl lg:text-2xl ${line.tilt}`}>
                      {line.text}
                    </div>
                  ))}
                </div>
                <a 
                  href="/cv.pdf" 
                  download 
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-base sm:text-lg mt-8 sm:mt-16"
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Download CV
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 mb-12 sm:mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
                    <div className="mb-4 sm:mb-6 inline-block p-3 sm:p-4 bg-gray-50 rounded-full">
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-base sm:text-lg text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <Code className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Web Development</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Specialized in creating responsive and performant web applications using modern frameworks and best practices.
                    </p>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <Palette className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">UI/UX Design</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Passionate about creating intuitive and beautiful user interfaces that enhance user experience.
                    </p>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <Film className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Video Editing</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Experienced in creating engaging video content with attention to detail and storytelling.
                    </p>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <Share2 className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Social Media</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Skilled in managing social media presence and creating engaging content strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section-height py-16 sm:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[2000px]">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 sm:mb-16 text-center">
              <span className="text-stroke">Design &</span> Development
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 sm:space-x-8 mb-8 sm:mb-16">
              {['projects', 'certificates', 'techStack'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-bold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-black text-white shadow-lg transform -translate-y-1'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="showcase-content">
              {activeTab === 'projects' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {showcaseContent.projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <button className="px-4 sm:px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm sm:text-base">
                            View Project
                          </button>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-gray-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'certificates' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {showcaseContent.certificates.map((cert, index) => (
                    <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">{cert.issuer}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{cert.year}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'techStack' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {showcaseContent.techStack.map((stack, index) => (
                    <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                      <h3 className="text-lg sm:text-xl font-bold mb-4">{stack.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {stack.skills.map((skill, i) => (
                          <span key={i} className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <ChatBot />
    </div>
  );
};
export default App;