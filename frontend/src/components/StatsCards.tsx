import { Trophy, Calendar, Droplets } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Top Recommendation",
      value: "Tomato",
      desc: "100% match with your climate.",
      icon: <Trophy className="text-[#8B9D44]" size={32} />,
      bgColor: "bg-[#F9FFF9]",
    },
    {
      title: "Best Season",
      value: "Spring",
      desc: "Perfect for starting seeds!",
      icon: <Calendar className="text-[#8B9D44]" size={32} />,
      bgColor: "bg-white",
    },
    {
      title: "Watering Tip",
      value: "Daily",
      desc: "Keep the soil moist but not wet.",
      icon: <Droplets className="text-[#8B9D44]" size={32} />,
      bgColor: "bg-[#F9FFF9]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-12 md:my-16">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`${item.bgColor} border border-[#2D402D]/10 p-6 md:p-8 rounded-[32px] shadow-sm flex flex-col items-center text-center transition-all hover:translate-y-[-8px] duration-500 hover:shadow-xl hover:shadow-[#2D402D]/5`}
        >
          <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-[#2D402D]/5 text-[#8B9D44]">
            {item.icon}
          </div>

          <h3 className="font-serif italic text-[#2D402D]/50 text-base md:text-lg mb-2">
            {item.title}
          </h3>

          <h2 className="font-serif font-bold text-[#2D402D] text-2xl md:text-3xl mb-3 leading-tight">
            {item.value}
          </h2>

          <p className="font-serif text-[#556B55] text-sm md:text-base leading-relaxed opacity-90">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
