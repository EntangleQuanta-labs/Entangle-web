import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypewriterProps {
  texts: string[]
  speed?: number
  eraseSpeed?: number
  typingDelay?: number
}

export const Typewriter: React.FC<TypewriterProps> = ({ texts, speed = 50, eraseSpeed = 30, typingDelay = 1500 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1))
        }, speed)
      } else {
        timeout = setTimeout(() => setIsTyping(false), typingDelay)
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, eraseSpeed)
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isTyping, texts, speed, eraseSpeed, typingDelay])

  return (
    <AnimatePresence mode="wait">
      <motion.span key={currentText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {currentText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
        />
      </motion.span>
    </AnimatePresence>
  )
}
