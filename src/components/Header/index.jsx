import HeaderButtons from "../HeaderButtons";
import Logo from "../Logo";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20">
      <Logo />
      <Navigation />
      <HeaderButtons />
    </header>
  );
}
