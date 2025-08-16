import { useEffect, useRef } from 'react'

interface AssetPreloaderOptions {
  videos?: string[]
  models?: string[]
  images?: string[]
  priority?: 'high' | 'low'
}

// Global cache for preloaded assets
const assetCache = new Map<string, any>()
const preloadPromises = new Map<string, Promise<any>>()

export const useAssetPreloader = ({ videos = [], models = [], images = [], priority = 'low' }: AssetPreloaderOptions) => {
  const preloadStarted = useRef(false)

  useEffect(() => {
    if (preloadStarted.current) return
    preloadStarted.current = true

    const preloadAssets = async () => {
      // Preload critical images first - they're smaller and needed immediately
      const imagePromises = images.map(async (src) => {
        if (assetCache.has(src) || preloadPromises.has(src)) return
        
        const promise = new Promise<void>((resolve, reject) => {
          const img = new Image()
          img.onload = () => {
            assetCache.set(src, img)
            resolve()
          }
          img.onerror = reject
          img.crossOrigin = 'anonymous'
          if (priority === 'high') {
            img.loading = 'eager'
            img.fetchPriority = 'high'
          }
          img.src = src
        })
        preloadPromises.set(src, promise)
        return promise
      })

      // Preload 3D models with highest priority - they're critical for UX
      const modelPromises = models.map(async (src) => {
        if (assetCache.has(src) || preloadPromises.has(src)) return
        
        const promise = fetch(src, {
          method: 'GET',
          headers: { 'Cache-Control': 'public, max-age=86400' }
        }).then(async (response) => {
          if (!response.ok) throw new Error(`Failed to preload model: ${src}`)
          const blob = await response.blob()
          const url = URL.createObjectURL(blob)
          assetCache.set(src, { blob, url })
          
          // Also add prefetch link for browser caching
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = src
          link.as = 'fetch'
          link.crossOrigin = 'anonymous'
          document.head.appendChild(link)
          
          console.log(`✅ Preloaded 3D model: ${src}`)
        }).catch(error => {
          console.warn(`Failed to preload model ${src}:`, error)
        })
        
        preloadPromises.set(src, promise)
        return promise
      })

      // Preload videos last - they're largest and can wait
      const videoPromises = videos.map(async (src) => {
        if (assetCache.has(src) || preloadPromises.has(src)) return
        
        const promise = new Promise<void>((resolve, reject) => {
          const video = document.createElement('video')
          video.preload = priority === 'high' ? 'auto' : 'metadata'
          video.muted = true
          video.playsInline = true
          video.oncanplaythrough = () => {
            assetCache.set(src, video)
            resolve()
          }
          video.onerror = reject
          video.src = src
        })
        preloadPromises.set(src, promise)
        return promise
      })

      // Execute preloading with proper priorities
      try {
        // Load images first (fastest)
        if (imagePromises.length > 0) {
          await Promise.allSettled(imagePromises)
        }
        
        // Then models (most critical for UX)
        if (modelPromises.length > 0) {
          await Promise.allSettled(modelPromises)
        }
        
        // Finally videos (can be deferred)
        if (videoPromises.length > 0 && priority === 'high') {
          Promise.allSettled(videoPromises) // Don't await videos
        }
      } catch (error) {
        console.warn('Asset preloading error:', error)
      }
    }

    // Start immediately for high priority, slightly delayed for low priority
    const delay = priority === 'high' ? 0 : (models.length > 0 ? 100 : 1000)
    const timer = setTimeout(preloadAssets, delay)
    return () => clearTimeout(timer)
  }, [videos, models, images, priority])

  // Return cache access for components that need it
  return { assetCache, preloadPromises }
}