import { LinksImg } from "./LinksImg";

export const SectionImg = () => {
  const linksImg = [
    {
      text: "",
      href: "/",
      src: "./Cargaisons.png"
    },
    {
      text: "",
      href: "/",
      src: "./Vaisseaux.png"
    },
    {
      text: "",
      href: "/",
      src: "./Arsenal.png"
    },
    {
      text: "",
      href: "/",
      src: "./Composants.png"
    },
    {
      text: "",
      href: "/",
      src: "./Reliques.png"
    },
  ];
  return (
        <div className="flex items-center gap-6 justify-between mb-2">
            {
                linksImg.map((linkImg, index) => (
                    <LinksImg key={index} text={linkImg.text} href={linkImg.href} src={linkImg.src}/>
                ))
            }
        </div>
    )
};