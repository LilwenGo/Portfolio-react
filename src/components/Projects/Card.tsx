import { motion } from "motion/react"
import Title from "../Title";
import Button from "../Button";
import { useNavigate } from "@tanstack/react-router";

export default function Card({id, name, image, imgAlt, reverse}: {id: number, name: string, image: string, imgAlt: string, reverse: string}) {
    const navigate = useNavigate();
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

    function handleNavigate() {
        navigate({to: `/projets/${id}`});
    }

    return (
        <motion.div 
            initial={offScreen}
            whileInView={onScreen}
            whileHover={{scale: 1.02}}
            className={`w-full h-[27rem] flex ${reverse === 'true' ? 'flex-row-reverse' : 'flex-row'} justify-between items-center`}>
                <img onClick={handleNavigate} src={`/images/${image}`} alt={imgAlt} className="h-full w-1/2 object-cover" />
                <div className="w-1/2 h-full flex flex-col justify-center items-center gap-6">
                    <Title color="primary">{name}</Title>
                    <Button to={`/projets/${id}`}>Voir plus</Button>
                </div>
        </motion.div>
    );
}