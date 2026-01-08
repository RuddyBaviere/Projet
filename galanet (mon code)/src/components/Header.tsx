import Button from "./ui/Button";
import { Rocket } from "lucide-react";
export const Header = () => {
  return (
    <header className="bg-[url(./Header.png)] py-16 bg-center bg-cover bg-no-repeat grid justify-center items-center h-98 rounded-2xl">
      <div className="grid justify-center items-center text-center gap-4 w-5xl">
        <h1 className="text-4xl text-white font-bold">
          Écouler votre stock. Sans laisser de traces.
        </h1>
        <p className="text-white text-sm">
          Décriver votre cargaison, fixez votre pris et attendez que les
          acheteurs mordent à l'hameçon
        </p>
        <div className="grid justify-center items-center">
          <Button
            link
            href="/"
            text="Lancer la transaction"
            icon={<Rocket />}
          />
        </div>
      </div>
    </header>
  );
};
