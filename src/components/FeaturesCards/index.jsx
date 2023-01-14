import { useEffect, useState } from "react";
import ContainerTitle from "../ContainerTitle";
import CardContainer from "../CardContainer";
import Card from "../Card";

function FeaturesCards() {
  const [pageinfo, setPageinfo] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/features");
      const data = await res.json();
      setPageinfo(data);
    })();
  }, []);

  return (
    <div>
      <ContainerTitle title={pageinfo.title} text={pageinfo.text} />
      <CardContainer className="flex flex-row gap-7 flex-wrap">
        {pageinfo.cards && pageinfo.cards.map((card, idx) => {
          console.log(card)
          return <Card {...card}/>
})}
      </CardContainer>
    </div>
  );
}

export default FeaturesCards;
