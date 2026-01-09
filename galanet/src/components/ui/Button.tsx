import type { ReactNode } from "react"

interface Props {
    outline? : boolean,
    icon? : ReactNode,
    text?: string,
    link?: string,
    href?:boolean,
    onClick?: ()=>void
}

export const Button = ({outline, icon, text, link,href, onClick} : Props) => {
    return (
        <>
        {
            href ?
            
            <a href={link} className={`flex items-center gap-2 py-4 px-5 text-slate-50 w-fit rounded-lg ${outline ? "border border-slate-50" : "bg-purple-600"} max-md:w-full text-center`}>{icon}{text}</a>
            
            :
            
            <button className="text-white" onClick={onClick}>{icon}</button>
        }
        </>
        )
}
