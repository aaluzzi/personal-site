import { useRef, useState } from "react"; 
import * as Tone from "tone";
import { m, motion } from "framer-motion";
import songs from '../assets/songs.json';

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
  { note: "E5", isBlack: false },
];

const randomSong = songs[Math.floor(Math.random() * songs.length)];

export function Piano() { 
    let song = randomSong;
    const [autoPlaying, setAutoPlaying] = useState(false);
    const [melodyIndex, setMelodyIndex] = useState(0);

    const sampler = useRef(new Tone.Sampler({
        urls: {    
            "C4": "C4.mp3",       
            "D#4": "DSharp4.mp3",
            "F#4": "FSharp4.mp3", 
            "A4": "A4.mp3",
            "C5": "C5.mp3",
        },
        volume: -6,
        release: 4,
        baseUrl: "/assets/sounds/", 
    }).toDestination());
    
    const highlightNext = () => {
        setMelodyIndex(prevIndex => prevIndex + 1)
        if (melodyIndex == song.melody.length - 1) {
            setTimeout(() => {
                playMelody();
            }, 1000);
        }
    }

    const playMelody = () => {
        let currentTime = 0;
        song.melody = song.melody.map(n => {
            const event = {
                time: currentTime,
                note: n.note,
                duration: n.duration
            };
            const durations = n.duration.split("+");
            for (const duration of durations) {
                currentTime += Tone.Time(duration).toSeconds();
            }          
            return event;
        });

        setAutoPlaying(true);
        setMelodyIndex(-1);
        const part = new Tone.Part((time, value) => {
            sampler.current.triggerAttackRelease(value.note, value.duration, time);
            Tone.getDraw().schedule(() => {
                setMelodyIndex(prev => prev + 1);
            }, time);            
        }, song.melody);

        Tone.getTransport().scheduleOnce((time) => {
            Tone.getDraw().schedule(() => {
                setAutoPlaying(false);
                setMelodyIndex(-1);
            }, time);
        }, `+${currentTime}`);

        part.start(0);
        Tone.getTransport().bpm.value = song.bpm
        Tone.getTransport().start();     
    }
    console.log(song);
    return (
        <motion.div onTouchStartCapture={async e => await Tone.start()}
            className="select-none touch-none flex w-full max-w-[480px] aspect-7/3 rounded-lg m-0 md:m-8 drop-shadow-md cursor-grab gap-0.5">      
             {keys.map((key, index) => (
                key.isBlack ? 
                    <></>
                : (index < keys.length - 1 && keys[index + 1].isBlack) ? (
                <div key={key.note} className="relative grow">                   
                    <PianoKey 
                        autoPlaying={autoPlaying}
                        isBlack={false} 
                        isHighlighted={song.melody[melodyIndex]?.note === key.note}
                        note={key.note}
                        highlightNext={highlightNext}
                        className="h-full w-full rounded-b-sm"  
                        sampler={sampler.current}                     
                    />                                                     
                    <PianoKey
                        autoPlaying={autoPlaying}
                        isBlack={true} 
                        isHighlighted={song.melody[melodyIndex]?.note === keys[index + 1].note}
                        note={keys[index + 1].note}
                        highlightNext={highlightNext}
                        className="absolute h-[60%] w-[64%] right-[-35%] top-0 z-10 rounded-b-sm"   
                        sampler={sampler.current}                          
                    />                   
                </div>
                ) : (
                <div key={key.note} className="relative grow">                   
                    <PianoKey 
                        autoPlaying={autoPlaying}
                        isBlack={false} 
                        isHighlighted={song.melody[melodyIndex]?.note === key.note}
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

function PianoKey({autoPlaying, className, note, isBlack, isHighlighted, highlightNext, sampler}) {
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
                ${(pressed || (autoPlaying && isHighlighted)) ? "bg-sky-600" : isBlack ? "bg-stone-900" : "bg-stone-50"}
                ${!autoPlaying && isHighlighted ? "animate-pulse" : ""}
            `}>
         </motion.div>
    );
}