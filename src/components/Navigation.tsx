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

  // determine states
  const landed = scrollOffset === 0
  const landedTrue = scrollOffset > 0

  // robot thresholds
  const robotStage1 = scrollOffset > state1Threshold && scrollOffset <= state2Threshold
  const robotStage2 = scrollOffset > state2Threshold

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
                    {/* initial */}
                    <span
                        className={`absolute transition-opacity duration-1500 ease-in-out whitespace-nowrap ${
                            landed ? 'opacity-100' : 'opacity-0'
                        } text-white/80 text-sm font-medium tracking-wide`}
                    >
                  scroll to explore the model
                </span>
                    {/* stage1 */}
                    <span
                        className={`absolute transition-opacity duration-1500 ease-in-out whitespace-nowrap ${
                            robotStage1 ? 'opacity-100' : 'opacity-0'
                        } text-white/80 text-sm font-medium tracking-wide`}
                    >
                  dummy text for stage 1
                </span>
                    {/* stage2 */}
                    <span
                        className={`absolute transition-opacity duration-1500 ease-in-out whitespace-nowrap ${
                            robotStage2 ? 'opacity-100' : 'opacity-0'
                        } text-white/80 text-sm font-medium tracking-wide`}
                    >
                  dummy text for stage 2
                </span>
                  </>
              ) : (
                  <>
                    {/* landing initial */}
                    <span
                        className={`absolute transition-opacity duration-1500 ease-in-out whitespace-nowrap ${
                            landed ? 'opacity-100' : 'opacity-0'
                        } text-white/80 text-sm font-medium tracking-wide`}
                    >
                  scroll to reveal more projects
                </span>
                    {/* landing after scroll */}
                    <span
                        className={`absolute transition-opacity duration-1500 ease-in-out whitespace-nowrap ${
                            landedTrue ? 'opacity-100' : 'opacity-0'
                        } text-white/80 text-sm font-medium tracking-wide`}
                    >
                  press any card for more detail
                </span>
                  </>
              )}
            </div>
          </div>

          {/* Right button/contextual */}
          {pageType === 'robot' ? (
              // show Back to Top only when fully scrolled (>1)
              <Button
                  variant="ghost"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="glass-button text-white/90 hover:text-white hover:bg-white/10 px-8 py-2 transition-opacity duration-1000 ease-in-out"
              >
                Back to Top
              </Button>
          ) : (
              <Button
                  variant="ghost"
                  onClick={() => console.log('Contact clicked')}
                  className="glass-button text-white/90 hover:text-white hover:bg-white/10 px-8 py-2 transition-opacity duration-1000 ease-in-out"
              >
                Contact
              </Button>
          )}
        </div>
      </nav>
  )
}

export default Navigation
