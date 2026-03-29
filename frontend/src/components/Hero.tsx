import { useState } from "react";
import { Search, MapPin, Loader2 } from "lucide-react";
import monsteraImg from "@/assets/monstera.png";

const Hero = ({ onSearch, isLoading = false }: { onSearch: (city: string) => void; isLoading?: boolean }) => {
  const [cityInput, setCityInput] = useState("");

  const handleButtonClick = () => {
    if (cityInput.trim() !== "") {
      onSearch(cityInput);
    } else {
      alert("Please enter a city name first! 🌿");
    }
  };

  return (
    <section className="relative bg-background min-h-[70vh] md:min-h-[85vh] flex items-center pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#8B9D44]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#2D402D]/5 blur-[70px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="flex flex-col space-y-8 md:space-y-10 text-center lg:text-left items-center lg:items-start">
            <div className="space-y-4 md:space-y-6">
              <h1
                className="font-serif font-bold text-[#2D402D] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(32px, 8vw, 64px)" }}
              >
                Empowering <br />
                <span className="text-[#8B9D44]">Green Cities</span> <br />
                <span className="relative">
                  with AI Intelligence
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#8B9D44]/30 rounded-full hidden lg:block"></span>
                </span>
              </h1>

              <p
                className="font-serif text-[#556B55] max-w-xl leading-relaxed mx-auto lg:mx-0"
                style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}
              >
                Optimize your urban garden using real-time weather data and AI
                analysis. GreenGuide helps you choose the most resilient plants
                for your specific location. 🌱
              </p>
            </div>

            <div className="w-full max-w-xl group">
              <div className="flex flex-col sm:flex-row items-center gap-3 bg-white border border-[#2D402D]/10 p-2 md:p-2.5 rounded-2xl md:rounded-[28px] shadow-lg shadow-[#2D402D]/5 transition-all duration-300 focus-within:border-[#8B9D44]/40">
                <div className="relative flex-1 w-full">
                  <MapPin
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D402D]/30 group-focus-within:text-[#8B9D44]"
                    size={20}
                  />
                  <input
                    type="text"
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                    placeholder="Enter your city..."
                    className="w-full h-12 md:h-14 pl-11 pr-4 text-base md:text-lg bg-transparent border-none focus:ring-0 text-[#2D402D] placeholder:text-[#2D402D]/30 font-serif font-medium"
                  />
                </div>

                <button
                  onClick={handleButtonClick}
                  disabled={isLoading}
                  className="bg-[#2D402D] hover:bg-[#1b2b1b] text-white px-6 md:px-8 h-12 md:h-14 rounded-xl md:rounded-[22px] font-serif font-bold text-base md:text-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-[#2D402D]/20 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
                  {isLoading ? "Analyzing..." : "Get recommendations"}
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            <div className="absolute w-[80%] h-[80%] bg-[#8B9D44]/20 blur-[80px] rounded-full animate-pulse" />
            <img
              src={monsteraImg}
              alt="Monstera"
              className="relative z-10 w-full max-w-[450px] lg:max-w-[600px] drop-shadow-2xl animate-float transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
