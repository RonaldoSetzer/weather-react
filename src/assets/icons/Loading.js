import React from 'react';

function Loading() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      version="1"
      viewBox="0 0 128 128"
    >
      <rect width="100%" height="100%" fill="transparent"></rect>
      <g>
        <path d="M59.6 0h8v40h-8V0z"></path>
        <path
          fill="#ccc"
          fillOpacity="0.2"
          d="M92.19 6.374l6.928 4-20 34.641-6.929-4 20-34.64zM117.226 28.19l4 6.928-34.641 20-4-6.929 34.64-20zM128 59.6v8H88v-8h40zM121.626 92.19l-4 6.928-34.641-20 4-6.929 34.64 20z"
        ></path>
        <path
          fill="#b2b2b2"
          fillOpacity="0.3"
          d="M99.81 117.226l-6.928 4-20-34.641 6.929-4 20 34.64z"
        ></path>
        <path fill="#999" fillOpacity="0.4" d="M68.4 128h-8V88h8v40z"></path>
        <path
          fill="#7f7f7f"
          fillOpacity="0.5"
          d="M35.81 121.626l-6.928-4 20-34.641 6.929 4-20 34.64z"
        ></path>
        <path
          fill="#666"
          fillOpacity="0.6"
          d="M10.774 99.81l-4-6.928 34.641-20 4 6.929-34.64 20z"
        ></path>
        <path fill="#4c4c4c" fillOpacity="0.7" d="M0 68.4v-8h40v8H0z"></path>
        <path
          fill="#333"
          fillOpacity="0.8"
          d="M6.374 35.81l4-6.928 34.641 20-4 6.929-34.64-20z"
        ></path>
        <path
          fill="#191919"
          fillOpacity="0.9"
          d="M28.19 10.774l6.928-4 20 34.641-6.929 4-20-34.64z"
        ></path>
        <animateTransform
          attributeName="transform"
          calcMode="discrete"
          dur="1080ms"
          repeatCount="indefinite"
          type="rotate"
          values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64"
        ></animateTransform>
      </g>
    </svg>
  );
}

export default Loading;
