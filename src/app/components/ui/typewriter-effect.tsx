'use client'
import { useEffect, useState } from 'react'
import { cn } from './utils'

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const fullText = currentWord.text

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 3000) // Pause for 3 seconds before deleting
      return () => clearTimeout(pauseTimer)
    }

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentCharIndex < fullText.length) {
            setDisplayedText(fullText.substring(0, currentCharIndex + 1))
            setCurrentCharIndex(currentCharIndex + 1)
          } else {
            // Finished typing, pause before deleting
            setIsPaused(true)
          }
        } else {
          // Deleting
          if (currentCharIndex > 0) {
            setDisplayedText(fullText.substring(0, currentCharIndex - 1))
            setCurrentCharIndex(currentCharIndex - 1)
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false)
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
          }
        }
      },
      isDeleting ? 100 : 100
    ) // Faster deletion, slower typing

    return () => clearTimeout(timer)
  }, [currentCharIndex, currentWordIndex, isDeleting, isPaused, words])

  // Reset when words change (new phrase from parent)
  useEffect(() => {
    setDisplayedText('')
    setCurrentCharIndex(0)
    setIsDeleting(false)
    setIsPaused(false)
    setCurrentWordIndex(0)
  }, [words])

  const currentWord = words[currentWordIndex]

  return (
    <div className={cn('flex space-x-1', className)}>
      <span className={cn('text-4xl sm:text-3xl', currentWord?.className)}>
        {displayedText}
        <span
          className={cn(
            'inline-block h-8 w-0.5 animate-pulse',
            cursorClassName || 'bg-blue-500'
          )}
        />
      </span>
    </div>
  )
}
