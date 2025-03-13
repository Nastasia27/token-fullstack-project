import gsap from "gsap"
import { useEffect, useRef } from "react"

const runningList = [
    'Only for test', 
    'Kopi Token', 
    'Only for test', 
    'Kopi Token'
]

export default function RunningLine() {
    const lineRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const runningLine = lineRef.current;
        if (!runningLine) return;
        
        runningLine.innerHTML += runningLine.innerHTML + runningLine.innerHTML;
        const width = runningLine.scrollWidth / 2;

        gsap.fromTo(
            runningLine, 
            {x: 0},
            {x: `-${width}px`,
                duration: 25,
                repeat: -1,
                ease: 'none'
            }
        )
    }, [])

    return (
        <div className="running__line">
            <ul className="running__line__inner" ref={lineRef}>
                {runningList.map((item, index) => (
                    <li key={index} className="running__item">{item}</li>
                ))}
            </ul>
        </div>
    )
}