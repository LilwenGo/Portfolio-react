import { motion } from "motion/react"
import { Link as ReactLink } from '@tanstack/react-router'

export default function Link({to, className, children}: {to: string, className: string, children: string}) {
    return (
        <motion.div 
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}>
            <ReactLink to={to} className={`text-primary hover:underline font-mont ${className}`}>{children}</ReactLink>
        </motion.div>
    );
}