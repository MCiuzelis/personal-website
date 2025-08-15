import { useEffect } from 'react'

interface AssetPreloaderOptions {
  videos?: string[]
  models?: string[]
  images?: string[]
  priority?: 'high' | 'low'
}

export const useAssetPreloader = ({ videos = [], models = [], images = [], priority = 'low' }: AssetPreloaderOptions) => {
  useEffect(() => {
    const preloadAssets = async () => {
      // Preload videos with low priority to avoid blocking main content
      videos.forEach(src => {
        const video = document.createElement('video')
        video.preload = 'metadata'
        video.src = src
        // Don't append to DOM, just trigger loading
      })

      // Preload 3D models more aggressively
      models.forEach(src => {
        // Use XMLHttpRequest for more aggressive preloading
        const xhr = new XMLHttpRequest()
        xhr.open('GET', src, true)
        xhr.responseType = 'blob'
        xhr.onload = () => {
          if (xhr.status === 200) {
            // Cache the blob URL for faster loading
            const blob = xhr.response
            const url = URL.createObjectURL(blob)
            // Store in a cache map if needed
            console.log(`Preloaded 3D model: ${src}`)
          }
        }
        xhr.send()
        
        // Also use link prefetch as fallback
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = src
        document.head.appendChild(link)
      })

      // Preload images with proper priority
      images.forEach(src => {
        const img = new Image()
        img.src = src
        if (priority === 'high') {
          img.loading = 'eager'
        }
      })
    }

    // Start preloading much sooner for models
    const delay = priority === 'high' ? 100 : (models.length > 0 ? 500 : 2000)
    const timer = setTimeout(preloadAssets, delay)
    return () => clearTimeout(timer)
  }, [videos, models, images, priority])
}