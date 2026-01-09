import { Button } from "../ui/Button"
import { Rocket } from 'lucide-react';

export const Header = () => {
    return (
        <div className="bg-[url(header.png)] bg-cover bg-center rounded-2xl min-h-98.25 flex flex-col items-center justify-center text-slate-50 gap-4 relative max-md:min-h-48 max-md:p-8">
            <h1 className="text-4xl font-bold z-10 max-md:text-2xl max-md:text-center">Écoulez votre stock. Sans laisser de traces.</h1>
            <h2 className="z-10 max-md:hidden">Décrivez votre cargaison, fixez votre prix et attendez que les acheteurs mordent à l'hameçon.</h2>
            <div className="z-10">
                <Button href icon={<Rocket/>} text="Lancer la transaction" link="/"/>
            </div>
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 rounded-2xl"></div>
        </div>
    )
}
