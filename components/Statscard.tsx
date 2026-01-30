import Image from "next/image";

interface Props {
  title: string;
  value: number;
  iconSrc: string;
  trend?: string;
  trendColor?: string; // New prop to control the color
}

export default function StatsCard({
  title,
  value,
  iconSrc,
  trend,
  trendColor = "text-green-600", // Default color if none is provided
}: Props) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm sm:w-56 w-full transition-all hover:shadow-md mt-4">
      {/* Top Row: Title and Image side-by-side */}
      <div className="flex justify-between  items-start">
        <p className="text-gray-500 text-sm font-medium leading-tight max-w-[70%]">
          {title}
        </p>

        {/* Icon Wrapper */}
        <div className="p-2 bg-blue-50 rounded-lg cursor-pointer hover:scale-110 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
          <Image
            src={iconSrc}
            alt={title}
            width={24}
            height={24}
            className="opacity-90"
          />
        </div>
      </div>

      {/* Value Row */}
      <div className="">
        <h3 className="text-3xl font-bold text-slate-800">{value}</h3>

        {/* Optional Trend Text - Now using the trendColor prop */}
        {trend && (
          <p className={`text-[12px] mt-1 font-medium ${trendColor}`}>
            {trend}
          </p>
        )}
      </div>
    </div>
  );
}
