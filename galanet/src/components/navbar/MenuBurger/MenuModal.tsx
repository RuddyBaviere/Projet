import { DiamondPlus } from "lucide-react";
import { Button } from "../../ui/Button";
import { MainNav } from "../MainNav";


const MenuModal = () => {
  return (
    <div className=" grid items-center bg-slate-900 w-full h-full absolute right-0 z-50 p-4">
      <div className="grid items-center h-fit justify-center gap-2 text-center">
        <Button href icon={<DiamondPlus />} text="Vider sa soute" link="/" />
        <Button href outline text="Établir la liaison" link="/" />
      </div>
      <div className="grid gap-6 text-slate-400">
        <p>Parcourir</p>
        <MainNav menuBurger/>
      </div>
    </div>
  );
};

export default MenuModal;
