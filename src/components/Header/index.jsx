import { motion } from "framer-motion";

import HeaderButtons from "../HeaderButtons";
import Logo from "../Logo";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <motion.header
      className="flex items-center justify-between h-20"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <Logo />
      <Navigation />
      <HeaderButtons />
    </motion.header>
  );
}
