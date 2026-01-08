import type { ReactNode } from "react";

interface Props {
  text?: string;
  icon?: ReactNode;
  href?: string;
}

const UserButton = ({ text, icon, href }: Props) => {
  return (
    <>
      <a
        href={href}
        className=" text-slate-200 flex items-center gap-4 px-5 py-4 rounded-lg w-fit border border-slate-400 text-sm"
      >
        {icon} {text}
      </a>
    </>
  );
};

export default UserButton;
