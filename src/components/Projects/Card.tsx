import { motion } from "motion/react"
import SubTitle from "../Titles/SubTitle";

export default function Card({id, name, image, reverse}: {id: number, name: string, image: string, reverse: string}) {
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
    const exitScreen = {
        x: reverse === "true" ? "-100%" : "100%",
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        },
    };
    return (
        <motion.div 
            initial={offScreen}
            exit={exitScreen}
            whileInView={onScreen}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className={`w-full h-[27rem] flex flex-row${reverse === 'true' ? '-reverse' : ''} justify-between items-center`}>
                <img src={`/images/${image}`} alt={`Image du projet ${name}`} className="h-full w-1/2 object-cover" />
                <div>
                    <SubTitle>{name}</SubTitle>
                </div>
        </motion.div>
    );
}