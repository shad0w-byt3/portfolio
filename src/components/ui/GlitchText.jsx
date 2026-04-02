import { motion } from 'framer-motion'

export default function GlitchText({
  children,
  className = ''
}) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      data-text={children}
      animate={{
        skewX: [0, 2, -2, 0],
        x: [0, -2, 2, 0]
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 5,
        ease: 'easeInOut'
      }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 left-0 w-full h-full text-cyber-magenta opacity-50 z-0"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          transform: 'translateX(-2px)'
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          transform: ['translateX(-2px)', 'translateX(2px)', 'translateX(-2px)']
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 w-full h-full text-cyber-cyan opacity-50 z-0"
        style={{
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          transform: 'translateX(2px)'
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          transform: ['translateX(2px)', 'translateX(-2px)', 'translateX(2px)']
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}
