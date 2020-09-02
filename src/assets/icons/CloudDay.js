import React from 'react';

function CloudDay({ fill = '#FFF' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="360"
      height="360"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        fill={fill}
        d="M208 64c8.833 0 16-7.167 16-16V16c0-8.833-7.167-16-16-16s-16 7.167-16 16v32c0 8.833 7.167 16 16 16zm124.438 42.167l22.625-22.625c6.249-6.25 6.249-16.375 0-22.625-6.25-6.25-16.375-6.25-22.625 0l-22.625 22.625c-6.25 6.25-6.25 16.375 0 22.625 6.249 6.25 16.375 6.25 22.625 0zM16 224h32c8.833 0 16-7.167 16-16s-7.167-16-16-16H16c-8.833 0-16 7.167-16 16s7.167 16 16 16zm336-16c0 8.833 7.167 16 16 16h32c8.833 0 16-7.167 16-16s-7.167-16-16-16h-32c-8.833 0-16 7.167-16 16zM83.541 106.167c6.251 6.25 16.376 6.25 22.625 0 6.251-6.25 6.251-16.375 0-22.625L83.541 60.917c-6.25-6.25-16.374-6.25-22.625 0-6.25 6.25-6.25 16.375 0 22.625l22.625 22.625zM400 256c-5.312 0-10.562.375-15.792 1.125-16.771-22.875-39.124-40.333-64.458-51.5C318.459 145 268.938 96 208 96c-61.75 0-112 50.25-112 112 0 17.438 4.334 33.75 11.5 48.438C47.875 258.875 0 307.812 0 368c0 61.75 50.25 112 112 112 13.688 0 27.084-2.5 39.709-7.333C180.666 497.917 217.5 512 256 512c38.542 0 75.333-14.083 104.291-39.333A110.825 110.825 0 00400 480c61.75 0 112-50.25 112-112s-50.25-112-112-112zM208 128c39.812 0 72.562 29.167 78.708 67.25-10.021-2-20.249-3.25-30.708-3.25-45.938 0-88.5 19.812-118.375 53.25C131.688 234.083 128 221.542 128 208c0-44.188 35.812-80 80-80zm192 320c-17.125 0-32.916-5.5-45.938-14.667C330.584 461.625 295.624 480 256 480c-39.625 0-74.584-18.375-98.062-46.667C144.938 442.5 129.125 448 112 448c-44.188 0-80-35.812-80-80s35.812-80 80-80c7.75 0 15.062 1.458 22.125 3.541 2.812.792 5.667 1.417 8.312 2.521 4.375-8.562 9.875-16.396 15.979-23.75C181.792 242.188 216.562 224 256 224c10.125 0 19.834 1.458 29.25 3.709 10.562 2.499 20.542 6.291 29.834 11.291 23.291 12.375 42.416 31.542 54.457 55.063C378.938 290.188 389.209 288 400 288c44.188 0 80 35.812 80 80s-35.812 80-80 80z"
      ></path>
    </svg>
  );
}

export default CloudDay;