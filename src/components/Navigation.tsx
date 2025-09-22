import { useNavigate } from 'react-router-dom'
import * as React from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

interface NavigationProps {
  scrollOffset: number
  pageType: string
  hoveredCard?: number | null
}

const Navigation = ({
                      scrollOffset,
                      pageType,
                      hoveredCard,
                    }: NavigationProps) => {
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  const messages = [
    "Kinetic model rocket launch platform",
    "Visualizing music with fire",
    "Combustion engine playing music",
    "Humble beginnings - First Lego League",
    "First Global Challenge projects",
    "2023 - 2024 FTC season's swerve robot",
    "2024 - 2025 FTC season's mecanum robot",
  ]

  const landed = scrollOffset === 0
  const landedTrue = scrollOffset > 0

  const renderHoverMessages = () =>
      messages.map((msg, index) => {
        if (!msg) return null
        const visible = landedTrue && hoveredCard === index
        return (
            <span
                key={index}
                className={`
            absolute whitespace-nowrap apple-nav-text
            transition-opacity duration-500 ease-in-out
            ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            glow-text
          `}
                style={{ transitionProperty: 'opacity' }}
            >
          {msg}
        </span>
        )
      })

  const getOpacityClass = (visible: boolean) =>
      `absolute whitespace-nowrap apple-nav-text
     transition-opacity duration-1000 ease-in-out
     ${visible ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'}
     glow-text`

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

  if (isMobile) {
    return (
      <nav id="nav-bar" className="fixed top-0 left-0 w-full z-50">
        <div className="bg-black px-4 py-5 relative">
          {pageType === 'landing' ? (
            /* Landing page - only contact button centered */
            <div className="flex items-center justify-center">
              <button onClick={() => navigate('/contact')} className="apple-nav-text text-sm">
                Contact
              </button>
            </div>
          ) : pageType === 'robot' ? (
            /* Robot pages - only home button centered */
            <div className="flex items-center justify-center">
              <button onClick={() => navigate('/')} className="apple-nav-text text-sm">
                Home
              </button>
            </div>
          ) : (
            /* Other pages - keep current layout */
            <div className="flex items-center justify-between px-2">
              {/* Home Button */}
              {pageType !== 'contact' && (
                <button onClick={() => navigate('/#projects')} className="apple-nav-text text-sm">
                  Home
                </button>
              )}
              
              {/* Center content */}
              <div className="flex-1 text-center px-4">
                {pageType === 'contact' ? (
                  <button onClick={() => navigate('/#projects')} className="apple-nav-text text-sm">
                    Home
                  </button>
                ) : pageType === 'other' ? (
                  <span className="apple-nav-text text-xs">Learn more</span>
                ) : null}
              </div>
              
              {/* Contact Button */}
              {pageType !== 'contact' && (
                <button onClick={() => navigate('/contact')} className="apple-nav-text text-sm">
                  Contact
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
    )
  }

  return (
      <nav id="nav-bar" className="absolute top-0 left-0 w-full z-50">
        <div className="bg-black px-4 py-4 relative">
          <div className="relative w-full flex items-center justify-center">
            {/* Left - Home */}
            {pageType !== 'contact' && (
              <div
                  className="absolute"
                  style={{ right: '50%', transform: 'translateX(-105%)', marginRight: '5vw' }}
              >
                <button onClick={() => navigate('/#projects')} className="apple-nav-text px-5">
                  Home
                </button>
              </div>
            )}

            {/* Center */}
            <div className="min-w-max h-6 flex items-center justify-center">
              {pageType === 'contact' ? (
                <button onClick={() => navigate('/#projects')} className="apple-nav-text px-5">
                  Home
                </button>
              ) : pageType === 'robot' ? (
                <span className={`${getOpacityClass(true)}`} style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,1), rgba(255,255,255,0.7))',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'moving-highlight 1.5s ease-in-out infinite alternate'
                }}>Scroll to explore the model</span>
              ) : pageType === 'other' ? (
                <span className={`${getOpacityClass(true)}`} style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,1), rgba(255,255,255,0.7))',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'moving-highlight 1.5s ease-in-out infinite alternate'
                }}>Scroll to learn more</span>
              ) : (
                <>
                  <span className={getOpacityClass(landed)}>Scroll to reveal more projects</span>
                  <span
                    className={getOpacityClass(
                      landedTrue && hoveredCard === null
                    )}
                  >
                    Hover on a project for more detail
                  </span>
                  <span className="relative min-w-max h-6 flex items-center justify-center">
                    {renderHoverMessages()}
                  </span>
                </>
              )}
            </div>

            {/* Right - Contact */}
            {pageType !== 'contact' && (
              <div
                  className="absolute"
                  style={{ left: '50%', transform: 'translateX(105%)', marginLeft: '4vw' }}
              >
                <button onClick={() => navigate('/contact')} className="apple-nav-text px-5">
                  Contact
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
  )
}

export default Navigation
