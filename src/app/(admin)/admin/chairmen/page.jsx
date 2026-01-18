import React from "react";
import ChairmenList from "./ChairmenList";

export const metadata = {
  title: "Kelola Ketua Umum - Admin HMI",
};

export default function ChairmenAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Daftar Ketua Umum</h1>
      </div>

      <ChairmenList />
    </div>
  );
}
