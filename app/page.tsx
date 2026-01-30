"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatsCard from "@/components/Statscard";
import Table from "@/components/Table";
import { Appointment } from "@/types";
import DepartmentCard from "@/components/Departmentcard";
import AlertCard from "@/components/Alerts";
import PatientFlowChart from "@/components/PatientFlowchar";
import OpdVipdChart from "@/components/OpdIpdchart";
import useGSAP from "@/hooks/useGsap";

export default function Home() {
  useGSAP(".doctor-wrapper");

  // ✅ Sidebar state (single source of truth)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const appointments: Appointment[] = [
    {
      patientName: "Aisha Khan",
      doctor: "Dr. Mehta",
      department: "Cardiology",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      patientName: "Rohan Singh",
      doctor: "Dr. Iyer",
      department: "General",
      time: "11:15 AM",
      status: "Pending",
    },
    {
      patientName: "Meera Patel",
      doctor: "Dr. Sharma",
      department: "Orthopedics",
      time: "12:00 PM",
      status: "Confirmed",
    },
    {
      patientName: "Arjun Verma",
      doctor: "Dr. Nair",
      department: "Pediatrics",
      time: "01:10 PM",
      status: "Cancelled",
    },
    {
      patientName: "Neha Gupta",
      doctor: "Dr. Joshi",
      department: "Cardiology",
      time: "02:45 PM",
      status: "Pending",
    },
    {
      patientName: "Vikram Rao",
      doctor: "Dr. Desai",
      department: "General",
      time: "03:20 PM",
      status: "Confirmed",
    },
  ];

  return (
    <main className="doctor-wrapper min-h-screen bg-gray-100">
      {/* ✅ Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* ✅ Topbar */}
      <Topbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* ✅ Main Content */}
      <section
        className={`pt-24 p-6 space-y-8 transition-all duration-500 ease-in-out
          ${isSidebarOpen ? "ml-64" : "ml-0"}
        `}
      >
        {/* Header */}
        <div className="flex flex-col gsap-slide-in sm:justify-start justify-center items-center sm:items-start">
          <h3 className="text-black font-bold text-lg">Dashboard</h3>
          <p className="text-gray-500 pt-1">
            Live operational snapshot for today.
          </p>
        </div>

        {/* Stats */}
        <div className="sm:flex gap-6 flex-wrap gsap-slide-in">
          <StatsCard
            title="Total Patients Today"
            value={186}
            iconSrc="/images/patient-svg.svg"
            trend="+5% vs yesterday"
            trendColor="text-green-600"
          />
          <StatsCard
            title="Available Beds"
            value={42}
            iconSrc="/images/beds-icu.svg"
            trend="+3 beds freed"
            trendColor="text-green-600"
          />
          <StatsCard
            title="Doctors On Duty"
            value={28}
            iconSrc="/images/doctors.svg"
            trend="-2 from last shift"
            trendColor="text-red-500"
          />
          <StatsCard
            title="Emergency Queue"
            value={11}
            iconSrc="/images/appointment.svg"
            trend="+4 in last hour"
            trendColor="text-green-600"
          />
        </div>

        {/* Charts */}
        <div className="sm:flex justify-between gap-4">
          <PatientFlowChart />
          <OpdVipdChart />
        </div>

        {/* Department Load */}
        <div className="flex flex-col gsap-slide-in sm:justify-start justify-center items-center sm:items-start">
          <h5 className="text-black font-bold">Department Load</h5>
          <p className="text-gray-500 pt-1">
            Capacity utilization by department.
          </p>
        </div>

        <div className="sm:flex gap-4 flex-wrap p-2 rounded">
          <DepartmentCard
            name="Cardiology"
            percentage={76}
            statusText="High load — monitor staffing"
          />
          <DepartmentCard
            name="Orthopedics"
            percentage={58}
            statusText="Normal load"
          />
          <DepartmentCard
            name="General"
            percentage={64}
            statusText="Normal load"
          />
          <DepartmentCard
            name="Pediatrics"
            percentage={49}
            statusText="Low load"
          />
        </div>

        {/* Appointments */}
        <div className="bg-white p-6 rounded shadow flex flex-col gsap-slide-in sm:justify-start justify-center items-center sm:items-start">
          <h2 className="text-lg font-semibold">Appointments</h2>
          <p className="text-gray-500 pt-1 mb-4">
            Upcoming appointments overview.
          </p>
          <Table data={appointments} />
        </div>

        {/* Alerts */}
        <div className="flex flex-col sm:justify-start justify-center items-center sm:items-start">
          <h2 className="text-lg font-semibold">Alerts</h2>
          <p className="text-gray-500 pt-1 mb-4">
            Operational warnings requiring attention.
          </p>

          <div className="sm:flex gap-6">
            <AlertCard
              name="ICU Capacity Alert"
              description="ICU occupancy is at 92%. Consider escalating discharge planning"
              priority="Priority: High"
              nameColor="text-[#9F1239]"
              descColor="text-[#BE123C]"
              priorityColor="text-[#9F1239]"
              borderColor="border-red-100"
            />
            <AlertCard
              name="Doctor Unavailability"
              description="Orthopedics: Dr. Sharma unavailable 2:00–4:00 PM."
              priority="Priority: Medium"
              nameColor="text-[#78350F]"
              descColor="text-[#92400E]"
              priorityColor="text-[#78350F]"
              borderColor="border-orange-100"
            />
            <AlertCard
              name="Emergency Overload"
              description="Triage wait time increased. Route non-critical cases to OPD."
              priority="Priority: Medium"
              nameColor="text-[#1C4686]"
              descColor="text-[#1D53A9]"
              priorityColor="text-[#1C4686]"
              borderColor="border-orange-100"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
