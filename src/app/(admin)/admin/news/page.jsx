import React from "react";
import NewsList from "./NewsList";

export const metadata = {
  title: "Kelola Berita - Admin HMI",
};

export default function NewsAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Berita</h1>
      </div>

      {/* Client Component untuk Logic Fetching & Table */}
      <NewsList />
    </div>
  );
}
