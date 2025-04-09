import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CoffeeScene from './CoffeScene';


const predictions = [
  "Today is your lucky day!",
  "Someone is thinking of you.",
  "A new opportunity is coming.",
  "Trust your instincts.",
  "Your energy will attract success.",
];

const getRandomPrediction = () =>
  predictions[Math.floor(Math.random() * predictions.length)];

const getRandomTokens = () => Math.floor(Math.random() * 91 + 10); // 10-100

export default function PageGetToken() {
  const coffeeRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const [isFilled, setIsFilled] = useState(false);
  const [isDrunk, setIsDrunk] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [tokenAmount, setTokenAmount] = useState<number | null>(null);


  return (
    <div className='wrapper'>
        <CoffeeScene/>
    
    </div>
  );
};
