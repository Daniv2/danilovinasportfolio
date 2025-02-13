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