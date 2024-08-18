import { motion } from "framer-motion";

export default function SkillCard({ title, children }) {
    const animationVariants = {
        hidden: {
            y: 25,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        },
    }

    return (
        <motion.div
            variants={animationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-25px",
            }}
            className="flex flex-col gap-4 max-w-[360px] bg-sky-900 p-8 rounded-md">
            <ul          
                className="flex flex-grow gap-4 flex-wrap items-center justify-center">
                {children}
            </ul>
            <p className="text-xl font-bold">{title}</p>
        </motion.div>
    );
}