"use client";

import Image from "next/image";

type SidebarProps = {
  isSidebarOpen: boolean;
};

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
  // 🔴 Sidebar completely removed when closed
  if (!isSidebarOpen) return null;

  return (
    <aside
      className="
        fixed top-0 left-0 h-screen w-64
        bg-[#FEFEFE] border-r border-gray-100
        z-50 flex flex-col overflow-y-auto no-scrollbar
        transition-transform duration-300 ease-in-out
      "
    >
      {/* LOGO */}
      <div className="flex items-center gap-4 px-4 pt-4 pb-6">
        <Image src="/images/hospital.svg" alt="Logo" width={40} height={40} />

        <div>
          <h6 className="text-black">Hospital Admin</h6>
          <p className="text-gray-500 text-sm">Operations</p>
        </div>
      </div>

      {/* NAV */}
      <nav className="space-y-2">
        {[
          { label: "Dashboard", icon: "/images/dashboard-svg.svg" },
          { label: "Patients", icon: "/images/patient-svg.svg" },
          { label: "Appointments", icon: "/images/appointment.svg" },
          { label: "Doctors", icon: "/images/doctors.svg" },
          { label: "Departments", icon: "/images/department.svg" },
          { label: "Beds & ICU", icon: "/images/beds-icu.svg" },
          { label: "Reports", icon: "/images/reports.svg" },
          { label: "Settings", icon: "/images/settings.svg" },
        ].map((item) => (
          <div
            key={item.label}
            className="
              mx-3 flex items-center gap-3 p-2 rounded-lg
              text-gray-500 hover:bg-blue-50 hover:text-blue-600
              cursor-pointer transition-all
            "
          >
            <Image src={item.icon} alt={item.label} width={20} height={20} />
            <span className="font-semibold">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="mt-auto mx-3 mb-4 p-4 border border-gray-200 rounded-md">
        <p className="text-black">Shift Summary</p>
        <p className="text-gray-500 text-xs">
          OPD peaks at 11:00–13:00. ICU monitoring active.
        </p>
      </div>
    </aside>
  );
}
