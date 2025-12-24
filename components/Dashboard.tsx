import React from 'react';

// Define the functional component for the dashboard.
// Components should be defined outside the parent component to avoid unnecessary re-renders.
export const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-green-800 p-8 text-center shadow-lg rounded-lg mx-auto max-w-lg md:max-w-xl lg:max-w-2xl">
      {/* Success Icon */}
      <svg
        className="w-20 h-20 text-green-500 mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>

      {/* Welcome Message */}
      <h1 className="text-4xl font-extrabold mb-4 leading-tight">
        Welcome to Secure App!
      </h1>
      <p className="text-xl md:text-2xl mb-8 leading-relaxed">
        Your device is secure. All services are fully functional.
      </p>

      {/* Feature List/Placeholder */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-green-200">
        <ul className="text-gray-700 text-lg space-y-3">
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Payment Services Enabled</span>
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Access Account Details</span>
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Manage Transactions</span>
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Secure Profile Settings</span>
          </li>
        </ul>
      </div>

      {/* Button to proceed (placeholder) */}
      <button
        onClick={() => console.log('Proceed to main app functionality')}
        className="mt-8 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out text-lg md:text-xl"
      >
        Continue to App
      </button>
    </div>
  );
};
