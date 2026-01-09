import { useState } from "react";
import {Button} from "../../ui/Button";
import { Menu } from "lucide-react";
import MenuModal from "./MenuModal";
const MenuBurger = () => {

    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

    const handleClick = () => {
        setOpenBurgerMenu(!openBurgerMenu)
    }

    return (
        <div className="w-fit">
            <Button icon={<Menu/>} onClick={handleClick}/>
            {
                openBurgerMenu && <MenuModal/>
            }
        </div>
    )
}

export default MenuBurger