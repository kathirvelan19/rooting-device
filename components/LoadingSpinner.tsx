import React from 'react';

// Define the functional component for the loading spinner.
// Components should be defined outside the parent component to avoid unnecessary re-renders.
export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
