import '../styles/components/_hero.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import RunningLine from './RunningLine';
import VirtualCoinScene from './VirtualCoinScene';



export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chars = ref.current?.querySelectorAll('.char');
        if (!chars) return;
        gsap.to(chars, {
            duration: 3,
            color: " rgb(160, 32, 240)",
            textShadow: "1px 1px 0px rgba(173, 74, 235, 0.63)",
            repeat: -1,
            yoyo: true,
            stagger: 0.1
         });
    }, []);

    const text = "Sepolia";
    const letters = text.split("").map((char, index) => (
        <span key={index} className='char'>{char}</span>
    ));

    return (
        <div className="hero" id='home'>
            <div className='hero__content'>
                {/* <h1>KopiToken</h1> */}
                <h2>Test token on the </h2>
                <h1 ref={ref}>{letters}</h1>
                <h2> network</h2>
                <div>
                    <VirtualCoinScene/>
                </div>
                <RunningLine/>
            </div>
        </div>
    );
}
