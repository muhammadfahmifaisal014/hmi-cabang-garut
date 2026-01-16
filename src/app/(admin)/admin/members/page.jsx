import React from "react";
import MembersList from "./MembersList";

export const metadata = {
  title: "Kelola Pengurus - Admin HMI",
};

export default function MembersAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Struktur Pengurus</h1>
      </div>

      <MembersList />
    </div>
  );
}
