import {  useRef } from 'react';
import '../styles/components/_button.scss';
import gsap from 'gsap';

interface ButtonProps {
  text: string;
  type?: string;
  icon?: React.ReactElement;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
}


export default function Button({text, type = "primary", icon, onClick, disabled}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {offsetX, offsetY} = e.nativeEvent;
    const {offsetWidth, offsetHeight} = e.currentTarget as HTMLElement;
    const x = offsetX / offsetWidth;
    const y = offsetY / offsetHeight;

    gsap.to(buttonRef.current, {
      "--x": `${x * 100}%`,
      "--y": `${y * 100}%`,
      duration: 0.3,
    });
  };

  return (
    <button 
      className={`btn btn--${type}`}
      ref={buttonRef}
      onMouseMove={(e) => {handleMouseMove(e)}}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button> 
  );
}