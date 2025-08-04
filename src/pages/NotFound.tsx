import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="section-heading text-white mb-8">404</h1>
        <p className="text-xl text-gray-400 mb-8 font-medium">Oops! Page not found</p>
        <a href="/" className="apple-nav-text hover:text-white underline text-lg">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
