import React from 'react';

interface SackLogoProps {
  className?: string;
  size?: number | string;
}

export function SackLogo({ className = "h-12 w-auto", size }: SackLogoProps) {
  return (
    <img 
      src="/logo-saco.svg" 
      alt="Logo Saco - Puerto Columbo" 
      className={`${className} object-contain transition-transform duration-200 group-hover:scale-105`}
      style={size ? { width: size, height: size } : undefined}
    />
  );
}
