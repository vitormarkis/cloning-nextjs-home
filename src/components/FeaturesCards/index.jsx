import ContainerTitle from "../ContainerTitle";
import CardContainer from "../CardContainer";
import Card from "../Card";

function FeaturesCards() {
  return (
    <div>
      <ContainerTitle
        title="The Web SDK"
        text="Next.js has all the tools you need to make the Web. Faster."
      />
      <CardContainer className="flex flex-row gap-7 flex-wrap">
        <Card
          title="Image Optimization"
          text="<Image> and Automatic Image Optimization with instant builds."
        />
        <Card
          title="Internationalization"
          text="Built-in Domain & Subdomain Routing and Automatic Language detection."
        />
        <Card
          title="Next.js Analytics"
          text="A true lighthouse score based on real visitor data & page-by-page insights"
        />
        <Card
          title="Zero Config"
          text="Automatic compilation and bundling. Optimized for production from the start."
        />
        <Card
          title="Hybrid: SSG and SSR"
          text="Pre-render pages at build time (SSG) or request time (SSR) in a single project."
        />
        <Card
          title="Incremental Static Regeneration"
          text="Add and update statically pre-rendered pages incrementally after build time."
        />
        <Card
          title="TypeScript Support"
          text="Automatic TypeScript configuration and compilation."
        />
        <Card
          title="Fast Refresh"
          text="Fast, reliable live-editing experience, as proven at Facebook scale."
        />
      </CardContainer>
    </div>
  );
}

export default FeaturesCards;
