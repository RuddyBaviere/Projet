import type { ReactNode } from "react";
interface NavProps {
  children?: ReactNode,
  menuBurger?: boolean
}
export const MainNav = ({ children, menuBurger }: NavProps) => {
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
    },
  ];
  return (
    <nav className={menuBurger? "" : "grid max-lg:whitespace-nowrap max-lg: overflow-auto"}>
      <ul className={`${menuBurger? "grid gap-6" : "flex items-center justify-between max-lg:gap-3"}`}>
        {children}
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={`${menuBurger? "text-white" : "text-slate-50 max-lg:border max-lg:border-slate-400 max-lg:p-3 max-lg:rounded-full max-lg:block"}`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
