import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TerminalIcon, UserIcon, ProjectsIcon, ContactIcon, SkillsIcon,
  GalleryIcon, MoreAppsIcon, CloseIcon, MinimizeIcon, IvanSecLogo,
  GitHubIcon, HTBIcon, TryHackMeIcon, LinkedInIcon, EmailIcon,
  CameraIcon, CertificationsIcon, WorkIcon, EducationIcon, BlogIcon, ToolsIcon, AchievementsIcon,
  YouTubeIcon, InstagramIcon
} from './icons'

export default function OSLayout() {
  const [bootComplete, setBootComplete] = useState(false)
  const [openApps, setOpenApps] = useState([])
  const [activeApp, setActiveApp] = useState(null)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [accentColor, setAccentColor] = useState('#00FF9C') // default neon green

  // Load saved window positions and accent color from localStorage
  useEffect(() => {
    const savedApps = localStorage.getItem('ivansec-os-apps')
    if (savedApps) {
      try {
        setOpenApps(JSON.parse(savedApps))
      } catch (e) {
        console.warn('Failed to parse saved window positions')
      }
    }
    const savedColor = localStorage.getItem('ivansec-accent-color')
    if (savedColor) {
      setAccentColor(savedColor)
      document.documentElement.style.setProperty('--accent-color', savedColor)
    }
  }, [])

  // Save window positions to localStorage whenever they change
  useEffect(() => {
    if (openApps.length > 0) {
      localStorage.setItem('ivansec-os-apps', JSON.stringify(openApps))
    }
  }, [openApps])

  // Update CSS variable when accent color changes
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor)
    // Convert hex to RGB for rgba() usage
    const r = parseInt(accentColor.slice(1, 3), 16)
    const g = parseInt(accentColor.slice(3, 5), 16)
    const b = parseInt(accentColor.slice(5, 7), 16)
    document.documentElement.style.setProperty('--accent-color-rgb', `${r}, ${g}, ${b}`)
    localStorage.setItem('ivansec-accent-color', accentColor)
  }, [accentColor])

  useEffect(() => {
    const bootTimer = setTimeout(() => setBootComplete(true), 3000)
    return () => clearTimeout(bootTimer)
  }, [])

  const openApp = (appId) => {
    if (!openApps.find(app => app.id === appId)) {
      // Responsive initial positions: center on mobile, offset on desktop
      const isMobile = window.innerWidth < 640
      const baseX = isMobile ? 5 : 120
      const baseY = isMobile ? 5 : 80
      const offsetX = (openApps.length % 4) * 40
      const offsetY = (openApps.length % 3) * 40

      setOpenApps(prev => [
        ...prev,
        {
          id: appId,
          title: appId,
          x: baseX + offsetX,
          y: baseY + offsetY,
          z: openApps.length
        }
      ])
    }
    setActiveApp(appId)
    if (appId === 'Terminal') setTerminalOpen(true)
  }

  const closeApp = (appId) => {
    setOpenApps(prev => prev.filter(app => app.id !== appId))
    if (activeApp === appId) {
      setActiveApp(null)
      if (appId === 'Terminal') setTerminalOpen(false)
    }
  }

  const minimizeApp = (appId) => {
    if (activeApp === appId) {
      setActiveApp(null)
    }
  }

  // Boot sequence
  if (!bootComplete) {
    return (
      <div className="fixed inset-0 bg-brand-bg text-brand-primary font-mono overflow-hidden">
        <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end">
          <div className="space-y-2 text-xs sm:text-sm">
            <BootLine text="IvanSec OS kernel" ok />
            <BootLine text="Detecting hardware components..." ok />
            <BootLine text="Initializing security modules..." ok />
            <BootLine text="Mounting encrypted filesystems..." ok />
            <BootLine text="Starting intrusion detection system..." ok />
            <BootLine text="Loading penetration testing tools..." ok />
            <BootLine text="Establishing secure connection..." ok />
            <BootLine text="Launching IvanSec OS v2.0.77..." ok highlight />
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-4 bg-brand-primary animate-pulse" />
              <span className="text-brand-primary opacity-80">Ready.</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-brand-bg text-brand-text overflow-hidden select-none">
      {/* Desktop Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Desktop Icons - Responsive Grid Layout */}
      <div className="absolute top-10 sm:top-16 left-2 sm:left-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-4 sm:gap-y-6">
        <DesktopIcon
          icon={<TerminalIcon size={32} />}
          label="Terminal"
          onClick={() => setTerminalOpen(true)}
          active={terminalOpen}
        />
        <DesktopIcon
          icon={<UserIcon size={32} />}
          label="About"
          onClick={() => openApp('About')}
          active={openApps.some(a => a.id === 'About')}
        />
        <DesktopIcon
          icon={<ProjectsIcon size={32} />}
          label="Projects"
          onClick={() => openApp('Projects')}
          active={openApps.some(a => a.id === 'Projects')}
        />
        <DesktopIcon
          icon={<ContactIcon size={32} />}
          label="Contact"
          onClick={() => openApp('Contact')}
          active={openApps.some(a => a.id === 'Contact')}
        />
        <DesktopIcon
          icon={<SkillsIcon size={32} />}
          label="Skills"
          onClick={() => openApp('Skills')}
          active={openApps.some(a => a.id === 'Skills')}
        />
        <DesktopIcon
          icon={<GalleryIcon size={32} />}
          label="Gallery"
          onClick={() => openApp('Gallery')}
          active={openApps.some(a => a.id === 'Gallery')}
        />
        <DesktopIcon
          icon={<MoreAppsIcon size={32} />}
          label="More Apps"
          onClick={() => openApp('MoreApps')}
          active={openApps.some(a => a.id === 'MoreApps')}
        />
      </div>

      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-8 sm:h-9 bg-brand-card/90 backdrop-blur border-b border-brand-primary/10 flex items-center justify-between px-2 sm:px-3 z-50">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 sm:gap-2">
            <IvanSecLogo size={16} className="sm:size-5" />
            <span className="text-brand-primary font-bold text-xs sm:text-sm">IvanSec OS</span>
          </div>
          <span className="text-brand-muted text-[10px] sm:text-xs hidden sm:inline">v2.0.77</span>
        </div>

        {/* Accent Color Picker - visible on all screens */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[10px] text-brand-muted hidden sm:inline">THEME:</span>
          {[
            { color: '#00FF9C', name: 'Neon Green' },
            { color: '#00F3FF', name: 'Cyber Cyan' },
            { color: '#FF00FF', name: 'Neon Magenta' },
            { color: '#FFB800', name: 'Amber' },
            { color: '#2F81F7', name: 'Electric Blue' }
          ].map(({ color, name }) => (
            <button
              key={color}
              onClick={() => setAccentColor(color)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-transform hover:scale-125 ${accentColor === color ? 'ring-2 ring-white/50' : ''}`}
              style={{ backgroundColor: color }}
              title={name}
              aria-label={`Change accent color to ${name}`}
            />
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-4 text-xs font-mono">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
            CPU: <span className="text-brand-text">12%</span>
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 h-2 bg-brand-secondary rounded-full" />
            MEM: <span className="text-brand-text">4.2GB</span>
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            NET: <span className="text-brand-text">●</span>
          </span>
          <span className="text-brand-muted">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className="sm:hidden text-brand-muted text-[10px] font-mono">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* Windows */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {terminalOpen && (
            <Window
              app={{ id: 'Terminal', title: 'Terminal — IvanSec', x: 60, y: 60, z: 0 }}
              isActive={activeApp === 'Terminal'}
              onActivate={() => setActiveApp('Terminal')}
              onClose={() => { setTerminalOpen(false); setActiveApp(null) }}
              onMinimize={() => { setTerminalOpen(false); setActiveApp(null) }}
            >
              <TerminalWindow onCommand={(cmd) => handleCommand(cmd, openApp)} />
            </Window>
          )}
          {openApps.map((app, index) => (
            <Window
              key={app.id}
              app={app}
              isActive={activeApp === app.id}
              onActivate={() => setActiveApp(app.id)}
              onClose={() => closeApp(app.id)}
              onMinimize={() => minimizeApp(app.id)}
              zIndex={app.z}
            >
              {app.id === 'About' && <AboutContent />}
              {app.id === 'Projects' && <ProjectsContent />}
              {app.id === 'Contact' && <ContactContent />}
              {app.id === 'Skills' && <SkillsContent />}
              {app.id === 'Gallery' && <GalleryContent />}
              {app.id === 'MoreApps' && <MoreAppsContent />}
            </Window>
          ))}
        </AnimatePresence>
      </div>

      {/* Desktop Content */}
      {!activeApp && openApps.length === 0 && !terminalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <IvanSecLogo size={60} className="text-brand-primary sm:size-20" />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-5xl font-mono font-bold text-brand-primary drop-shadow-[0_0_30px_rgba(0,255,156,0.6)]">
                IvanSec OS
              </h1>
              <p className="text-brand-muted text-sm sm:text-lg mt-2 tracking-wider">v2.0.77</p>
            </div>
          </div>
          <p className="text-brand-text/70 text-xs sm:text-sm">Select an application from the dock to begin</p>
        </motion.div>
      )}

      {/* Dock */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 bg-brand-card/90 backdrop-blur-xl border border-brand-primary/20 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_0_30px_rgba(0,255,156,0.1)] pointer-events-auto">
        <DockButton icon={<TerminalIcon size={24} />} label="Terminal" onClick={() => setTerminalOpen(!terminalOpen)} active={terminalOpen} />
        <DockButton icon={<ProjectsIcon size={24} />} label="Projects" onClick={() => openApp('Projects')} active={openApps.some(a => a.id === 'Projects')} />
        <DockButton icon={<UserIcon size={24} />} label="About" onClick={() => openApp('About')} active={openApps.some(a => a.id === 'About')} />
        <DockButton icon={<SkillsIcon size={24} />} label="Skills" onClick={() => openApp('Skills')} active={openApps.some(a => a.id === 'Skills')} />
        <DockButton icon={<ContactIcon size={24} />} label="Contact" onClick={() => openApp('Contact')} active={openApps.some(a => a.id === 'Contact')} />
        <DockButton icon={<GalleryIcon size={24} />} label="Gallery" onClick={() => openApp('Gallery')} active={openApps.some(a => a.id === 'Gallery')} />
        <DockButton icon={<MoreAppsIcon size={24} />} label="More Apps" onClick={() => openApp('MoreApps')} active={openApps.some(a => a.id === 'MoreApps')} />
      </div>
    </div>
  )
}

function BootLine({ text, ok, highlight }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`text-xs ${ok ? 'text-brand-primary' : 'text-brand-muted'}`}>
        [{ok ? 'OK' : '...'}]
      </span>
      <span className={`text-sm ${highlight ? 'text-brand-primary font-bold' : 'text-brand-muted'}`}>
        {text}
      </span>
    </div>
  )
}

function DesktopIcon({ icon, label, onClick, active }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      onClick={onClick}
      className={`flex flex-col items-center gap-1 sm:gap-2 w-14 sm:w-16 p-1 sm:p-2 rounded transition-colors ${
        active ? 'bg-brand-primary/10 border border-brand-primary/40' : 'hover:bg-brand-card/60'
      }`}
    >
      <div className={`${active ? 'text-brand-primary drop-shadow-[0_0_8px_rgba(0,255,156,0.8)]' : 'text-brand-text'} scale-90 sm:scale-100`}>
        {icon}
      </div>
      <span className={`text-[8px] sm:text-[10px] text-center font-mono leading-tight ${active ? 'text-brand-primary' : 'text-brand-muted'}`}>
        {label}
      </span>
    </motion.button>
  )
}

function DockButton({ icon, label, onClick, active }) {
  return (
    <motion.button
      whileHover={{ scale: 1.15, y: -3 }}
      onClick={onClick}
      className={`w-10 h-10 sm:w-12 sm:h-12 flex flex-col items-center justify-center rounded-xl transition-all ${
        active
          ? 'bg-brand-primary/15 border border-brand-primary text-brand-primary scale-105'
          : 'text-brand-muted hover:bg-brand-card hover:text-brand-text'
      }`}
      title={label}
    >
      <div className="scale-90 sm:scale-100">{icon}</div>
      <span className="text-[8px] sm:text-[9px] mt-0.5 sm:mt-1 font-mono hidden sm:block">{label}</span>
    </motion.button>
  )
}

function Window({ app, isActive, onActivate, onClose, onMinimize, children, zIndex = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: app.x, y: app.y, z: zIndex }}
      animate={{ opacity: isActive ? 1 : 0.95, scale: 1, z: isActive ? 100 : zIndex }}
      exit={{ opacity: 0, scale: 0.95 }}
      drag
      dragMomentum={false}
      onMouseDown={() => onActivate()}
      className={`absolute w-[90vw] sm:w-[520px] h-[60vh] sm:h-[420px] bg-brand-card border ${
        isActive
          ? 'border-brand-primary shadow-[0_0_40px_rgba(0,255,156,0.3)] z-30'
          : 'border-brand-muted/30 shadow-lg z-10'
      } rounded-xl overflow-hidden flex flex-col`}
      style={{ left: 0, top: 0 }}
    >
      {/* Title Bar */}
      <div
        className={`h-8 flex items-center justify-between px-3 ${
          isActive
            ? 'bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border-b border-brand-primary/20'
            : 'bg-brand-card/50 border-b border-brand-muted/20'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors inline-flex items-center justify-center text-white text-xs font-bold" onMouseDown={(e) => e.stopPropagation()} onClick={onClose} title="Close">×</span>
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer transition-colors inline-flex items-center justify-center text-white text-xs font-bold" onMouseDown={(e) => e.stopPropagation()} onClick={onMinimize} title="Minimize">−</span>
          </div>
          <span className="ml-2 text-xs font-mono text-brand-muted">{app.title}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-brand-bg/50 p-4" onMouseDown={(e) => e.stopPropagation()}>
        {children}
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-brand-card/80 border-t border-brand-muted/20 flex items-center px-3 text-[10px] font-mono text-brand-muted">
        <span>{app.id}</span>
        <span className="ml-auto">0x{Math.floor(Math.random() * 999999).toString(16).toUpperCase()}</span>
      </div>
    </motion.div>
  )
}

// Terminal Window Component
function TerminalWindow({ onCommand }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState(['IvanSec OS Terminal v2.0.77', 'Type "help" for available commands', ''])
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim()
    const responses = onCommand(cmd)

    // Handle clear command
    if (responses.includes('CLEAR')) {
      setHistory([''])
      inputRef.current?.focus()
      return
    }

    setHistory(prev => [...prev, `$ ${cmd}`, ...responses])
    setInput('')
    inputRef.current?.focus()
  }

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history])

  return (
    <div className="h-full flex flex-col bg-brand-bg" onClick={() => inputRef.current?.focus()}>
      {/* Terminal Header */}
      <div className="bg-brand-card/80 border-b border-brand-primary/20 px-3 py-2">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} />
          <span className="text-xs font-mono text-brand-primary">terminal.ivansec:~#</span>
        </div>
      </div>

      {/* Output Area */}
      <div ref={outputRef} className="flex-1 overflow-y-auto p-3 font-mono text-sm space-y-2">
        {history.map((line, i) => (
          <div key={i} className={`${line.startsWith('$') ? 'text-brand-primary' : 'text-brand-text'}`}>
            {line}
          </div>
        ))}
        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-brand-primary mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-brand-text font-mono text-sm"
            placeholder="Type a command..."
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}

// Terminal command handler
function handleCommand(cmd, openApp) {
  const command = cmd.toLowerCase().trim()
  switch (command) {
    case 'help':
      return ['Available commands:', '  about     - Display user information', '  skills    - Show technical skills', '  projects  - List security projects', '  contact   - Show contact information', '  gallery   - View photo gallery', '  apps      - More applications', '  clear     - Clear terminal', '']
    case 'about':
      return ['Name: Ivan Cyimana', 'Title: Ethical Hacker & Security Researcher', 'Location: Rwanda', 'Organization: IvanSec', '']
    case 'skills':
      return ['Penetration Testing: 85%', 'Python/Scripting: 90%', 'Network Security: 88%', 'Web Security/OWASP: 87%', 'Reverse Engineering: 75%', 'Linux/CLI: 92%', 'Cryptography: 78%', '']
    case 'projects':
      return openApp('Projects'), ['Opening Projects window...', '']
    case 'contact':
      return openApp('Contact'), ['Opening Contact window...', '']
    case 'gallery':
      return openApp('Gallery'), ['Opening Gallery window...', '']
    case 'apps':
    case 'more':
      return openApp('MoreApps'), ['Opening More Apps window...', '']
    case 'clear':
    case 'cls':
      return ['CLEAR']
    case 'reboot':
      setTimeout(() => window.location.reload(), 1000)
      return ['Rebooting system...', '']
    default:
      if (command) return [`Command not found: ${cmd}. Type "help" for commands.`, '']
      return []
  }
}

// Content Components
function AboutContent() {
  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-lg font-bold text-brand-primary mb-3 flex items-center gap-2">
        <UserIcon size={18} />
        User Information
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <InfoField label="USERNAME" value="ivansec" />
        <InfoField label="ROLE" value="Ethical Hacker" highlight />
        <InfoField label="LOCATION" value="Rwanda" />
        <InfoField label="ORGANIZATION" value="IvanSec" highlight />
        <InfoField label="SPECIALTY" value="Offensive Security" />
        <InfoField label="STATUS" value="🟢 Available" />
      </div>
      <div className="p-3 bg-brand-bg border border-brand-muted/20 rounded text-xs">
        <p className="text-brand-muted mb-1">BIO</p>
        <p className="text-brand-text text-sm leading-relaxed">
          Self-taught cybersecurity researcher focused on penetration testing, exploit development, and security tool creation.
          Active participant in Hack The Box, TryHackMe, and pwn.college. Building IvanSec to democratize security knowledge.
        </p>
      </div>
    </div>
  )
}

function ProjectsContent() {
  const projects = [
    { title: "IvanSec Platform", desc: "Comprehensive security auditing & vulnerability scanning platform for enterprises." },
    { title: "CTF Challenge Builder", desc: "Framework for creating custom CTF challenges across multiple categories." },
    { title: "Network Analyzer", desc: "ML-powered real-time traffic analysis and intrusion detection system." },
    { title: "HTB Progress Tracker", desc: "Dashboard to track learning progress across HTB, TryHackMe, and pwn.college." },
    { title: "Secure Code Scanner", desc: "Static Application Security Testing (SAST) tool for automated vulnerability detection." },
    { title: "Password Cracking Dashboard", desc: "Educational tool demonstrating password security and hash cracking concepts." }
  ]

  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-lg font-bold text-brand-primary mb-3 flex items-center gap-2">
        <ProjectsIcon size={18} />
        Project Repository
      </h2>
      <div className="space-y-2">
        {projects.map((proj, i) => (
          <div key={i} className="p-3 bg-brand-bg border border-brand-muted/20 rounded hover:border-brand-primary/40 transition-colors cursor-pointer group">
            <h3 className="text-brand-secondary font-bold text-sm group-hover:text-brand-primary">{proj.title}</h3>
            <p className="text-brand-muted text-xs mt-1">{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactContent() {
  const contacts = [
    { label: 'EMAIL', value: 'hero.cn1@gmail.com', icon: <EmailIcon size={20} />, href: 'mailto:hero.cn1@gmail.com' },
    { label: 'GITHUB', value: 'shad0w-byt3', icon: <GitHubIcon size={20} />, href: 'https://github.com/shad0w-byt3' },
    { label: 'LINKEDIN', value: 'Ivan Ntwali Cyimana', icon: <LinkedInIcon size={20} />, href: 'https://www.linkedin.com/in/ivan-ntwali-cyimana/' },
    { label: 'TRYHACKME', value: '@BATMANc0d3', icon: <TryHackMeIcon size={20} />, href: 'https://tryhackme.com/p/BATMANc0d3' },
    { label: 'YOUTUBE', value: '@1vancc', icon: <YouTubeIcon size={20} />, href: 'https://www.youtube.com/@1vancc' },
    { label: 'INSTAGRAM', value: '@black_discipl3', icon: <InstagramIcon size={20} />, href: 'https://www.instagram.com/black_discipl3/' },
    { label: 'HACK THE BOX', value: '@ivansec', icon: <HTBIcon size={20} />, href: 'https://www.hackthebox.com/home/users/profile/ivansec' }
  ]

  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-lg font-bold text-brand-primary mb-3 flex items-center gap-2">
        <ContactIcon size={18} />
        Contact Information
      </h2>
      <div className="space-y-2">
        {contacts.map((contact, i) => (
          <a
            key={i}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-brand-bg border border-brand-muted/20 rounded hover:border-brand-primary/40 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="text-brand-primary">{contact.icon}</div>
                <div>
                  <p className="text-[10px] text-brand-muted font-mono">{contact.label}</p>
                  <p className="text-brand-secondary text-sm group-hover:text-brand-primary">{contact.value}</p>
                </div>
              </div>
              <span className="text-brand-muted/50 text-xs">→</span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-4 p-3 bg-brand-primary/10 border border-brand-primary/30 rounded">
        <p className="text-brand-primary text-xs font-mono">💡 Open for security consulting, freelance work, and collaboration opportunities.</p>
      </div>
    </div>
  )
}

function SkillsContent() {
  const skills = [
    { name: "Penetration Testing", level: 85 },
    { name: "Python / Scripting", level: 90 },
    { name: "Network Security", level: 88 },
    { name: "Web Security / OWASP", level: 87 },
    { name: "Reverse Engineering", level: 75 },
    { name: "Linux / CLI", level: 92 },
    { name: "Cryptography", level: 78 },
    { name: "DevSecOps", level: 82 },
    { name: "React / Web Dev", level: 80 },
    { name: "CTF Competitions", level: 88 }
  ]

  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-lg font-bold text-brand-primary mb-3 flex items-center gap-2">
        <SkillsIcon size={18} />
        Skills Database
      </h2>
      <div className="space-y-3">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-brand-text">{skill.name}</span>
              <span className="text-brand-secondary font-mono">{skill.level}%</span>
            </div>
            <div className="h-2 bg-brand-bg border border-brand-muted/20 rounded overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InfoField({ label, value, highlight }) {
  return (
    <div>
      <p className="text-[10px] text-brand-muted mb-0.5 font-mono">{label}</p>
      <p className={`text-sm ${highlight ? 'text-brand-primary' : 'text-brand-text'}`}>{value}</p>
    </div>
  )
}

function ContactField({ label, value, icon }) {
  return (
    <div className="p-3 bg-brand-bg border border-brand-muted/20 rounded flex items-center justify-between group hover:border-brand-primary/40 transition-colors cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="text-brand-primary">{icon}</div>
        <div>
          <p className="text-[10px] text-brand-muted font-mono">{label}</p>
          <p className="text-brand-secondary text-sm group-hover:text-brand-primary">{value}</p>
        </div>
      </div>
      <span className="text-brand-muted/50 text-xs">→</span>
    </div>
  )
}

function GalleryContent() {
  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-lg font-bold text-brand-primary mb-3 flex items-center gap-2">
        <GalleryIcon size={18} />
        Photo Gallery
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="aspect-square bg-brand-bg border border-brand-muted/20 rounded flex flex-col items-center justify-center group hover:border-brand-primary/40 transition-colors">
            <CameraIcon size={32} className="text-brand-muted group-hover:text-brand-primary transition-colors mb-2" />
            <p className="text-xs text-brand-muted">Photo {i}</p>
          </div>
        ))}
      </div>
      <p className="text-brand-muted text-xs mt-3 text-center italic">
        Upload your photos and moments here
      </p>
    </div>
  )
}

function MoreAppsContent() {
  const appIcons = {
    Certifications: CertificationsIcon,
    Experience: WorkIcon,
    Education: EducationIcon,
    Blog: BlogIcon,
    Tools: ToolsIcon,
    Achievements: AchievementsIcon
  }

  const apps = [
    { name: "Certifications", desc: "View certifications & credentials", icon: CertificationsIcon },
    { name: "Experience", desc: "Work history & projects", icon: WorkIcon },
    { name: "Education", desc: "Academic background", icon: EducationIcon },
    { name: "Blog", desc: "Security articles & writeups", icon: BlogIcon },
    { name: "Tools", desc: "Custom security utilities", icon: ToolsIcon },
    { name: "Achievements", desc: "CTF wins & accomplishments", icon: AchievementsIcon }
  ]

  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-lg font-bold text-brand-primary mb-3 flex items-center gap-2">
        <MoreAppsIcon size={18} />
        More Applications
      </h2>
      <p className="text-brand-muted text-xs mb-3">Click to open (coming soon)</p>
      <div className="grid grid-cols-2 gap-2">
        {apps.map((app, i) => (
          <div key={i} className="p-3 bg-brand-bg border border-brand-muted/20 rounded hover:border-brand-primary/40 transition-colors cursor-pointer flex flex-col items-center text-center">
            <app.icon size={32} className="text-brand-primary mb-2" />
            <p className="text-brand-text text-sm font-bold">{app.name}</p>
            <p className="text-brand-muted text-xs">{app.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
