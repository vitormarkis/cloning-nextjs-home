import Button from "../../atoms/Button";
import GithubIcon from "../../icons/GithubIcon";

export default function HeaderButtons() {
    return (
        <div id="header-buttons" className="flex items-center [&_*]:ml-3">
          <Button outlined>Feedback</Button>
          <Button>Learn</Button>
          <GithubIcon />
        </div>
    )
}