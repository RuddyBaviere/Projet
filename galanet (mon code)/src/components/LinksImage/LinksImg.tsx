interface Props {
  text: string;
  href: string;
  src: string
}

export const LinksImg = ({ text, href, src }: Props) => {
  return <a href={href}><img src={src} alt={text} className="rounded-lg"/></a>;
};
