export const LoadingSpinner = ({ className = "h-12 w-12" }: { className?: string }) => (
  <div className="flex items-center justify-center h-screen w-full bg-black">
    <div className={`animate-spin rounded-full border-b-2 border-white ${className}`}></div>
  </div>
)