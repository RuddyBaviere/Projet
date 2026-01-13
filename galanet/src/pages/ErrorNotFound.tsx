import Logo from "../components/ui/Logo";
import { Button } from "../components/ui/Button";
import { Rocket } from "lucide-react";

const ErrorNotFound = () => {
  return (
    <main className="py-3 px-3 md:px-5 bg-slate-900 text-sm h-screen max-lg:h-full">
      <div className="w-full max-w-360 mx-auto grid gap-8 py-6 text-white">
        <Logo />
        <div className="flex justify-center items-center py-25">
          <div className="grid items-center justify-center text-center w-2/3 gap-14">
            <div>
              <h1 className="text-9xl">404</h1>
              <p className="text-3xl">Page not found</p>
            </div>
            <div className="grid text-center gap-4">
              <p>
                Secteur inconnu. Il n'y a rien ici à part des débris de moteurs.
                Vos coordonnées ont été brouillées par une tempête ionique.
                Retournez vite au Hub avant que les patrouilles ne vous repèrent
                !
              </p>
              <div className="flex justify-center">
                <Button
                  link="/"
                  icon={<Rocket />}
                  text="Retourner vite au Hub"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <p>
                Des questions sur le butin ? Une suggestion pour améliorer le
                réseau ? Ouvrez un canal de communication sur notre ligne
                sécurisée :
              </p>
              <div className="flex justify-center">
                <button className=" w-fit rounded-full bg-slate-800 px-14 py-5 text-center">
                  support@galanet.net
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorNotFound;
