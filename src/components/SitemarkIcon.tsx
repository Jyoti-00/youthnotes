import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function SitemarkIcon() {
  return (
    <SvgIcon sx={{ height: 21, width: 150, mr: 2 }}>
      <svg
        width={150}
        height={40}
        viewBox="0 0 150 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Green leaf path */}
        <path
          fill="#00D300"
          d="M15 5 C20 0, 30 0, 35 5 C30 10, 20 10, 15 5 Z"
          transform="translate(-10, 12) scale(1.2)"
        />

        {/* Red leaf path */}
        <path
          fill="#D30000"
          d="M15 5 C20 0, 30 0, 35 5 C30 10, 20 10, 15 5 Z"
          transform="rotate(120 10 20) translate(-10, 12) scale(1.2)"
        />

        {/* Yellow leaf path */}
        <path
          fill="#D3D300"
          d="M15 5 C20 0, 30 0, 35 5 C30 10, 20 10, 15 5 Z"
          transform="rotate(-120 10 20) translate(-10, 12) scale(1.2)"
        />

        {/* "YouthNote" text */}
        <text
          x="50"
          y="30"
          fontFamily="'Times New Roman', Times, serif"
          fontSize="38"
          fill="#4876EE"
        >
          YouthNote
        </text>
      </svg>
    </SvgIcon>
  );
}
