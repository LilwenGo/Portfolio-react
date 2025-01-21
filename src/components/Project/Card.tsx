import { motion } from "motion/react"

export default function Card({reverse}: {reverse: string}) {
    const offScreen = {
        x: (reverse === 'true' ? '100%' : '-100%')
    };
    const onScreen = {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    };
    return (
        <motion.div 
            initial={offScreen} 
            whileInView={onScreen}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className="w-full h-20 bg-accent">
        </motion.div>
    );
}