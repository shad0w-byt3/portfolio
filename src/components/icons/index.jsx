import { SVGProps } from 'react'

// IvanSec Logo Icon
export function IvanSecLogo({ className = '', size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield base */}
      <path
        d="M50 5 L90 25 L90 50 C90 80 70 95 50 98 C30 95 10 80 10 50 L10 25 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Inner shield */}
      <path
        d="M50 15 L78 30 L78 50 C78 72 62 85 50 87 C38 85 22 72 22 50 L22 30 Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      {/* Terminal prompt symbol */}
      <text x="50" y="58" textAnchor="middle" fontSize="24" fill="currentColor" fontFamily="monospace" fontWeight="bold">
        &gt;
      </text>
      {/* Circuit lines */}
      <path d="M35 35 L65 35 L65 25" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="35" cy="35" r="2" fill="currentColor" />
      <circle cx="65" cy="35" r="2" fill="currentColor" />
      <circle cx="65" cy="25" r="2" fill="currentColor" />
    </svg>
  )
}

// Terminal Icon
export function TerminalIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Terminal window */}
      <rect x="4" y="4" width="56" height="52" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Header bar */}
      <rect x="4" y="4" width="56" height="12" rx="4" fill="currentColor" fillOpacity="0.2" />
      <rect x="4" y="12" width="56" height="2" fill="currentColor" fillOpacity="0.3" />
      {/* Buttons */}
      <circle cx="12" cy="10" r="2" fill="#FF5F56" />
      <circle cx="22" cy="10" r="2" fill="#FFBD2E" />
      <circle cx="32" cy="10" r="2" fill="#27C93F" />
      {/* Screen content */}
      <rect x="10" y="20" width="20" height="2" fill="currentColor" fillOpacity="0.8" />
      <rect x="10" y="26" width="30" height="2" fill="currentColor" fillOpacity="0.6" />
      <rect x="10" y="32" width="25" height="2" fill="currentColor" fillOpacity="0.6" />
      <rect x="10" y="38" width="28" height="2" fill="currentColor" fillOpacity="0.4" />
      <rect x="10" y="44" width="18" height="2" fill="currentColor" fillOpacity="0.4" />
      {/* Prompt */}
      <text x="10" y="54" fontSize="8" fill="currentColor" fontFamily="monospace">&gt;_</text>
    </svg>
  )
}

// User/About Icon
export function UserIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Silhouette */}
      <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Body outline */}
      <path
        d="M16 42 C16 34 22 28 32 28 C42 28 48 34 48 42"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Security clearance lines */}
      <line x1="20" y1="50" x2="44" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="24" y1="56" x2="40" y2="56" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
      {/* ID badge */}
      <rect x="26" y="34" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}

// Projects/Folder Icon
export function ProjectsIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Folder back */}
      <path
        d="M8 16 L8 50 L56 50 L56 22 L32 22 L32 16 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Folder tab */}
      <path
        d="M32 8 L56 22 L56 16 L32 8 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Security dots */}
      <circle cx="20" cy="35" r="3" fill="currentColor" fillOpacity="0.6" />
      <circle cx="20" cy="26" r="2" fill="currentColor" fillOpacity="0.8" />
      <circle cx="20" cy="18" r="1.5" fill="currentColor" fillOpacity="0.9" />
      {/* Lock icon on folder */}
      <path
        d="M44 38 L44 42 C44 44 46 46 48 46 C50 46 52 44 52 42 L52 38"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect x="42" y="42" width="8" height="4" rx="1" fill="currentColor" fillOpacity="0.5" />
      <circle cx="46" cy="44" r="1" fill="currentColor" />
    </svg>
  )
}

// Contact/Mail Icon
export function ContactIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Envelope */}
      <rect x="6" y="16" width="52" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Envelope flap */}
      <path
        d="M6 16 L32 40 L58 16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Send signal lines */}
      <path
        d="M58 16 L58 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="2 2"
      />
      <path
        d="M58 16 L48 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
      {/* Encryption dots */}
      <circle cx="16" cy="24" r="2" fill="currentColor" fillOpacity="0.5" />
      <circle cx="24" cy="28" r="1.5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="32" cy="30" r="1" fill="currentColor" fillOpacity="0.7" />
      <circle cx="40" cy="28" r="1.5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="48" cy="24" r="2" fill="currentColor" fillOpacity="0.5" />
    </svg>
  )
}

