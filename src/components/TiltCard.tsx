import React from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export default function TiltCard({
  children,
  className = ''
}: TiltCardProps) {
  return (
    <div className={`transition-all duration-350 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-5px_rgba(0,0,0,0.4)] ${className}`}>
      {children}
    </div>
  );
}
