import { Button } from "../ui/Button";
import Logo from "../ui/Logo";
import { SearchBar } from "../ui/SearchBar";
import { DiamondPlus } from "lucide-react";
import MenuBurger from "./MenuBurger/MenuBurger";
export const TopBar = () => {
  return (
    <>
      <div className="py-3 flex items-center gap-12 max-lg:justify-between ">
        <a href="/">
          <Logo />
        </a>
        <div className="md:hidden">
          <MenuBurger/>
        </div>
        <div className="flex-1 max-lg:hidden">
          <SearchBar />
        </div>
        <div className="flex items-center gap-5 max-md:hidden">
          <Button href outline text="Établir la liaison" link="/" />
          <Button href icon={<DiamondPlus />} text="Vider sa soute" link="/" />
        </div>
      </div>
      <div className="flex-1 lg:hidden">
        <SearchBar />
      </div>
    </>
  );
};
