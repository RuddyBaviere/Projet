import { Logo } from "./nav/Logo"
import { Research } from "./nav/Research"
import Button from "./ui/Button"
import { DiamondPlus } from 'lucide-react';
import UserButton from "./ui/UserButton";
import { Nav } from "./nav/Nav";


export const Navbar = () => {
    return(
        <nav className="grid gap-2">
            <div className="py-3 flex justify-between items-center gap-12">
            <Logo/>
            <Research/>
            <div className="flex gap-5 w-1/3 justify-end">
                <UserButton href="/" text="Etablir la liaison"/>
                <Button link href="/" icon={<DiamondPlus/>}  text="Vider sa soute"/>
            </div>
            </div>
            <div>
                <Nav/>
            </div>
        </nav>
    )
}