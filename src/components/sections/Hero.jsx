import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="p-4 bg-sky-950 flex-grow flex flex-col items-center justify-center gap-8 drop-shadow-md tracking-wide">
            <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-6xl md:text-7xl font-bold leading-tight">
                Hey, I'm Austin <motion.span
                    animate={{ rotate: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-block origin-bottom-right">
                    👋
                </motion.span>
            </motion.h1>
            <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl md:text-4xl leading-tight">
                Full Stack Developer
            </motion.p>
        </section>
    )
}