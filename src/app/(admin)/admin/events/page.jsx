import React from "react";
import EventsList from "./EventsList";

export const metadata = {
  title: "Kelola Event - Admin HMI",
};

export default function EventsAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Kegiatan (Event)</h1>
      </div>

      <EventsList />
    </div>
  );
}
