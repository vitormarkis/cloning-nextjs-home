import Button from "../Button";
import GithubIcon from "../GithubIcon";

export default function HeaderButtons() {
    return (
        <div id="header-buttons" className="flex items-center [&_*]:ml-3">
          <Button className="border border-neutral-300 bg-white text-neutral-500 hover:border-black">
            Feedback
          </Button>
          <Button className="border border-blue-600 bg-blue-600 font-medium text-white hover:bg-white hover:border-blue-600 hover:border hover:text-blue-600">Learn</Button>
          <GithubIcon />
        </div>
    )
}