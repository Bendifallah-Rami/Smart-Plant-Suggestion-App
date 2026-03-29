import { Thermometer, Droplets, Sun, Award } from "lucide-react";

interface PlantCardProps {
  name: string;
  category: string;
  temperature: string;
  water: string;
  sunlight: string;
  matchScore?: number;
  difficulty?: string;
}

const CATEGORY_EMOJIS: Record<string, string> = {
  légume: "🥦",
  aromatique: "🌿",
  fleur: "🌸",
  plante_grasse: "🌵",
  arbre_fruitier: "🍊",
};

const DIFFICULTY_COLORS: Record<string, string> = {
  facile: "bg-green-100 text-green-700",
  moyen: "bg-yellow-100 text-yellow-700",
  difficile: "bg-red-100 text-red-700",
};

const PlantCard = ({ name, category, temperature, water, sunlight, matchScore, difficulty }: PlantCardProps) => {
  const emoji = CATEGORY_EMOJIS[category] || "🌱";
  const diffColor = difficulty ? (DIFFICULTY_COLORS[difficulty] || "bg-gray-100 text-gray-600") : "";

  return (
    <div className="bg-white p-5 md:p-8 rounded-[35px] shadow-[0_20px_50px_rgba(45,64,45,0.05)] border border-[#2D402D]/5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(45,64,45,0.12)] relative overflow-hidden h-full">
      {/* Match score badge */}
      {matchScore !== undefined && (
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#D8F3DC] text-[#2D402D] text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          <Award size={10} md-size={12} />
          {matchScore}%
        </div>
      )}

      {/* Emoji icon */}
      <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 bg-[#F1F8E9] rounded-full text-4xl md:text-6xl shadow-inner animate-pulse-slow">
        {emoji}
      </div>

      {/* Name */}
      <h3 className="font-serif text-xl md:text-2xl font-bold text-[#2D402D] mb-2 capitalize leading-tight">{name}</h3>

      {/* Difficulty badge */}
      {difficulty && (
        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 ${diffColor}`}>
          {difficulty}
        </span>
      )}

      {/* Stats */}
      <div className="w-full space-y-4 px-1 mt-auto">
        <div className="flex items-center gap-3">
          <div className="bg-red-50 p-1.5 rounded-lg shrink-0">
            <Thermometer className="text-red-500" size={16} md-size={18} />
          </div>
          <span className="font-serif text-xs md:text-sm text-[#2D402D] font-medium text-left leading-snug">{temperature}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-1.5 rounded-lg shrink-0">
            <Droplets className="text-blue-400 fill-blue-400" size={16} md-size={18} />
          </div>
          <span className="font-serif text-xs md:text-sm text-[#2D402D] font-medium text-left leading-snug">{water}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-yellow-50 p-1.5 rounded-lg shrink-0">
            <Sun className="text-yellow-400 fill-yellow-400" size={16} md-size={18} />
          </div>
          <span className="font-serif text-xs md:text-sm text-[#2D402D] font-medium text-left leading-snug">{sunlight}</span>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
