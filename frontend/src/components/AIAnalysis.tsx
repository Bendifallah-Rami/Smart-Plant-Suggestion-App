import { Sparkles, CheckCircle2, Leaf, Thermometer, Award } from "lucide-react";
import type { PlantData, WeatherData } from "@/pages/Index";

const SEASON_LABELS: Record<string, string> = {
  printemps: "🌸 Spring — Perfect for starting seeds",
  été: "☀️ Summer — Great for heat-loving plants",
  automne: "🍂 Autumn — Ideal for root vegetables",
  hiver: "❄️ Winter — Focus on cold-hardy plants",
};

interface AIAnalysisProps {
  city?: string;
  plants?: PlantData[];
  weather?: WeatherData | null;
  totalMatched?: number;
}

const AIAnalysis = ({ city, plants = [], weather, totalMatched = 0 }: AIAnalysisProps) => {
  const topPlant = plants[0];
  const seasonTip = weather ? (SEASON_LABELS[weather.season] || weather.season) : null;

  return (
    <div className="bg-[#F9FFF9] border border-[#2D402D]/10 rounded-3xl md:rounded-[40px] p-5 md:p-10 mb-12 md:mb-16 shadow-sm max-w-5xl mx-auto animate-in fade-in duration-700">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-white p-2.5 rounded-xl shadow-sm border border-[#2D402D]/10 shrink-0">
          <Sparkles className="text-[#8B9D44]" size={24} md-size={28} />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D402D] leading-tight">
          AI Analysis for <span className="capitalize">{city || "your location"}</span>:
        </h2>
      </div>

      <div className="space-y-6 md:ml-4">
        {/* Matched count */}
        <div className="flex items-start gap-3 text-base md:text-lg font-serif text-[#2D402D]">
          <CheckCircle2 className="text-[#8B9D44] shrink-0 mt-1" size={18} md-size={20} />
          <p className="leading-relaxed">
            Analyzed <strong>{totalMatched}</strong> plants against current weather in{" "}
            <span className="font-bold capitalize">{city || "this area"}</span>.
            Showing top <strong>{plants.length}</strong>.
          </p>
        </div>

        {/* Top recommendation */}
        {topPlant && (
          <div className="flex items-start gap-3">
            <Award className="text-[#8B9D44] shrink-0 mt-1" size={18} md-size={20} />
            <p className="text-base md:text-lg font-serif text-[#2D402D] italic">
              🏆 Top recommendation:{" "}
              <strong className="text-leaf">{topPlant.name}</strong> with a{" "}
              <strong>{topPlant.match_score}% match</strong>. {topPlant.description}
            </p>
          </div>
        )}

        {/* Temperature info */}
        {weather && (
          <div className="flex items-start gap-3">
            <Thermometer className="text-red-500 shrink-0 mt-1" size={18} md-size={20} />
            <p className="text-base md:text-lg font-serif text-[#2D402D] italic">
              🌡️ Current temperature: <strong className="text-leaf">{weather.temperature}°C</strong>,
              humidity: <strong>{weather.humidity}%</strong>
            </p>
          </div>
        )}

        {/* Season tip */}
        {seasonTip && (
          <div className="flex items-start gap-3">
            <Leaf className="text-[#2D402D] shrink-0 mt-1" size={18} md-size={20} />
            <p className="text-base md:text-lg font-serif text-[#2D402D] italic">
              {seasonTip}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAnalysis;