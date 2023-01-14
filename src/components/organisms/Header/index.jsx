import { motion } from "framer-motion";

import HeaderButtons from "../../molecules/HeaderButtons";
import Logo from "../../atoms/Logo";
import Navigation from "../../molecules/Navigation";

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
