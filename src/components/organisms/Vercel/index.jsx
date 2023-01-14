import VercelLogo from "../../icons/VercelLogo";
import DeployVercel from "../../atoms/DeployVercel";

export default function Vercel() {
  return (
    <div className="w-full h-12 bg-black">
      <div className="px-4 md:px-8 h-full mx-auto max-w-5xl flex justify-between items-center">
        <VercelLogo />
        <DeployVercel />
      </div>
    </div>
  );
}
