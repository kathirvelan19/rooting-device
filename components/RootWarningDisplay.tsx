import React from 'react';

// Define the functional component for the root warning display.
// Components should be defined outside the parent component to avoid unnecessary re-renders.
export const RootWarningDisplay: React.FC = () => {
  // In a real Android app, this button would trigger a native method to close the WebView or app.
  const handleCloseApp = () => {
    // This is a placeholder for a native bridge call.
    // window.Android.closeApp(); 
    console.log('Simulating app close or disabling services...');
    alert('Payment services are disabled. App access restricted.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 p-8 text-center shadow-lg rounded-lg mx-auto max-w-lg md:max-w-xl lg:max-w-2xl">
      {/* Warning Icon */}
      <svg
        className="w-20 h-20 text-red-500 mb-6 animate-pulse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        ></path>
      </svg>

      {/* Warning Message */}
      <h1 className="text-4xl font-extrabold mb-4 leading-tight">
        This device is rooted.
      </h1>
      <p className="text-xl md:text-2xl mb-8 leading-relaxed">
        For security reasons,{' '}
        <span className="font-bold text-red-600">payment services are disabled.</span>
      </p>

      {/* Call to Action - Close/Restrict */}
      <button
        onClick={handleCloseApp}
        className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out text-lg md:text-xl"
      >
        Understand & Close
      </button>

      {/* Subtle Security Reminder */}
      <p className="mt-8 text-sm text-red-700 opacity-80 max-w-xs md:max-w-sm">
        Unauthorized modifications compromise device integrity.
      </p>
    </div>
  );
};
