import { motion } from "framer-motion";

export default function BigTitle({ children }) {
  return <motion.h1 className="font-extrabold text-center mb-8
  text-6xl lg:text-8xl
  tracking-tighter
  "
  initial={{y: 100, opacity: 0}}
  animate={{y: 0, opacity: 1}}
  transition={{duration: 1}}
  >{children}</motion.h1>;
}
