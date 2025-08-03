import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  showScrollMessage?: boolean
  onScrollChange?: (hasScrolled: boolean) => void
}

const Navigation = ({ showScrollMessage = false, onScrollChange }: NavigationProps) => {
  const navigate = useNavigate()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (!showScrollMessage) return

    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true)
        onScrollChange?.(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled, showScrollMessage, onScrollChange])

  const handleHome = () => {
    navigate('/')
  }

  const handleContact = () => {
    // TODO: Implement contact functionality
    console.log('Contact clicked - functionality to be implemented')
  }

  const getInstructionText = () => {
    if (!showScrollMessage) return ''
    return hasScrolled ? 'press for more detail' : 'scroll to reveal more projects'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Home Button - Left */}
        <Button 
          variant="ghost" 
          onClick={handleHome}
          className="glass-button text-white/90 hover:text-white hover:bg-white/10"
        >
          Home
        </Button>
        
        {/* Instructions - Center */}
        {showScrollMessage && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-white/80 text-sm font-medium tracking-wide animate-fade-in">
              {getInstructionText()}
            </span>
          </div>
        )}
        
        {/* Contact Button - Right */}
        <Button 
          variant="ghost" 
          onClick={handleContact}
          className="glass-button text-white/90 hover:text-white hover:bg-white/10"
        >
          Contact
        </Button>
      </div>
    </nav>
  )
}

export default Navigation