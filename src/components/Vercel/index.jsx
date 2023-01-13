import VercelLogo from "../VercelLogo";
import DeployVercel from "../DeployVercel";

export default function Vercel() {
  return (
    <div className="w-screen h-12 bg-black">
      <div className="h-full mx-auto max-w-5xl flex justify-between items-center">
        <VercelLogo />
        <DeployVercel />
      </div>
    </div>
  );
}
