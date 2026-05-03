import React from 'react'
interface LogoProps {
size?: number;
showText?: boolean;
}
export default function Logo({ size = 48, showText = false }: LogoProps) {
return (
<div className="flex items-center gap-3">
<svg
width={size}
height={size}
viewBox="0 0 100 100"
fill="none"
xmlns="http://www.w3.org/2000/svg"
className="flex-shrink-0"
>
<defs>
<linearGradient id="outerRing" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#F5F5F5" />
<stop offset="25%" stopColor="#808080" />
<stop offset="50%" stopColor="#C0C0C0" />
<stop offset="75%" stopColor="#484848" />
<stop offset="100%" stopColor="#F5F5F5" />
</linearGradient>

<radialGradient id="innerDepth" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#282828" />
        <stop offset="80%" stopColor="#181818" />
        <stop offset="100%" stopColor="#0A0A0A" />
      </radialGradient>

      <linearGradient id="metalF" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#C0C0C0" />
        <stop offset="100%" stopColor="#808080" />
      </linearGradient>
    </defs>

    {/* Outer Metallic Ring */}
    <circle cx="50" cy="50" r="48" fill="url(#outerRing)" />
    
    {/* Inner Dark Depth */}
    <circle cx="50" cy="50" r="42" fill="url(#innerDepth)" />
    
    {/* Inner Border Highlight */}
    <circle cx="50" cy="50" r="42" fill="none" stroke="#686868" strokeWidth="1" />

    {/* Stylized F merged with Chat Bubble / Arrow Down */}
    <path 
      d="M35 25 H65 V37 H47 V47 H60 V59 H47 V70 L55 85 L35 70 V25 Z" 
      fill="url(#metalF)" 
      filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.5))"
    />
    
    {/* Shimmer overlay line */}
    <path 
      d="M36 26 H64 V36 H46 V46 H59 V58 H46 V69 L53 80 L36 65 V26 Z" 
      fill="none" 
      stroke="#FFFFFF" 
      strokeWidth="0.5" 
      opacity="0.5"
    />
  </svg>
  {showText && (
    <span className="font-bebas text-2xl tracking-widest text-chrome-light mt-1">
      FABRICATORS
    </span>
  )}
</div>
)
}