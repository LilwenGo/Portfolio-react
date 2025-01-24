import { motion } from "motion/react"
import Paragraph from "../Paragraph";

export default function ScreenShot({reverse, src, alt, children}: {reverse?: string, src: string, alt: string, children: string}) {
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
            whileInView={onScreen}
            initial={offScreen}
            className="w-full"
        >
            <img src={`/images/${src}`} alt={alt} className="w-full object-cover" />
            <Paragraph size={2}>{children}</Paragraph>
        </motion.div>
    )
}