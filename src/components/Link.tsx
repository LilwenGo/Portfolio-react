import { motion } from "motion/react"
import { Link as ReactLink } from '@tanstack/react-router'

export default function Link({to, color = 'link', className = '', children}: {to: string, color?: string, className?: string, children: string}) {
    if(color === 'link' || color === 'primary') {
        color = `text-${color}`;
    } else {
        color = `text-link`;
    }
    return (
        <motion.div 
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}>
            <ReactLink to={to} className={`${color} hover:underline font-mont leading-none ${className}`}>{children}</ReactLink>
        </motion.div>
    );
}