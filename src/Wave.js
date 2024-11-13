import React from 'react';

function Wave({ darkMode }) {
  const waveColor = darkMode ? '#121212' : '#f5f5f5'; // Adjust wave color based on theme
  return (
    <div className="wave-container">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '200px',
        }}
      >
        <defs>
          <path
            id="wave-path"
            d="M0,120 C150,200 350,0 600,120 C850,240 1050,60 1200,120 L1200,0 L0,0 Z"
          />
        </defs>
        <g>
          <use
            href="#wave-path"
            fill={waveColor}
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="10s"
              from="0,0"
              to="-1200,0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
    </div>
  );
}

export default Wave;
