import { useEffect, useRef } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add revealed class to the container and all reveal children
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((child) => {
              child.classList.add('revealed')
            })
            // Also check if the target itself is a reveal element
            if (
              entry.target.classList.contains('reveal') ||
              entry.target.classList.contains('reveal-left') ||
              entry.target.classList.contains('reveal-right')
            ) {
              entry.target.classList.add('revealed')
            }
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}

export function useScrollRevealAll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
