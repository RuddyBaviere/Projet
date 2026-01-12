import { ScanEye } from "lucide-react";
import { Formulaire } from "../components/form/Formulaire";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import Logo from "../components/ui/Logo";
import { Link } from "react-router";

export const Register = () => {
  return (
    <main className="py-3 px-3 md:px-5 bg-slate-900 text-sm h-screen">
        <div className="w-full max-w-360 mx-auto grid gap-8 py-6">
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
          <Button link="" fullWidth text = "Générer l'identifiant" className="flex justify-center cursor-pointer"/>
          <p className="text-xs">Vous avez un compte ? <Link to="/login" className="font-bold text-xs">Connexion</Link></p>
        </Formulaire> 
        </div>
        </div>
      </main>
  );
};