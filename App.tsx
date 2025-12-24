import React, { useState, useEffect, useCallback } from 'react';
import { AndroidBridge } from './services/androidBridge';
import { RootStatus } from './types';
import { RootWarningDisplay } from './components/RootWarningDisplay';
import { Dashboard } from './components/Dashboard';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  const [rootStatus, setRootStatus] = useState<RootStatus>('checking');

  // useCallback is used to memoize the function, preventing unnecessary re-creations.
  // The empty dependency array ensures it's created only once on mount.
  const checkDeviceRootStatus = useCallback(async () => {
    try {
      setRootStatus('checking');
      // Simulate network delay or complex native operation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const isRooted = await AndroidBridge.checkRootStatus();
      setRootStatus(isRooted ? 'rooted' : 'not-rooted');
    } catch (error) {
      console.error('Error checking root status:', error);
      // Fallback to a safe state if bridge fails, or show an error screen
      setRootStatus('error'); 
    }
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  // useEffect is used to run the root detection check only once when the component mounts.
  // The empty dependency array `[]` ensures this behavior.
  useEffect(() => {
    checkDeviceRootStatus();
  }, [checkDeviceRootStatus]); // eslint-disable-next-line react-hooks/exhaustive-deps

  let content;
  if (rootStatus === 'checking') {
    content = (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
        <LoadingSpinner />
        <p className="mt-4 text-lg">Checking device security...</p>
      </div>
    );
  } else if (rootStatus === 'rooted') {
    content = <RootWarningDisplay />;
  } else if (rootStatus === 'not-rooted') {
    content = <Dashboard />;
  } else if (rootStatus === 'error') {
    content = (
      <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 text-orange-800 p-8 text-center">
        <svg
          className="w-16 h-16 text-orange-500 mb-4"
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
        <h1 className="text-3xl font-bold mb-2">Security Check Failed</h1>
        <p className="text-xl">
          Could not verify device security. Please try again or contact support.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {content}
    </div>
  );
}

export default App;
