import { motion } from "framer-motion"

export default function Skill({icon, name, key}) {
    const animationVariants = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.2
            }
        },
    }

    return (
        <motion.li
            variants={animationVariants}           
            key={key}
            className="p-2 w-[25%] flex flex-col items-center justify-between gap-1 rounded-md border-sky-900 border-2">           
            {icon}
            {name}
        </motion.li>
    )
}