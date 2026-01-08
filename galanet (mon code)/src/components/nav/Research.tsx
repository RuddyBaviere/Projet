import { Telescope } from "lucide-react";
import Button from "../ui/Button";
import { ArrowBigRight } from 'lucide-react';

export const Research = () => {
  return (
    <div className="flex rounded-lg items-center bg-slate-800 text-white w-5/6 gap-2 py-2 px-2 h-13 ">
      <Telescope className="" />
      <input type="text" placeholder="Fouiller dans les archives des contrebandiers" className="outline-none w-full text-sm"></input>
      <Button icon= {<ArrowBigRight/>}/>
    </div>
  );
};
