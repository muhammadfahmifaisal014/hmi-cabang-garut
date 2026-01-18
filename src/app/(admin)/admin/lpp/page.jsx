import React from "react";
import LPPList from "./LPPList";

export const metadata = {
  title: "Kelola LPP - Admin HMI",
};

export default function LPPAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Lembaga Pengembangan Profesi (LPP)</h1>
      </div>

      <LPPList />
    </div>
  );
}
