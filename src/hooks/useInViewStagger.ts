import { useEffect, useRef, useState } from 'react'

export function useInViewStagger<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3, ...(options || {}) }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [options])

  return { ref, visible }
}
