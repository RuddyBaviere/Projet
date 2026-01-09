import { MainNav } from "./MainNav";
import { TopBar } from "./TopBar";
export const Navbar = () => {
  return (
    <div className="grid gap-5">
      <TopBar />
      <MainNav>
        <li className="lg:hidden">
          <button className="text-slate-50 bg-purple-600/25 border border-purple-600 p-3 rounded-full">Voir tout
          </button>
        </li>
      </MainNav>
    </div>
  );
};
