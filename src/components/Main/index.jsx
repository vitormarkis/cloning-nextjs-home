import BigTitle from "../BigTitle";
import Text from "../Text";
import MainButtons from "../MainButtons";
import Container from "../Container";
import Labels from "../Labels";
import FeaturesCards from "../FeaturesCards";

export default function Main() {
  return (
    <div className="flex justify-center items-center py-32">
      <div className="flex flex-col">
        <BigTitle>The React Framework for Production</BigTitle>
        <Text>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </Text>
        <div className="flex flex-row justify-center gap-10 mb-8">
          <MainButtons />
        </div>
        <Labels />
        <Container />
        <FeaturesCards />
      </div>
    </div>
  );
}
