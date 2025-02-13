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


};
export default App;