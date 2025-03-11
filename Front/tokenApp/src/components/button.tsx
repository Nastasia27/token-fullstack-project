import { useEffect, useRef } from 'react';
import '../styles/components/_button.scss';
import gsap from 'gsap';

interface ButtonProps {
  text: string;
  type?: string;
}


export default function Button({text, type = "primary"}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    const {offsetX, offsetY} = e.nativeEvent;
    const {offsetWidth, offsetHeight} = e.currentTarget as HTMLElement;
    const x = offsetX / offsetWidth;
    const y = offsetY / offsetHeight;

    gsap.to(buttonRef.current, {
      "--x": `${x * 100}%`,
      "--y": `${y * 100}%`,
      duration: 0.3,
      ease: "power2.out",

    });
  };

  // useEffect(() => {
  //   const button = document.querySelector('.btn') as HTMLElement;
  //   if (!button) return;

  //   const handleMouseEnter = (e: MouseEvent) => {
  //     const target = e.currentTarget as EventTarget & HTMLElement;
  //     console.log(target);
  //     const {offsetX, offsetY} = e;
  //     const {offsetWidth, offsetHeight} = target as HTMLElement;
  //     const x = offsetX / offsetWidth;
  //     const y = offsetY / offsetHeight;

  //     gsap.to(button, {
  //       background: "rgba(204, 41, 41, 0.55)",
  //       duration: 3,
  //     });

  //   button.addEventListener('mouseenter', () => {
  //     gsap.to(button, {
  //       color: "rgb(160, 32, 240)",
  //       background: "rgba(204, 41, 41, 0.55)",
  //       duration: 3,
  //     });
  //   } );
    
  //   // return () => {
  //   //   button.removeEventListener('mouseenter', handleMouseEnter);
  //   // }; 
  //   }}, []);

  return (
    <button 
      className={`btn btn--${type}`}
      ref={buttonRef}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
        {text}
    </button> 
  );
}