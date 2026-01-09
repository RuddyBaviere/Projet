import type { ReactNode } from "react";

interface Props {
  outline?: boolean;
  icon?: ReactNode;
  text?: string;
  link?: string;
  href?: boolean;
  onClick?: () => void;
  menuBurger?: boolean;
}

export const Button = ({
  outline,
  icon,
  text,
  link,
  href,
  onClick,
  menuBurger,
}: Props) => {
  return (
    <>
      {href ? (

          <a
            href={link}
            className={`flex items-center place-content-center gap-2 py-4 px-5 text-slate-50 rounded-lg ${
              outline ? "border border-slate-50" : "bg-purple-600"
            } ${menuBurger ? "w-full" : "w-fit"}`}
          >
            {icon}
            {text}
          </a>

      ) : (
        <button className="text-white" onClick={onClick}>
          {icon}
        </button>
      )}
    </>
  );
};
