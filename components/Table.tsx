import { Appointment } from "@/types";

interface Props {
  data: Appointment[];
}

export default function Table({ data }: Props) {
  // Logic to control colors based on status
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-green-100 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div
      className="
    w-full
    max-h-[420px]        /* mobile scroll height */
    overflow-y-auto
    sm:max-h-none
    sm:overflow-visible
    sm:overflow-x-visible
    overflow-x-auto
  "
    >
      <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
        <thead className="">
          <tr className="text-left border-b border-gray-200">
            <th className="p-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Patient Name
            </th>
            <th className="p-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Doctor
            </th>
            <th className="p-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Department
            </th>
            <th className="p-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Time
            </th>
            <th className="p-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="p-4 text-sm text-gray-700 font-medium hover:scale-110 transition-all duration-500 cursor-pointer hover:text-blue-400">
                {item.patientName}
              </td>
              <td className="p-4 text-sm text-gray-600 hover:scale-110 transition-all duration-500 cursor-pointer hover:text-blue-400">
                {item.doctor}
              </td>
              <td className="p-4 text-sm text-gray-600 hover:scale-110 transition-all duration-500 cursor-pointer hover:text-blue-400">
                {item.department}
              </td>
              <td className="p-4 text-sm text-gray-600 hover:scale-110 transition-all duration-500 cursor-pointer hover:text-blue-400">
                {item.time}
              </td>
              <td className="p-4">
                {/* Badge Wrapper for Status */}
                <div
                  className={`inline-flex justify-center items-center cursor-pointer
    px-3 py-1 border rounded-full
    text-xs font-bold leading-none
    transition-all duration-300 ease-out
    hover:-translate-y-[1px]
    hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] ${getStatusStyles(item.status)}`}
                >
                  {item.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
