import { Facebook, Instagram, Linkedin, Leaf } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    if (id === "ai-assistant") {
      const event = new CustomEvent("openChat");
      window.dispatchEvent(event);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#A7B29F] py-12 md:py-16 px-6 mt-16 md:mt-20 border-t border-[#2D402D]/10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 text-[#2D402D]">
        <div className="flex flex-col items-center sm:items-start gap-5">
          <div className="flex items-center gap-3">
            <Leaf 
              size={32} 
              className="text-[#2D402D]" 
              fill="#6B8E23" 
            />
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter uppercase text-[#2D402D]">
              GREENGUIDE
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed max-w-[300px] font-serif opacity-90 text-center sm:text-left">
            Helping you choose the right plants the smart way.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-5">
          <h4 className="text-lg md:text-xl font-bold font-serif uppercase tracking-wider underline decoration-[#2D402D]/20 underline-offset-8">
            Navigation
          </h4>
          <nav className="flex flex-col items-center sm:items-start gap-3 uppercase text-xs md:text-sm font-bold">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-white transition-all uppercase tracking-widest"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-white transition-all uppercase tracking-widest"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("plants")}
              className="hover:text-white transition-all uppercase tracking-widest"
            >
              Explore plants
            </button>
            <button
              onClick={() => scrollToSection("weather")}
              className="hover:text-white transition-all uppercase tracking-widest"
            >
              Weather Analysis
            </button>

            <button
              onClick={() => scrollToSection("ai-assistant")}
              className="hover:text-white transition-all uppercase tracking-widest"
            >
              AI Assistant
            </button>
          </nav>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-5 sm:col-span-2 lg:col-span-1">
          <h4 className="text-lg md:text-xl font-bold font-serif uppercase tracking-wider underline decoration-[#2D402D]/20 underline-offset-8">
            Contact Us
          </h4>
          <div className="flex flex-col items-center sm:items-start gap-3 text-sm md:text-base font-serif">
            <span className="font-bold text-lg">+213 567 478 930</span>
            <a href="mailto:Greenguidell@gmail.com" className="hover:text-white transition-colors">
              Greenguidell@gmail.com
            </a>
            <span className="opacity-80">450, Alger, Algiers.</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20 pt-10 border-t border-[#2D402D]/20 flex flex-col items-center gap-8">
        <p className="text-center font-serif italic text-xl text-[#2D402D]">
          All rights reserved | Made for smarter and greener living.
        </p>

        <div className="flex gap-5">
          <a
            href="#"
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            <Facebook size={22} fill="currentColor" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            <Instagram size={22} />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            <Linkedin size={22} fill="currentColor" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl font-bold text-2xl font-serif"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
