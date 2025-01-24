import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react"

export default function Button({to, variant = 'accent', className = '', children}: {to?: string, variant?: string, className?: string, children: string}) {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate({to});
    }

    if(variant !== 'accent' && variant !== 'update' && variant !== 'error') {
        variant = 'accent';
    }

    return (
        <motion.button 
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            onClick={handleNavigate}
            className={`btn btn-${variant} ${className}`}
        >{children}</motion.button>
    );
}