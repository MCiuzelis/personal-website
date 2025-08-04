import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  const landed = scrollOffset === 0
  const landedTrue = scrollOffset > 0

  // Helper for opacity and pointer-events classes, static grey text with no hover
  const getOpacityClass = (visible: boolean) =>
      `absolute whitespace-nowrap apple-nav-text text-gray-400 transition-opacity duration-1000 ease-in-out ${
          visible ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'
      }`

  // Prevent scroll interactions on the navbar
  React.useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    const nav = document.getElementById('nav-bar')
    if (nav) {
      nav.addEventListener('wheel', preventDefault, { passive: false })
      nav.addEventListener('touchmove', preventDefault, { passive: false })
      nav.style.overflow = 'hidden'
    }
    return () => {
      if (nav) {
        nav.removeEventListener('wheel', preventDefault)
        nav.removeEventListener('touchmove', preventDefault)
        nav.style.overflow = ''
      }
    }
  }, [])

  return (
      <nav id="nav-bar" className="absolute top-0 left-0 w-full z-50 m-0 p-0">
        <div className="bg-black relative px-4 py-6">
          {/* Home button on the left */}
          <div className="absolute left-[35%] top-1/2 -translate-y-1/2">
            <button
                onClick={() => navigate('/')}
                className="apple-nav-text px-5"
            >
              Home
            </button>
          </div>

          {/* Contact button on the right */}
          <div className="absolute right-[35%] top-1/2 -translate-y-1/2">
            <button
                onClick={() => console.log('Contact clicked')}
                className="apple-nav-text px-5"
            >
              Contact
            </button>
          </div>

          {/* Center text */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative min-w-max h-6 flex items-center justify-center">
              {pageType === 'robot' ? (
                  <span className={getOpacityClass(true)}>
          scroll to explore the model
        </span>
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
        </div>
      </nav>
  )
}

export default Navigation