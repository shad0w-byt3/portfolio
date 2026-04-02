import { motion } from 'framer-motion'

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-futura font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:ring-opacity-50'

  const variants = {
    primary: 'bg-gradient-to-r from-cyber-cyan to-cyber-neon-blue text-black hover:shadow-neon-cyan transform hover:scale-105 active:scale-95',
    secondary: 'bg-transparent border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black hover:shadow-neon-cyan',
    ghost: 'bg-transparent text-cyber-cyan hover:text-white hover:bg-white/10',
    danger: 'bg-gradient-to-r from-cyber-neon-red to-red-600 text-white hover:shadow-lg'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-12 py-5 text-xl'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}
