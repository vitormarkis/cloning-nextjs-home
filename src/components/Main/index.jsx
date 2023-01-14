import { motion } from "framer-motion";
import BigTitle from "../BigTitle";
import Text from "../Text";
import MainButtons from "../MainButtons";
import Container from "../Container";
import Labels from "../Labels";
import FeaturesCards from "../FeaturesCards";
import { useEffect, useState } from "react";

export default function Main() {
  const [pageinfo, setPageinfo] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/home");
      const data = await res.json();
      setPageinfo(data);
      console.log(pageinfo.title)
    })();
  }, []);

  return (
    <div className="flex justify-center items-center py-32">
      <div className="flex flex-col">
        <BigTitle>{pageinfo.title}</BigTitle>
        <Text>{pageinfo.text}</Text>
        <motion.div className="
        flex flex-col xs:flex-row items-center justify-center gap-10 mb-8"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4, delay: 0.8}}
        >
          <MainButtons />
        </motion.div>
        <Labels />
        <Container />
        <FeaturesCards />
      </div>
    </div>
  );
}
