import { motion } from "framer-motion"

export default function TextAn({children}) {
    return (
        <motion.p className="text-lg text-neutral-500 mb-10"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.2, delay: 0.6}}
        >{children}</motion.p>
    )
}

