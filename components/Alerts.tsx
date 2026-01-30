interface AlertProps {
  name: string;
  description: string;
  priority: string;
  nameColor?: string;
  descColor?: string;
  priorityColor?: string;
  borderColor?: string;
}

export default function AlertCard({
  name,
  description,
  priority,
  nameColor = "text-slate-800",
  descColor = "text-gray-500",
  priorityColor = "text-gray-500",
  borderColor = "border-gray-100",
}: AlertProps) {
  return (
    <div
      className={`bg-white p-5 rounded-2xl border shadow-sm w-full flex flex-col gap-3  transition-all ${borderColor}`}
    >
      {/* 1. Name Field */}
      <div className="flex justify-between items-center">
        <h6 className={`font-bold text-base ${nameColor}`}>{name}</h6>
      </div>

      {/* 2. Description Field */}
      <div className="">
        <p className={`text-sm font-medium leading-relaxed ${descColor}`}>
          {description}
        </p>
      </div>

      {/* 3. Priority Field */}
      <div className="mt-1">
        <p
          className={`text-[12px] font-bold uppercase tracking-wide ${priorityColor}`}
        >
          {priority}
        </p>
      </div>
    </div>
  );
}
