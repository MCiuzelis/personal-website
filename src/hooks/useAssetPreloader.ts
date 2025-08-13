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

      // Preload 3D models
      models.forEach(src => {
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

    // Delay preloading to not interfere with critical resources
    const timer = setTimeout(preloadAssets, priority === 'high' ? 100 : 2000)
    return () => clearTimeout(timer)
  }, [videos, models, images, priority])
}