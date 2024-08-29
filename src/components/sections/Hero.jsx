import { motion } from "framer-motion"
import { HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    const variants = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.25
            }
        },
        hover: {
            scale: 1.2,
            transiiton: {
                duration: 1.5
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            transition={{
                staggerChildren: 0.25
            }}
            viewport={{
                once: true
            }}
            className="p-4 bg-sky-950 flex-grow flex flex-col items-center justify-center gap-8 drop-shadow-md tracking-wide">
            <motion.h1
                variants={variants}
                className="text-6xl md:text-7xl font-bold leading-tight">
                Hey, I'm Austin <motion.span
                    animate={{ rotate: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-block origin-bottom-right">
                    👋
                </motion.span>
            </motion.h1>
            <motion.p
                variants={variants}
                className="text-3xl md:text-4xl leading-tight">
                Full Stack Developer
            </motion.p>
            <motion.ul
                variants={variants}
                className="flex gap-4">
                <HeroIcon href="#contact" icon={<HiEnvelope className="h-6 w-6" />} />
                <HeroIcon href="https://linkedin.com/in/austin-aluzzi" target="_blank" icon={<FaLinkedin className="h-6 w-6" />} />
                <HeroIcon href="https://github.com/aaluzzi" target="_blank" icon={<FaGithub className="h-6 w-6" />} />
            </motion.ul>
        </motion.section>
    )
}

function HeroIcon({ href, icon, target }) {
    return (
        <motion.a whileHover={{scale: 1.2}} className="h-[100%] bg-sky-900 p-3 rounded-full shadow-md" href={href} target={target}>{icon}</motion.a>
    )
}