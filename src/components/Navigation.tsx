import { useNavigate } from 'react-router-dom'
import * as React from 'react'

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

  const messages = [
    null,
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

  return (
      <nav id="nav-bar" className="absolute top-0 left-0 w-full z-50">
        <div className="bg-black px-4 py-4 relative">
          <div className="relative w-full flex items-center justify-center">
            {/* Left - Home */}
            <div
                className="absolute"
                style={{ right: '50%', transform: 'translateX(-105%)', marginRight: '5vw' }}
            >
              <button onClick={() => navigate('/')} className="apple-nav-text px-5">
                Home
              </button>
            </div>

            {/* Center */}
            <div className="min-w-max h-6 flex items-center justify-center">
              {pageType == 'robot' ? (
                  <span className={getOpacityClass(true)}>
                Scroll to explore the model
              </span>
              ) : (
                  <>
                <span className={getOpacityClass(landed)}>
                  Scroll to reveal more projects
                </span>
                    <span className={getOpacityClass(
                        landedTrue && (hoveredCard === null || hoveredCard === 0)
                    )}>
                  Hover on a project for more detail
                </span>
                    <span className="relative min-w-max h-6 flex items-center justify-center">
                  {renderHoverMessages()}
                </span>
                  </>
              )}
            </div>

            {/* Right - Contact */}
            <div
                className="absolute"
                style={{ left: '50%', transform: 'translateX(105%)', marginLeft: '4vw' }}
            >
              <button onClick={() => console.log('Contact clicked')} className="apple-nav-text px-5">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navigation
