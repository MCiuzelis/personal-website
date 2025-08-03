import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const Details = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Card Details</h1>
        <p className="text-xl text-muted-foreground max-w-md">
          You clicked on one of the rotating cards! This is where detailed content would be displayed.
        </p>
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Carousel
        </Button>
      </div>
    </div>
  )
}

export default Details