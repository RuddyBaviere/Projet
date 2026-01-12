import { ScanEye } from "lucide-react";
import { Formulaire } from "../components/form/Formulaire";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import Logo from "../components/ui/Logo";

export const Register = () => {
  return (
    <main className="py-3 px-3 md:px-5 bg-slate-900 text-sm">
        <div className="w-full max-w-360 mx-auto grid gap-8">
        <Logo/>
        <div className="flex justify-center items-center">
        <Formulaire>
          <h1 className="text-2xl font-bold">Passe-droit</h1>
          <div className="grid gap-6 w-full">
            <div>
            <p className="text-xs text-slate-50">Alias de Contrebandier</p>
            <Input />
            </div>
            <div>
            <p className="text-xs text-slate-50">Fréquence de contact</p>
            <Input />
            </div>
            <div>
            <p className="text-xs text-slate-50">Clé de cryptage</p>
            <Input icon={<ScanEye />} mdpLost/>
            </div>
            <div>
            <p className="text-xs text-slate-50">Confirme ta clé de cryptage</p>
            <Input icon={<ScanEye />} mdpLost/>
            </div>
          </div>
          <Button fullWidth text = "Générer l'identifiant" className="flex justify-center cursor-pointer"/>
          <p className="text-xs">Vous avez un compte ? <a href="" className="font-bold text-xs">Connexion</a></p>
        </Formulaire> 
        </div>
        </div>
      </main>
  );
};