// Skills/Gear Icon
export function SkillsIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer gear */}
      <path
        d="M32 8 L38 14 L46 12 L48 18 L56 20 L52 26 L54 32 L48 32 L48 40 L52 46 L56 40 L48 38 L46 44 L38 42 L32 48 L26 42 L18 44 L16 38 L8 40 L8 32 L14 32 L14 26 L8 20 L16 18 L18 12 L26 14 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Inner circle */}
      <circle cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Code brackets */}
      <text x="28" y="32" fontSize="8" fill="currentColor" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
      {/* Scan line */}
      <line x1="8" y1="48" x2="56" y2="48" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
    </svg>
  )
}

// Power/Reboot Icon
export function PowerIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle outline */}
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="3" fill="none" />
      {/* Top connector */}
      <line x1="32" y1="8" x2="32" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Power symbol */}
      <line x1="32" y1="36" x2="32" y2="48" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="36" x2="26" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="36" x2="38" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Close/X Icon
export function CloseIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="16" y1="16" x2="48" y2="48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="48" y1="16" x2="16" y2="48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

// Minimize Icon
export function MinimizeIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="16" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

// Document/File Icon (for projects)
export function DocumentIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 8 L56 8 L56 48 L40 48 L40 56 L24 56 L24 48 L8 48 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Folded corner */}
      <path
        d="M56 8 L56 24 L40 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Content lines */}
      <line x1="16" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="28" x2="36" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="44" x2="34" y2="44" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

// Network/Wifi Icon
export function NetworkIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Radar waves */}
      <path d="M32 48 L12 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 48 L18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 48 L32 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 48 L46 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 48 L52 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="32" cy="48" r="3" fill="currentColor" />
    </svg>
  )
}

// Shield/Security Icon
export function ShieldIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32 4 L56 14 L56 30 C56 44 44 58 32 62 C20 58 8 44 8 30 L8 14 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M32 12 L48 20 L48 30 C48 42 40 52 32 54 C24 52 16 42 16 30 L16 20 Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M24 32 L28 36 L36 28"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Bug/CVEs Icon (for security)
export function BugIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Bug legs */}
      <path d="M16 36 L12 32 L16 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M48 36 L52 32 L48 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 46 L10 42 L14 38" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M54 46 L58 42 L54 38" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Antennae */}
      <line x1="32" y1="12" x2="28" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="12" x2="36" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Eye */}
      <circle cx="32" cy="26" r="2" fill="currentColor" />
      {/* Vulnerability exclamation */}
      <text x="44" y="54" fontSize="16" fill="currentColor" fontFamily="monospace" fontWeight="bold">!</text>
    </svg>
  )
}

// Gallery/Photos Icon
export function GalleryIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Photo stack */}
      <rect x="8" y="12" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(-5 28 28)" />
      <rect x="16" y="8" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="24" y="4" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(5 44 20)" />
      {/* Play button overlay */}
      <circle cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M30 24 L38 28 L30 32 Z" fill="currentColor" />
    </svg>
  )
}

// More Apps/Grid Icon
export function MoreAppsIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 3x3 grid of app squares */}
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="24" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="44" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="4" y="24" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="24" y="24" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="44" y="24" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="4" y="44" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="24" y="44" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="44" y="44" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3" />
      {/* Plus on last square */}
      <path d="M52 52 L60 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 48 L56 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// GitHub Icon (octocat inspired)
export function GitHubIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cat face outline */}
      <circle cx="32" cy="30" r="16" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Ears */}
      <path d="M20 22 L16 12 L24 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <path d="M44 22 L48 12 L40 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      {/* Eyes */}
      <circle cx="26" cy="28" r="2" fill="currentColor" />
      <circle cx="38" cy="28" r="2" fill="currentColor" />
      {/* Whiskers */}
      <line x1="16" y1="30" x2="24" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="34" x2="24" y2="34" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="30" x2="48" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="34" x2="48" y2="34" stroke="currentColor" strokeWidth="1.5" />
      {/* Mouth */}
      <path d="M30 36 L34 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Terminal cursor on cheek */}
      <path d="M44 38 L44 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="44" x2="46" y2="44" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

// Hack The Box Icon (target/bullseye)
export function HTBIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Concentric target circles */}
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      {/* Crosshair lines */}
      <line x1="8" y1="32" x2="24" y2="32" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="8" x2="32" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="40" x2="32" y2="56" stroke="currentColor" strokeWidth="2" />
      {/* Corner brackets */}
      <path d="M16 16 L16 22 M16 16 L22 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M48 16 L48 22 M48 16 L42 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 48 L16 42 M16 48 L22 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M48 48 L48 42 M48 48 L42 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

