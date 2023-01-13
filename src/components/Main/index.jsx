import BigTitle from "../BigTitle";

export default function Main() {
  return (
    <div className="flex justify-center items-center py-32">
      <div className="flex flex-col">
        <BigTitle>The React Framework for Production</BigTitle>
        <p className="text-lg text-neutral-500 mb-10">
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </p>
      </div>
    </div>
  );
}
