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

};
export default App;