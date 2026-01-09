import { DiamondPlus } from "lucide-react";
import { Button } from "../../ui/Button";
import { MainNav } from "../MainNav";

const MenuModal = () => {
  return (
    <div className="flex flex-col gap-10 bg-slate-900 w-full min-h-screen absolute right-0 z-50 p-4 pt-12 text-base">
      <div className="grid gap-3">
        <Button
          menuBurger
          href
          icon={<DiamondPlus />}
          text="Vider sa soute"
          link="/"
        />
        <Button menuBurger href outline text="Établir la liaison" link="/" />
      </div>
      <div className="grid gap-6 text-slate-400">
        <p>Parcourir</p>
        <MainNav menuBurger />
      </div>
    </div>
  );
};

export default MenuModal;
