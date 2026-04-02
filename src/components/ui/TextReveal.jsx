import { motion } from 'framer-motion'
import { Children, isValidElement } from 'react'

export default function TextReveal({
  children,
  delay = 0,
  className = '',
  once = true
}) {
  // Prepare items for animation - split strings into words for stagger effect
  const items = []

  Children.forEach(children, (child, index) => {
    if (typeof child === 'string') {
      // Split string by spaces and create a span for each word
      const words = child.split(' ')
      words.forEach((word, wordIndex) => {
        items.push(
          <span key={`${index}-${wordIndex}`} className="inline-block mr-2">
            {word}
          </span>
        )
      })
    } else if (typeof child === 'number') {
      items.push(
        <span key={index} className="inline-block">
          {child}
        </span>
      )
    } else if (isValidElement(child)) {
      // For React elements (like <span>), wrap them as single animated units
      items.push(
        <span key={index} className="inline-block">
          {child}
        </span>
      )
    }
  })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay }
    }
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 }
    }
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {items}
    </motion.div>
  )
}

export function CharReveal({ children, delay = 0, className = '' }) {
  const text = typeof children === 'string' ? children : String(children || '')
  const chars = text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay }
    }
  }

  const charVariant = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: 'spring', damping: 10, stiffness: 100 }
    }
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariant}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}
