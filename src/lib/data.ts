import { 
  Code2, 
  Layers, 
  Globe, 
  Cpu, 
  Database, 
  Cloud, 
  Terminal,
  Zap,
  Smartphone,
  Server,
  TrendingUp,
  MessageSquare,
  ShieldCheck,
  Bot
} from "lucide-react";

export const USER_INFO = {
  name: "Kunal Chauhan",
  title1: "Software Engineer",
  title2: "AI | Full-Stack | Cloud",
  title3: "AWS AWS Certified",
  subtitle: "Full-Stack · Django · React.js · AWS",
  about: "I am a detail-oriented and proactive B.Tech CSE student at HPTU Hamirpur. I specialize in building intelligent applications, merging full-stack development with AI/ML integration and cloud architecture to turn complex ideas into clean, scalable products.",
  email: "kunalchauhan91837@gmail.com",
  github: "https://github.com/burgerbeast7",
  linkedin: "https://linkedin.com/in/kunal-chauhan-7a7539287",
  location: "Palampur, Himachal Pradesh, India",
};

export const STATISTICS = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Blog Traffic Increase", value: 20, suffix: "%" },
  { label: "Cost Optimization", value: 15, suffix: "%" },
  { label: "Page Load Speedup", value: 18, suffix: "%" },
];

export const SKILLS = [
  { name: "Python", category: "Backend", level: 95, icon: "Python" },
  { name: "Django", category: "Backend", level: 90, icon: "Django" },
  { name: "Flask", category: "Backend", level: 85, icon: "Flask" },
  { name: "React.js", category: "Frontend", level: 88, icon: "React" },
  { name: "JavaScript", category: "Frontend", level: 90, icon: "JS" },
  { name: "AWS (EC2/S3)", category: "Cloud", level: 82, icon: "AWS" },
  { name: "PostgreSQL", category: "Database", level: 85, icon: "Postgres" },
  { name: "MongoDB", category: "Database", level: 80, icon: "Mongo" },
  { name: "Docker", category: "DevOps", level: 75, icon: "Docker" },
  { name: "Git", category: "Tools", level: 92, icon: "Git" },
];

export const EXPERIENCES = [
  {
    company: "Bluestock Fintech",
    role: "Software Development Intern",
    period: "April 2025 - Present",
    description: "Developing a full-stack IPO Web Application with real-time tracking.",
    achievements: [
      "Built robust Django REST APIs with PostgreSQL integration",
      "Designed interactive React frontend for IPO analysis",
      "Managed application lifecycle from development to deployment"
    ],
  },
  {
    company: "GrowthLink",
    role: "Web Development Intern",
    period: "March 2025 - April 2025",
    description: "Focused on developing highly responsive web applications and optimization.",
    achievements: [
      "Increased page load speed by 18% through frontend optimization",
      "Resolved complex cross-browser compatibility issues",
      "Collaborated on modern UI/UX implementation"
    ],
  },
  {
    company: "Freelance Tech Content Creator",
    role: "Tech Writer & Developer",
    period: "Dec 2023 - April 2024",
    description: "Authored technical articles and tutorials for various platforms.",
    achievements: [
      "Generated a 20% increase in blog traffic through SEO-driven content",
      "Created comprehensive documentation for multiple open-source projects",
      "Mastered clear communication of complex technical concepts"
    ],
  },
];

export const PROJECTS = [
  {
    title: "HPTU AI Assistant",
    description: "AI-powered smart helpdesk for HPTU Hamirpur. Features Cohere-powered chatbot, 1000+ PYQs, and voice input.",
    tech: ["Python", "Flask", "Cohere LLM", "Voice APIs"],
    link: "https://burgerbeast-projects.onrender.com",
    github: "https://github.com/burgerbeast7/HPTU-AI-Assistant",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    title: "IPO Web Application",
    description: "Full-stack IPO listing platform for real-time tracking and financial analysis.",
    tech: ["Django", "React", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/burgerbeast7/IPO-Web-App",
    image: "https://images.unsplash.com/photo-1611974714658-051f67f62e8a?w=800&q=80",
  },
  {
    title: "Burger Bot — AI Chatbot",
    description: "Voice and text-enabled AI assistant using DialoGPT and OpenAI for restaurant automation.",
    tech: ["Python", "Flask", "OpenAI", "DialoGPT"],
    link: "#",
    github: "https://github.com/burgerbeast7/Burger-Bot",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?w=800&q=80",
  },
  {
    title: "Cloud Cost Optimization",
    description: "Architecture automation tools reducing AWS infrastructure costs by 15%.",
    tech: ["AWS", "EC2", "S3", "Architecture Automation"],
    link: "#",
    github: "https://github.com/burgerbeast7/Cloud-Cost-Optimization",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
];

export const ACHIEVEMENTS = [
  { title: "AWS Cloud Services", description: "Completed AWS Cloud Services Overview certification.", icon: Cloud },
  { title: "Cloud Security", description: "Certified in Cloud Security Essentials for Executives.", icon: ShieldCheck },
  { title: "Capstone Project", description: "Successfully led the HPTU AI Assistant development.", icon: Zap },
];
