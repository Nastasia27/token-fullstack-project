
import CoffeeCup from "./CoffeeCup";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useState } from 'react';
import Button from "./button";
import PredictionText from "./Predictiontext";
import Modal from "./modal";


export default function CoffeeScene() {
    const [prediction, setPrediction] = useState<string>('');
    const [step, setStep] = useState<number>(0);
    const [showPrediction, setShowPrediction] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    let displayText = '';
    let buttonText = '';

    if (step === 0) {
        displayText = 'Just take a break, drink coffee and get your prediction with some tokens';
        buttonText = 'Drink Coffee';
      } else if (step === 1) {
        displayText = 'Check the prediction';
        buttonText = 'Check the prediction';
      } else if (step === 2) {
        buttonText = 'Get Tokens';
      }

    const geteratePredictions = () => {
        const predictions = [
            "Today is your lucky day!",
            "Someone is thinking of you.",
            "A new opportunity is coming.",
            "Trust your instincts.",
            "Your energy will attract success.",
            "You will conquer new heights today.",
            "A surprise is waiting for you.",
            "Take a chance, the universe is on your side.",
            "Someone is thinking of you right now.",
        ];
        const random = predictions[Math.floor(Math.random() * predictions.length)];
        return random;
    }

    const handleClick = () => {
        if (step === 0 ) {
            setStep(1);
            setIsButtonDisabled(true);
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 6000);
        } else if (step === 1) {
            const randomPrediction = geteratePredictions();
            setPrediction(randomPrediction);
            setStep(2);
            setShowPrediction(false);
            setIsButtonDisabled(true);
            setTimeout(() => {
                setIsButtonDisabled(false);
                setShowPrediction(true);
            }, 4000);
        } else if (step === 2) {
            setIsOpenModal(true);
        }
    }

    return (
        <div id="canvas-container">
            <Canvas 
                style={{ height: '60vh', width: '90vw' }}
                shadows
                camera={{ position: [0, 0, 9], fov: 50 }}
                dpr={3}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.7} />
                <directionalLight 
                    castShadow
                    position={[4, 10, 5]} 
                    intensity={4} 
                    shadow-mapSize={[1024, 1024]}

                />
                <CoffeeCup step={step}/>
                <OrbitControls />
                <Environment preset="sunset" />
            </Canvas>
            <div className="text_wrapper">
                {step === 2 && !showPrediction &&  (
                    <p className="pulse_animation">Analyzing...</p>
                )}
                {step === 2 &&  showPrediction && (
                    <PredictionText prediction={prediction} />
                )}
                <p style={{whiteSpace: 'wrap'}}>{displayText}</p>
                <div className="button_wrapper">
                    <Button text={buttonText} type="dark" onClick={handleClick} disabled={isButtonDisabled}></Button>
                </div>
            </div>
            {isOpenModal && (
                <Modal onClose={() => setIsOpenModal(false)} />
            )}
        </div>
    )
}