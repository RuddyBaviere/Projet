import { Links } from "./Links";

export const Nav = () => {
  const links = [
    {
      text: "Vaisseaux & Engins",
      href: "/",
    },
    {
      text: "Armurerie",
      href: "/",
    },
    {
      text: "Apparence",
      href: "/",
    },
    {
      text: "Ferraille & Droïdes",
      href: "/",
    },
    {
      text: "Ravitaillement & Médic-packs",
      href: "/",
    },
    {
      text: "Cyber-matériel & Cryptage",
      href: "/",
    },
    {
      text: "Reliques & Trésors Interdits",
      href: "/",
    },
    {
      text: "Kits de Survie & Exploration",
      href: "/",
    }
  ];
  return (
        <ul className="flex items-center gap-10 justify-between text-white text-sm">
            {
                links.map((link, index) => (
                    <Links key={index} text={link.text} href={link.href}/>
                ))
            }
        </ul>
    )
};