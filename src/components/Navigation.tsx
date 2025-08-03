import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import * as React from 'react'

interface NavigationProps {
  /**
   * scroll offset from 0 (no scroll) to 1 (end)
   */
  scrollOffset: number
  /**
   * controls page-specific instruction behavior
   * 'landing' - default landing page
   * 'robot' - robot model page
   */
  pageType?: 'landing' | 'robot'
}

const Navigation = ({ scrollOffset, pageType = 'landing' }: NavigationProps) => {
  const state1Threshold = 100
  const state2Threshold = 1000

  const navigate = useNavigate()

  const landed = scrollOffset === 0
  const landedTrue = scrollOffset > 0

  const robotStage1 = scrollOffset > state1Threshold && scrollOffset <= state2Threshold
  const robotStage2 = scrollOffset > state2Threshold

  // Helper for opacity and pointer events classes
  const getOpacityClass = (visible: boolean) =>
      `absolute whitespace-nowrap text-white/80 text-sm font-medium tracking-wide transition-opacity duration-1000 ease-in-out ${
          visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="flex items-center justify-between px-8 py-2">
          {/* Home Button */}
          <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="glass-button text-white/90 hover:text-white hover:bg-white/10 px-8 py-2 transition-opacity duration-1000 ease-in-out"
          >
            Home
          </Button>

          {/* Center crossfade container */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="relative min-w-max h-6 flex items-center justify-center">
              {pageType === 'robot' ? (
                  <>
                <span className={getOpacityClass(landed)}>
                  scroll to explore the model
                </span>
                    <span className={getOpacityClass(robotStage1)}>
                  dummy text for stage 1
                </span>
                    <span className={getOpacityClass(robotStage2)}>
                  dummy text for stage 2
                </span>
                  </>
              ) : (
                  <>
                <span className={getOpacityClass(landed)}>
                  scroll to reveal more projects
                </span>
                    <span className={getOpacityClass(landedTrue)}>
                  press any card for more detail
                </span>
                  </>
              )}
            </div>
          </div>

          <Button
              variant="ghost"
              onClick={() => console.log('Contact clicked')}
              className="glass-button text-white/90 hover:text-white hover:bg-white/10 px-8 py-2 transition-opacity duration-1000 ease-in-out"
          >
            Contact
          </Button>
        </div>
      </nav>
  )
}

export default Navigation
