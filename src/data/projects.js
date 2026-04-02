// Customize these with your actual projects and skills!
// CIMANA NTWALI Ivan - Cybersecurity & Developer Portfolio

export const projects = [
  {
    id: 1,
    title: "IvanSec Platform",
    description: "Cybersecurity consulting and security auditing platform with vulnerability scanning tools",
    tech: ["React", "Node.js", "Python", "Docker"],
    color: "#00ffff",
    link: "#",
    github: "#",
    image: null,
    detailed: "A comprehensive security platform offering vulnerability assessments, penetration testing reports, and security monitoring for small to medium businesses. Built with a focus on actionable security insights."
  },
  {
    id: 2,
    title: "CTF Challenge Builder",
    description: "Custom CTF (Capture The Flag) platform for learning and hosting cybersecurity challenges",
    tech: ["TypeScript", "React", "Express", "MongoDB"],
    color: "#ff00ff",
    link: "#",
    github: "#",
    image: null,
    detailed: "An interactive CTF platform allowing educators and CTF organizers to create custom challenges across categories like web exploitation, binary exploitation, reverse engineering, and cryptography."
  },
  {
    id: 3,
    title: "Network Analyzer Tool",
    description: "Python-based network traffic analyzer with real-time packet inspection and anomaly detection",
    tech: ["Python", "Scapy", "TensorFlow", "Flask"],
    color: "#00ff88",
    link: "#",
    github: "#",
    image: null,
    detailed: "A machine learning-powered network analyzer that can detect suspicious traffic patterns, identify potential intrusions, and visualize network activity in real-time."
  },
  {
    id: 4,
    title: "HackTheBox Progress Tracker",
    description: "Personal dashboard to track and analyze HTB/TryHackMe progress and skills development",
    tech: ["React", "Chart.js", "Node.js", "API Integration"],
    color: "#e94560",
    link: "#",
    github: "#",
    image: null,
    detailed: "A tracking tool that integrates with HackTheBox and TryHackMe APIs to visualize learning progress, identify skill gaps, and gamify the cybersecurity learning journey."
  },
  {
    id: 5,
    title: "Secure Code Scanner",
    description: "Static application security testing (SAST) tool for identifying vulnerabilities in source code",
    tech: ["Python", "AST Parsing", "Machine Learning", "Web Interface"],
    color: "#0066ff",
    link: "#",
    github: "#",
    image: null,
    detailed: "An automated code review tool that scans source code for common security vulnerabilities (SQL injection, XSS, buffer overflows) and suggests remediation fixes."
  },
  {
    id: 6,
    title: "Password Cracking Dashboard",
    description: "Educational tool demonstrating password security concepts with hash cracking simulations",
    tech: ["React", "WebAssembly", "Python", "Three.js"],
    color: "#b026ff",
    link: "#",
    github: "#",
    image: null,
    detailed: "An interactive educational dashboard that visualizes how different hashing algorithms work, demonstrates password entropy, and safely demonstrates brute force and dictionary attacks for learning purposes."
  }
]

export const skills = [
  { name: "Penetration Testing", level: 85, color: "#e94560" },
  { name: "Python / Scripting", level: 90, color: "#3178c6" },
  { name: "Network Security", level: 88, color: "#00ff88" },
  { name: "Web Security / OWASP", level: 87, color: "#ff00ff" },
  { name: "Reverse Engineering", level: 75, color: "#00ffff" },
  { name: "Linux / CLI", level: 92, color: "#f0e68c" },
  { name: "Cryptography", level: 78, color: "#ffd700" },
  { name: "DevSecOps", level: 82, color: "#339933" },
  { name: "React / Web Dev", level: 80, color: "#61dafb" },
  { name: "CTF Challenges", level: 88, color: "#b026ff" }
]

export const aboutMe = {
  name: "Ivan Cyimana",
  title: "Ethical Hacker & Security Researcher",
  bio: "I'm a self-taught cybersecurity enthusiast from Rwanda passionate about understanding how systems work and how to protect them. I spend my time on Hack The Box, TryHackMe, and OverTheWire sharpening my offensive security skills. Currently building IvanSec, a cybersecurity brand aimed at making security knowledge accessible and practical. I believe in learning by doing, and I'm on a mission to become a professional ethical hacker while helping others secure their digital assets.",
  specialties: [
    "Penetration Testing & Vulnerability Assessment",
    "CTF Competitions & Exploit Development",
    "Network Security Analysis",
    "Security Auditing & Compliance",
    "Educational Content Creation",
    "Security Tool Development"
  ],
  email: "ivan.sec@proton.me",
  location: "Rwanda",
  social: {
    github: "https://github.com/ivansec",
    linkedin: "https://linkedin.com/in/ivansec",
    twitter: "https://twitter.com/ivansec",
    htb: "https://app.hackthebox.com/profile/",
    tryhackme: "https://tryhackme.com/p/"
  }
}
