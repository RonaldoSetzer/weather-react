import React from 'react';

function Snow({ fill = '#fff' }) {
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
        fillRule="evenodd"
        d="M326.042 443.688l-18-10.376c.542-3.124.958-6.311.958-9.624 0-3.312-.416-6.5-1-9.625l18.042-10.396c8.417-4.917 11.291-15.729 6.458-24.104-4.876-8.479-15.667-11.375-24.125-6.5l-18.188 10.5c-4.876-4.146-10.375-7.396-16.5-9.604v-20.896c0-9.771-7.938-17.688-17.688-17.688s-17.666 7.917-17.666 17.688v20.875c-6.126 2.188-11.646 5.479-16.521 9.625l-18.146-10.5c-8.479-4.875-19.292-2-24.167 6.479-4.875 8.417-1.938 19.25 6.5 24.126l17.959 10.375c-.584 3.146-.959 6.334-.959 9.646 0 3.313.375 6.5.959 9.624L186 443.688c-8.459 4.875-11.375 15.75-6.5 24.188s15.688 11.312 24.125 6.438l18.167-10.438c4.874 4.125 10.396 7.375 16.542 9.562v20.938c0 9.749 7.916 17.624 17.666 17.624s17.688-7.875 17.688-17.624v-20.938a51.698 51.698 0 0016.521-9.625l18.167 10.5c8.458 4.875 19.249 2 24.125-6.438 4.874-8.437 1.999-19.25-6.459-24.187zM256 441.375c-9.75 0-17.688-7.938-17.688-17.688s7.938-17.646 17.688-17.646 17.667 7.896 17.667 17.646-7.917 17.688-17.667 17.688zM400 64c-5.312 0-10.562.375-15.792 1.125C354.334 24.417 307.188 0 256 0s-98.312 24.417-128.208 65.125C122.562 64.375 117.312 64 112 64 50.25 64 0 114.25 0 176s50.25 112 112 112c13.688 0 27.084-2.5 39.709-7.333C180.666 305.917 217.5 320 256 320c38.542 0 75.333-14.083 104.291-39.333A110.825 110.825 0 00400 288c61.75 0 112-50.25 112-112S461.75 64 400 64zm0 192c-17.125 0-32.916-5.5-45.938-14.667C330.584 269.625 295.624 288 256 288c-39.625 0-74.584-18.375-98.062-46.667C144.938 250.5 129.125 256 112 256c-44.188 0-80-35.812-80-80s35.812-80 80-80c10.812 0 21.062 2.208 30.438 6.083C163.667 60.667 206.291 32 256 32s92.334 28.667 113.541 70.083C378.938 98.208 389.209 96 400 96c44.188 0 80 35.812 80 80s-35.812 80-80 80z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Snow;