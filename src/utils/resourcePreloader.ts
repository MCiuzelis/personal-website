// Enhanced resource preloader for critical assets
export class ResourcePreloader {
  private static instance: ResourcePreloader
  private preloadedAssets = new Map<string, any>()
  private preloadPromises = new Map<string, Promise<any>>()

  static getInstance(): ResourcePreloader {
    if (!ResourcePreloader.instance) {
      ResourcePreloader.instance = new ResourcePreloader()
    }
    return ResourcePreloader.instance
  }

  // Preload 3D models with highest priority
  async preloadModel(url: string): Promise<void> {
    if (this.preloadedAssets.has(url) || this.preloadPromises.has(url)) {
      return this.preloadPromises.get(url)
    }

    const promise = fetch(url, {
      method: 'GET',
      headers: { 
        'Cache-Control': 'public, max-age=86400',
        'Priority': 'high'
      }
    }).then(async (response) => {
      if (!response.ok) throw new Error(`Failed to preload model: ${url}`)
      const blob = await response.blob()
      const objectURL = URL.createObjectURL(blob)
      
      this.preloadedAssets.set(url, { blob, objectURL })
      
      // Add to browser cache
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = url
      link.as = 'fetch'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
      
      console.log(`✅ Preloaded 3D model: ${url}`)
    }).catch(error => {
      console.warn(`❌ Failed to preload model ${url}:`, error)
    })

    this.preloadPromises.set(url, promise)
    return promise
  }

  // Preload images with priority handling
  async preloadImage(url: string, priority: 'high' | 'low' = 'low'): Promise<HTMLImageElement> {
    if (this.preloadedAssets.has(url)) {
      return this.preloadedAssets.get(url)
    }

    if (this.preloadPromises.has(url)) {
      return this.preloadPromises.get(url)
    }

    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        this.preloadedAssets.set(url, img)
        resolve(img)
      }
      img.onerror = reject
      img.crossOrigin = 'anonymous'
      
      if (priority === 'high') {
        img.loading = 'eager'
        img.fetchPriority = 'high'
      }
      
      img.src = url
    })

    this.preloadPromises.set(url, promise)
    return promise
  }

  // Preload videos with metadata only for faster initial load
  async preloadVideo(url: string): Promise<HTMLVideoElement> {
    if (this.preloadedAssets.has(url)) {
      return this.preloadedAssets.get(url)
    }

    if (this.preloadPromises.has(url)) {
      return this.preloadPromises.get(url)
    }

    const promise = new Promise<HTMLVideoElement>((resolve, reject) => {
      const video = document.createElement('video')
      video.preload = 'metadata'
      video.muted = true
      video.playsInline = true
      video.onloadedmetadata = () => {
        this.preloadedAssets.set(url, video)
        resolve(video)
      }
      video.onerror = reject
      video.src = url
    })

    this.preloadPromises.set(url, promise)
    return promise
  }

  // Batch preload critical assets
  async preloadCriticalAssets(): Promise<void> {
    const criticalModels = [
      '/CAD_models/VLR_Robot.glb',
      '/CAD_models/SwerveRobot.glb',
      '/CAD_models/FLL_Robot.glb'
    ]

    const criticalImages = [
      '/src/assets/ProjectThumbnails/main.jpg',
      '/src/assets/ProjectThumbnails/VLR.jpg',
      '/src/assets/ProjectThumbnails/Swerve.jpg',
      '/src/assets/ProjectThumbnails/FLL.jpg'
    ]

    // Preload models first (most critical)
    const modelPromises = criticalModels.map(url => this.preloadModel(url))
    
    // Then images
    const imagePromises = criticalImages.map(url => this.preloadImage(url, 'high'))

    try {
      await Promise.allSettled([...modelPromises, ...imagePromises])
      console.log('✅ Critical assets preloaded')
    } catch (error) {
      console.warn('❌ Some critical assets failed to preload:', error)
    }
  }

  // Get preloaded asset
  getPreloadedAsset(url: string): any {
    return this.preloadedAssets.get(url)
  }

  // Check if asset is preloaded
  isPreloaded(url: string): boolean {
    return this.preloadedAssets.has(url)
  }

  // Clear cache (for memory management)
  clearCache(): void {
    // Revoke object URLs to prevent memory leaks
    this.preloadedAssets.forEach((asset, url) => {
      if (asset.objectURL) {
        URL.revokeObjectURL(asset.objectURL)
      }
    })
    
    this.preloadedAssets.clear()
    this.preloadPromises.clear()
    console.log('🧹 Resource cache cleared')
  }
}

// Export singleton instance
export const resourcePreloader = ResourcePreloader.getInstance()

// Auto-start critical asset preloading on module load
if (typeof window !== 'undefined') {
  // Start preloading after a short delay to not block initial render
  setTimeout(() => {
    resourcePreloader.preloadCriticalAssets()
  }, 100)
}