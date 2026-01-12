import { ScanEye } from "lucide-react";
import { Formulaire } from "../components/form/Formulaire";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import Logo from "../components/ui/Logo";

export const LoginUser = () => {
  return (
<main className="py-3 px-3 md:px-5 bg-slate-900 text-sm">
        <div className="w-full max-w-360 mx-auto grid gap-8">
        <Logo/>
        <div className="flex justify-center items-center">
        <Formulaire>
          <h1 className="text-2xl font-bold">Accès Terminal</h1>
          <div className="flex gap-4 w-full justify-between">
            <button className="grid justify-center bg-slate-700 p-2 rounded-lg border border-slate-400 w-1/2 cursor-pointer"><img src="./googleLogo.svg" alt="Logo de google" /></button>
            <button className="grid justify-center bg-slate-700 p-2 rounded-lg border border-slate-400 w-1/2 cursor-pointer"><img src="./facebookLogo.svg" alt="Logo de facebook" /></button>
          </div>
          <p>Ou</p>
          <div className="grid gap-6 w-full">
            <div>
            <p className="text-xs text-slate-50">Fréquence de contact</p>
            <Input />
            </div>
            <div>
            <p className="text-xs text-slate-50">Clé de cryptage</p>
            <Input icon={<ScanEye />} mdpLost/>
            </div>
          </div>
          <Button fullWidth text = "Etablir la liaison" className="flex justify-center cursor-pointer"/>
          <p className="text-xs">Vous n'avez pas de compte ? <a href="" className="font-bold text-xs">Inscription</a></p>
        </Formulaire> 
        </div>
      </div>
    </main>
  );
};