// TryHackMe Icon (door/room)
export function TryHackMeIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Door frame */}
      <rect x="18" y="8" width="28" height="48" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Door panel */}
      <rect x="22" y="12" width="24" height="40" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      {/* Lock panel */}
      <rect x="34" y="32" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
      {/* Keyhole */}
      <circle cx="37" cy="35" r="1" fill="currentColor" />
      {/* ID card on door */}
      <rect x="46" y="24" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <line x1="50" y1="28" x2="56" y2="28" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="31" x2="55" y2="31" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="34" x2="54" y2="34" stroke="currentColor" strokeWidth="1.5" />
      {/* Handle */}
      <circle cx="30" cy="36" r="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.4" />
    </svg>
  )
}

// LinkedIn Icon (briefcase with network nodes)
export function LinkedInIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Briefcase body */}
      <rect x="18" y="22" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Briefcase lid */}
      <path d="M18 22 L32 14 L46 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      {/* Handle */}
      <path d="M22 18 C22 14 28 10 32 10 C36 10 42 14 42 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Network nodes */}
      <circle cx="24" cy="34" r="2" fill="currentColor" />
      <circle cx="32" cy="34" r="2" fill="currentColor" />
      <circle cx="40" cy="34" r="2" fill="currentColor" />
      <line x1="24" y1="34" x2="32" y2="34" stroke="currentColor" strokeWidth="1.5" />
      <line x1="32" y1="34" x2="40" y2="34" stroke="currentColor" strokeWidth="1.5" />
      {/* Connection lines to body */}
      <line x1="24" y1="30" x2="24" y2="37" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1"/>
      <line x1="32" y1="30" x2="32" y2="37" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1"/>
      <line x1="40" y1="30" x2="40" y2="37" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1"/>
    </svg>
  )
}

// Email/Contact Icon (enhanced envelope)
export function EmailIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Envelope body */}
      <rect x="8" y="16" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Flap */}
      <path d="M8 16 L32 38 L56 16" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Lock icon on envelope */}
      <rect x="26" y="32" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
      <circle cx="32" cy="36" r="1.5" fill="currentColor" />
      {/* Data transmission dots */}
      <circle cx="14" cy="24" r="1.5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="22" cy="20" r="1" fill="currentColor" fillOpacity="0.6" />
      <circle cx="42" cy="20" r="1" fill="currentColor" fillOpacity="0.6" />
      <circle cx="50" cy="24" r="1.5" fill="currentColor" fillOpacity="0.5" />
      {/* Signal waves */}
      <path d="M58 28 L58 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 1" />
      <path d="M58 28 L52 24" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />
      <path d="M58 28 L52 32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />
    </svg>
  )
}

// Camera/Photo Icon
export function CameraIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Camera body */}
      <rect x="12" y="18" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Lens */}
      <circle cx="24" cy="32" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="24" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      {/* Viewfinder */}
      <rect x="38" y="22" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Flash */}
      <rect x="56" y="26" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.4" />
      {/* Security sensor dots */}
      <circle cx="20" cy="42" r="1.5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="28" cy="42" r="1.5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="36" cy="42" r="1.5" fill="currentColor" fillOpacity="0.6" />
      <line x1="20" y1="42" x2="28" y2="42" stroke="currentColor" strokeWidth="1" />
      <line x1="28" y1="42" x2="36" y2="42" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

// Certifications Icon (trophy with shield)
export function CertificationsIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Trophy cup */}
      <path d="M22 20 L20 24 L20 34 C20 42 24 48 32 48 C40 48 44 42 44 34 L44 24 L42 20 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Trophy handles */}
      <path d="M20 26 L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 26 L52 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Base */}
      <rect x="24" y="48" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3" />
      <rect x="20" y="52" width="24" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.4" />
      {/* Shield security badge on cup */}
      <path d="M32 28 L36 32 L32 36 L28 32 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.4" />
      <circle cx="32" cy="32" r="1" fill="currentColor" />
      {/* Ribbon */}
      <path d="M28 36 L32 44 L36 36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    </svg>
  )
}

// Work/Experience Icon (briefcase with clock)
export function WorkIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Briefcase */}
      <rect x="14" y="22" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Lid */}
      <path d="M14 22 L32 12 L50 22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
      {/* Handle */}
      <path d="M22 18 C22 14 28 10 32 10 C36 10 42 14 42 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Clock inside briefcase window */}
      <circle cx="32" cy="34" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="32" y1="34" x2="32" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="34" x2="36" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="34" r="0.5" fill="currentColor" />
      {/* Bottom detail line */}
      <line x1="20" y1="50" x2="44" y2="50" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

