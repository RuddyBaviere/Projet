import type { ReactNode } from "react"

interface FormProps {
    children : ReactNode
}
export const Formulaire = ({children} : FormProps) => {
    return(
        <form className="text-white w-lg flex flex-col items-center bg-slate-800 py-10 px-16 gap-6 ">
            {children}
        </form>
    )
}