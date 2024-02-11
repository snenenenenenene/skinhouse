import { useEffect, useState } from "react";

const Loading = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate a delay of 2 seconds before showing the content
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {showContent ? (
        // Render your actual content here
        <div>
          <h1>Loading Complete!</h1>
          {/* Add your actual content components here */}
        </div>
      ) : (
        // Render loading indicator here
        <div>
          <h1>Loading...</h1>
          {/* Add your loading animation or message here */}
        </div>
      )}
    </div>
  );
};

export default Loading;