// Education Icon (graduation cap)
export function EducationIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cap top */}
      <path d="M8 24 L32 8 L56 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
      {/* Cap square bottom */}
      <rect x="14" y="24" width="36" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3" />
      {/* Tassel string */}
      <line x1="32" y1="28" x2="38" y2="50" stroke="currentColor" strokeWidth="2" />
      {/* Tassel bundle */}
      <rect x="36" y="48" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.5" />
      {/* Tassel strands */}
      <line x1="36" y1="52" x2="34" y2="58" stroke="currentColor" strokeWidth="1.5" />
      <line x1="38" y1="52" x2="38" y2="58" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="52" x2="36" y2="58" stroke="currentColor" strokeWidth="1.5" />
      {/* Math equation on cap */}
      <text x="32" y="20" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace" fontWeight="bold">π</text>
      <circle cx="28" cy="18" r="1" fill="currentColor" />
      <circle cx="36" cy="18" r="1" fill="currentColor" />
      <line x1="29" y1="18" x2="35" y2="18" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

// Blog Icon (document with pen and waveform)
export function BlogIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Document */}
      <path d="M12 8 L56 8 L56 56 L40 56 L40 24 L24 24 L24 56 L12 56 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Folded corner */}
      <path d="M56 8 L56 20 L44 8" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Title lines */}
      <line x1="20" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="22" x2="40" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="28" x2="36" y2="28" stroke="currentColor" strokeWidth="1.5" />
      {/* Pen */}
      <path d="M50 12 L54 8 L58 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
      <line x1="46" y1="16" x2="62" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Sound wave on side */}
      <path d="M58 24 L58 32" stroke="currentColor" strokeWidth="1.5" />
      <path d="M58 24 L54 28" stroke="currentColor" strokeWidth="1" />
      <path d="M58 24 L62 28" stroke="currentColor" strokeWidth="1" />
      <path d="M58 32 L54 28" stroke="currentColor" strokeWidth="1" />
      <path d="M58 32 L62 28" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

// Tools Icon (wrench with circuit)
export function ToolsIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Wrench head */}
      <rect x="20" y="16" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Wrench handle */}
      <rect x="30" y="32" width="4" height="24" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Adjustable jaw */}
      <path d="M24 18 L24 30" stroke="currentColor" strokeWidth="2" />
      <path d="M40 18 L40 30" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="30" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="30" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Circuit line on handle */}
      <line x1="30" y1="40" x2="30" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="30" cy="44" r="1" fill="currentColor" />
      <circle cx="30" cy="48" r="1" fill="currentColor" />
      <circle cx="30" cy="52" r="1" fill="currentColor" />
    </svg>
  )
}

// Achievements Icon (star with shield and check)
export function AchievementsIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Star rays */}
      <path d="M32 8 L34 22 L48 22 L36 30 L40 44 L32 36 L24 44 L28 30 L16 22 L30 22 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
      {/* Shield background */}
      <path d="M32 16 L46 22 L46 34 C46 42 40 50 32 54 C24 50 18 42 18 34 L18 22 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
      {/* Checkmark */}
      <path d="M26 34 L30 38 L38 28" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Binary award ribbon */}
      <path d="M12 44 L12 52" stroke="currentColor" strokeWidth="1.5" />
      <path d="M52 44 L52 52" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 52 L14 56" stroke="currentColor" strokeWidth="1" />
      <text x="14" y="66" fontSize="8" fill="currentColor" fontFamily="monospace" fontWeight="bold">1</text>
      <text x="52" y="66" fontSize="8" fill="currentColor" fontFamily="monospace" fontWeight="bold">0</text>
    </svg>
  )
}

// YouTube Icon (play button with screen)
export function YouTubeIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Screen/TV body */}
      <rect x="10" y="14" width="44" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Screen inner */}
      <rect x="14" y="18" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      {/* Play button */}
      <path d="M26 28 L40 32 L26 36 Z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
      {/* Antenna */}
      <line x1="20" y1="14" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="44" y1="14" x2="48" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Signal bars */}
      <rect x="46" y="8" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
      <rect x="50" y="10" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1" />
      <rect x="54" y="12" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

// Instagram Icon (camera with rounded square)
export function InstagramIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rounded square outer */}
      <rect x="12" y="12" width="40" height="40" rx="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Inner square */}
      <rect x="20" y="20" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Camera lens circle */}
      <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
      {/* Flash */}
      <circle cx="44" cy="20" r="2" fill="currentColor" />
      {/* Grid lines */}
      <line x1="32" y1="22" x2="32" y2="60" stroke="currentColor" strokeWidth="1.5" />
      <line x1="22" y1="32" x2="42" y2="32" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
