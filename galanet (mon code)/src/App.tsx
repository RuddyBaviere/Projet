import { Header } from "./components/Header";
import { SectionImg } from "./components/LinksImage/SectionImg";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <main className="py-3 bg-slate-900">
      <div className="w-full max-w-360 mx-auto grid gap-8">
        <Navbar />
        <Header/>
        <SectionImg/>
      </div>
    </main>
  );
}

export default App;
