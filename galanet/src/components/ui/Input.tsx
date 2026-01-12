import type { ReactNode } from "react";
interface InputProps {
  icon?: ReactNode;
  mdpLost?: boolean
}

export const Input = ({ icon, mdpLost }: InputProps) => {
  return (
    <>
      <div className='flex items-center gap-2 text-slate-50 bg-slate-700 p-2 w-full rounded-lg border border-slate-400'>
        <input type="text" className="flex-1 outline-none bg-transparent"/>
        <div>
            {icon}
        </div>
      </div>
        {
            mdpLost?
            <a href="" className="text-xs text-slate-50">Vous avez oublié votre clé de cryptage?</a>
            :
            null
        }
    </>
  );
};
