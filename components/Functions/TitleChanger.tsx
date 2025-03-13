'use client';

import { useEffect } from 'react';

const TitleChanger = () => {
  useEffect(() => {
    // Default title
    const defaultTitle = "Deep Patel";
    const visitingTitle = "Thanks for visiting!";
    
    // Set initial title
    document.title = defaultTitle;
    
    // Handler for when the page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User switched away from the tab
        document.title = visitingTitle;
      } else {
        // User is back on the tab
        document.title = defaultTitle;
      }
    };
    
    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Clean up on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.title = defaultTitle;
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default TitleChanger;