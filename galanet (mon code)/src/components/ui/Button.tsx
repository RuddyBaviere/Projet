import type { ReactNode } from "react"

interface Props {
    link? : boolean,
    text? : string,
    icon? : ReactNode,
    href? : string,
}

const Button = ({link, text, icon, href} : Props) => {
    return(
        <>
            {
                link ?
                    href? 
                    <a href={href} className='bg-purple-600  text-slate-200 flex items-center gap-4 px-6 py-3 rounded-lg w-fit text-sm'>
                        {icon} {text}
                    </a>
                    :
                    <button className='bg-purple-600 text-slate-200 flex items-center gap-4 p-4 rounded-lg w-fit cursor-pointer text-sm'>
                        {icon}
                    </button>
                :
                <button className="w-9 h-9 rounded-lg flex items-center justify-center bg-purple-600 cursor-pointer text-slate-200 text-sm">
                    {icon}
                </button>
            }
        </>
    )
}

export default Button