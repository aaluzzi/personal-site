import { useRef, useState } from "react"; 
import * as Tone from "tone";
import { motion } from "framer-motion";

const keys = [
  { note: "F3", isBlack: false },
  { note: "F#3", isBlack: true },
  { note: "G3", isBlack: false },
  { note: "G#3", isBlack: true },
  { note: "A3", isBlack: false },
  { note: "A#3", isBlack: true },
  { note: "B3", isBlack: false },
  { note: "C4", isBlack: false },
  { note: "C#4", isBlack: true },
  { note: "D4", isBlack: false },
  { note: "D#4", isBlack: true },
  { note: "E4", isBlack: false },
  { note: "F4", isBlack: false },
  { note: "F#4", isBlack: true },
  { note: "G4", isBlack: false },
  { note: "G#4", isBlack: true },
  { note: "A4", isBlack: false },
  { note: "A#4", isBlack: true },
  { note: "B4", isBlack: false },
  { note: "C5", isBlack: false },
  { note: "C#5", isBlack: true },
  { note: "D5", isBlack: false },
  { note: "D#5", isBlack: true },
  { note: "E5", isBlack: false }
];

const melodies = [
    ["D4", "F4", "D5", "D4", "F4", "D5"],
    ["D#4", "D#4", "D#4", "A#4", "G4", "A#4", "G4", "F4"],
    ["A3", "C#4", "A4", "B4", "C#5", "B4", "A4", "E4", "D4", "F#4", "C#5", "E5", "C#5", "A4"],
    ["B3", "B3", "G#3", "B3", "B3", "A#3", "F#3", "F#4", "F#4", "D#4"],
    ["G4", "D5", "D5", "A4", "D5", "B4", "D5", "B4", "C5", "D5"]
    
]
const randomMelody = melodies[Math.floor(Math.random() * melodies.length)];

export function Piano() { 
    const melody = randomMelody;
    const [melodyIndex, setMelodyIndex] = useState(0);

    const sampler = useRef(new Tone.Sampler({
        urls: {
            "C4": "C4.mp3",           
            "C5": "C5.mp3",
        },
        volume: -7,
        release: 4,
        baseUrl: "https://tonejs.github.io/audio/salamander/", 
    }).toDestination());
    
    const highlightNext = () => {
        setMelodyIndex(prevIndex => prevIndex + 1)
    }

    return (
        <motion.div onTouchStartCapture={async e => await Tone.start()}
            className="select-none touch-none flex w-full max-w-[480px] aspect-7/3 rounded-lg m-0 md:m-8 drop-shadow-md cursor-grab gap-0.5">      
             {keys.map((key, index) => (
                key.isBlack ? 
                    <></>
                : (index < keys.length - 1 && keys[index + 1].isBlack) ? (
                <div key={key.note} className="relative grow">                   
                    <PianoKey 
                        isBlack={false} 
                        isHighlighted={melody[melodyIndex] === key.note}
                        note={key.note}
                        highlightNext={highlightNext}
                        className="h-full w-full rounded-b-sm"  
                        sampler={sampler.current}                     
                    />                                                     
                    <PianoKey
                        isBlack={true} 
                        isHighlighted={melody[melodyIndex] === keys[index + 1].note}
                        note={keys[index + 1].note}
                        highlightNext={highlightNext}
                        className="absolute h-[60%] w-[63%] right-[-34%] top-0 z-10 rounded-b-sm"   
                        sampler={sampler.current}                          
                    />                   
                </div>
                ) : (
                <div key={key.note} className="relative grow">                   
                    <PianoKey 
                        isBlack={false} 
                        isHighlighted={melody[melodyIndex] == key.note}
                        note={key.note}
                        highlightNext={highlightNext}
                        className="h-full w-full rounded-b-sm"     
                        sampler={sampler.current}                  
                    />              
                </div>
                )
            ))}         
        </motion.div>
    )
}

function PianoKey({className, note, isBlack, isHighlighted, highlightNext, sampler}) {
    const [pressed, setPressed] = useState(false);

    function handlePointerEnter(e) {         
        if (e.pointerType === "touch" || (e.pointerType === "mouse" && e.buttons === 1)) {
            press(e);            
        }
    }

    function handlePointerDown(e) {
        if (e.pointerType === 'touch') {
            e.target.releasePointerCapture(e.pointerId); 
        } else {
            press(e);
        }
    }

    async function press(e) {       
        setPressed(true);
        e.preventDefault();
            
        sampler.triggerAttack(note);                
        if (isHighlighted) {
            highlightNext();
        }      
    }

    function release(e) {   
        setPressed(false);    
        e.preventDefault();
             
        sampler.triggerRelease(note)      
    }

    return (
         <motion.div      
            onPointerDown={handlePointerDown}
            onPointerEnter={handlePointerEnter} 
            onPointerUp={release}  
            onPointerOut={release}      
            style={{ animationDuration: '1.25s' }}
            className={`
                ${className}
                ${pressed ? "bg-sky-600" : isBlack ? "bg-stone-900" : "bg-stone-50"}
                ${isHighlighted ? "animate-pulse" : ""}
            `}>
         </motion.div>
    );
}