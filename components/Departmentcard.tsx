interface DeptProps {
  name: string;
  percentage: number;
  statusText: string;
}

export default function DepartmentCard({
  name,
  percentage,
  statusText,
}: DeptProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm sm:w-60 flex flex-col gap-4 sm:mt-0 mt-6">
      <div className="flex justify-between items-center">
        <h6 className="font-bold text-slate-800">{name}</h6>
        <span className="font-bold text-slate-800">{percentage}%</span>
      </div>

      <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
        {/* The Actual Progress Fill */}
        <div
          className="bg-blue-400 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Bottom Text */}
      <p className="text-gray-500 text-[12px] font-medium">{statusText}</p>
    </div>
  );
}
