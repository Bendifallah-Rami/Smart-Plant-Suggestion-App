import { Leaf } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center py-6 md:py-10 bg-white border-b border-olive/10"> 
        <Leaf className="text-olive mr-2 md:mr-3" size={32} /> 
        <span className="font-serif text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
          <span className="text-olive">GREEN</span>
          <span className="text-[#2D402D]">GUIDE</span>
        </span>
      </div>

      <nav className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-border/40 overflow-x-auto no-scrollbar">
        <div className="container mx-auto py-3 px-4 min-w-max md:min-w-0">
          <ul className="flex items-center justify-center gap-x-6 md:gap-14 text-xs md:text-sm font-bold text-foreground/80 lowercase tracking-widest font-serif"> 
            <li>
              <button 
                onClick={() => scrollToSection('home')} 
                className="hover:text-olive transition-all uppercase px-2 py-1"
              >
                HOME
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-olive transition-all uppercase px-2 py-1"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('weather')} 
                className="hover:text-olive transition-all uppercase px-2 py-1 flex items-center gap-1"
              >
                Weather <span className="hidden sm:inline">Analysis</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('plants')} 
                className="hover:text-olive transition-all uppercase px-2 py-1 flex items-center gap-1"
              >
                <span className="hidden sm:inline">Explore</span> Plants
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
