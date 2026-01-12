import { Link } from "react-router"
import { links } from "../../data/link"
import { useState } from 'react';
import { MegaMenu } from "./MegaMenu";

export const MainNav = () => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <>
        <nav className="overflow-x-auto xl:overflow-x-visible scrollbar-hide">
            <ul className='flex items-center whitespace-nowrap gap-3 py-4 xl:gap-0 xl:py-0 xl:justify-between'>
                <div className="xl:hidden">
                    <a href="" className="text-slate-50 border border-purple-600 bg-purple-600/25 p-3 rounded-full">Voir plus</a>
                </div>
                {
                    links.map((link, index) => (
                        <div  onMouseEnter={() => setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
                        <li key={index}>
                            <Link to={link.href} className={` text-slate-50 p-3 border border-slate-400 rounded-full xl:p-0 xl:border-0 xl:rounded-none`}>
                                {link.text}
                            </Link>
                        </li>
                        </div>
                    ))
                }
            </ul>
                {isHovering && <MegaMenu/>}
        </nav>
        </>
    )
}
