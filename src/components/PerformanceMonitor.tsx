import { useEffect, useRef } from 'react'

interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

export const PerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics>({})

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    const logMetric = (name: string, value: number) => {
      console.log(`[Performance] ${name}: ${Math.round(value)}ms`)
      // You could send this to analytics service here
    }

    // Measure FCP and LCP
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime
            logMetric('First Contentful Paint', entry.startTime)
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          metricsRef.current.lcp = entry.startTime
          logMetric('Largest Contentful Paint', entry.startTime)
        }
        
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as any
          metricsRef.current.fid = fidEntry.processingStart - fidEntry.startTime
          logMetric('First Input Delay', metricsRef.current.fid!)
        }
        
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any
          if (!clsEntry.hadRecentInput) {
            metricsRef.current.cls = (metricsRef.current.cls || 0) + clsEntry.value
            logMetric('Cumulative Layout Shift', metricsRef.current.cls!)
          }
        }
      })
    })

    // Start observing
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Browser might not support all entry types
      console.warn('Performance observer failed:', e)
    }

    // Measure TTFB
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      metricsRef.current.ttfb = navigation.responseStart - navigation.fetchStart
      logMetric('Time to First Byte', metricsRef.current.ttfb)
    }

    // Report metrics after page load
    const reportMetrics = () => {
      setTimeout(() => {
        const metrics = metricsRef.current
        console.log('[Performance Summary]', {
          FCP: metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A',
          LCP: metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A',
          FID: metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A',
          CLS: metrics.cls ? Math.round(metrics.cls * 1000) / 1000 : 'N/A',
          TTFB: metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'
        })
      }, 5000) // Report after 5 seconds
    }

    if (document.readyState === 'complete') {
      reportMetrics()
    } else {
      window.addEventListener('load', reportMetrics)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('load', reportMetrics)
    }
  }, [])

  return null // This component doesn't render anything
}