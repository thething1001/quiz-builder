import Link from "next/link";
import { Button } from "./ui/button";
import ThemeSwitcher from "./theme-switcher";

const Header = () => {
  return (
    <header className="flex flex-row py-2 md:py-4 md:px-6 gap-4 items-center justify-between sticky top-0 bg-background">
      <Button variant="link" className="p-0">
        <Link href={"/"} className="flex flex-row gap-2 items-center">
          <h2 className="font-semibold text-lg">Quiz Builder App</h2>
        </Link>
      </Button>

      <div className="flex flex-row gap-4 items-center">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
