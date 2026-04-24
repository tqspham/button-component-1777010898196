'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Page(): React.ReactElement {
  const [clickCount, setClickCount] = React.useState<number>(0);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setClickCount((prev) => prev + 1);
  };

  const handleToggleDisabled = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsDisabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Accessible Button Component
        </h1>
        <p className="text-gray-600 mb-8">
          Click the buttons below to test keyboard accessibility, hover states, and focus indicators.
        </p>

        <div className="space-y-6">
          {/* Primary Action Button */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Primary Button</h2>
            <button
              type="button"
              onClick={handleButtonClick}
              disabled={isDisabled}
              aria-label="Click to increment counter"
              className="px-6 py-2 bg-blue-600 text-white font-semibold text-base rounded-lg cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:bg-blue-800 disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              Click Me ({clickCount})
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Try hovering, using Tab to focus, and pressing Enter or Space.
            </p>
          </div>

          {/* Toggle Disabled State Button */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Control Button</h2>
            <button
              type="button"
              onClick={handleToggleDisabled}
              aria-label={isDisabled ? 'Enable primary button' : 'Disable primary button'}
              className="px-6 py-2 bg-green-600 text-white font-semibold text-base rounded-lg cursor-pointer hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 active:bg-green-800 transition-colors"
            >
              {isDisabled ? 'Enable' : 'Disable'} Primary Button
            </button>
          </div>

          {/* Status Information */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">Status</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <span className="font-medium">Click Count:</span> {clickCount}
              </li>
              <li>
                <span className="font-medium">Primary Button State:</span>{' '}
                {isDisabled ? (
                  <span className="text-red-600 font-medium">Disabled</span>
                ) : (
                  <span className="text-green-600 font-medium">Enabled</span>
                )}
              </li>
            </ul>
          </div>

          {/* Accessibility Instructions */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <h3 className="font-semibold text-blue-900 mb-2">Keyboard Instructions</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>
                <span className="font-medium">Tab:</span> Navigate between buttons
              </li>
              <li>
                <span className="font-medium">Enter or Space:</span> Activate focused button
              </li>
              <li>
                <span className="font-medium">Visual Indicators:</span> Blue ring shows focus state
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}