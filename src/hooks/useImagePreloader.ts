import { useEffect, useState } from 'react'

interface ImagePreloaderOptions {
  images: string[]
  onComplete?: () => void
  priority?: 'high' | 'low'
}

export const useImagePreloader = ({ images, onComplete, priority = 'low' }: ImagePreloaderOptions) => {
  const [loadedCount, setLoadedCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (images.length === 0) {
      setIsComplete(true)
      onComplete?.()
      return
    }

    let completed = 0
    const imageElements: HTMLImageElement[] = []

    const checkComplete = () => {
      completed++
      setLoadedCount(completed)
      
      if (completed === images.length) {
        setIsComplete(true)
        onComplete?.()
      }
    }

    images.forEach((src, index) => {
      const img = new Image()
      img.onload = checkComplete
      img.onerror = checkComplete // Still count failed loads as "complete"
      
      if (priority === 'high') {
        img.loading = 'eager'
        img.fetchPriority = 'high'
      }
      
      img.src = src
      imageElements[index] = img
    })

    // Cleanup function
    return () => {
      imageElements.forEach(img => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [images, onComplete, priority])

  return {
    loadedCount,
    totalCount: images.length,
    isComplete,
    progress: images.length > 0 ? (loadedCount / images.length) * 100 : 100
  }
}