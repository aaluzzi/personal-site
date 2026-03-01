import { motion } from "framer-motion"
import { HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Piano } from "../Piano";
import { stagger } from "framer-motion";

 const variants = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.25,
            delayChildren: stagger(0.25)
        }
    },
    hover: {
        scale: 1.2,
        transition: {
            duration: 1.5
        }
    }
};

export default function Hero() {
    return (
        <div className="bg-sky-950 flex-1 items-center justify-center">
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={variants}
                viewport={{
                    once: true
                }}
                className="h-[100%] max-w-[1280px] m-auto flex-col md:flex-row flex-grow flex items-center justify-center gap-8 drop-shadow-md tracking-wider text-center md:text-left">
                <motion.div className="p-8 flex-1 flex flex-col justify-center items-center md:items-start gap-8">
                    <motion.h1
                        variants={variants}
                        className="text-5xl md:text-7xl font-bold leading-tight">
                        Austin Aluzzi
                        
                    </motion.h1>
                    <motion.p
                        variants={variants}
                        className="text-3xl md:text-4xl tracking-wide leading-tight">
                        Software Engineer
                    </motion.p>
                    <motion.ul
                            variants={variants}
                            
                            className="flex gap-4">
                        <HeroIcon href="#contact" icon={<HiEnvelope className="h-6 w-6" />} />
                        <HeroIcon href="https://linkedin.com/in/austin-aluzzi" target="_blank" icon={<FaLinkedin className="h-6 w-6" />} />
                        <HeroIcon href="https://github.com/aaluzzi" target="_blank" icon={<FaGithub className="h-6 w-6" />} />
                    </motion.ul>
                </motion.div>
                        
                <Piano variants={variants} />
            </motion.section>
        </div>
        
    )
}

function HeroIcon({ href, icon, target }) {
    return (
        <motion.a variants={variants} 
            whileHover={{scale: 1.2}} 
            className="h-[100%] bg-sky-900 p-3 rounded-full shadow-md" 
            href={href} 
            target={target}>
            {icon}
        </motion.a>
    )
}

