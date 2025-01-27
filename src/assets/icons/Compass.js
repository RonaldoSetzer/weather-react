import React from 'react';
import { theme } from '../../utils/colors';

function Compass({ fill = theme.colorInverse }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        fill={fill}
        d="M256 0C114.604 0 0 114.604 0 256c0 141.375 114.604 256 256 256 141.375 0 256-114.625 256-256C512 114.604 397.375 0 256 0zm0 448c-105.875 0-192-86.125-192-192S150.125 64 256 64s192 86.125 192 192-86.125 192-192 192zm-96-96l128-64 64-128-128 64-64 128z"
      ></path>
    </svg>
  );
}

export default Compass;
