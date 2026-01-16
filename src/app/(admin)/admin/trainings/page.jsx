import React from "react";
import TrainingsList from "./TrainingsList";

export const metadata = {
  title: "Kelola Training - Admin HMI",
};

export default function TrainingsAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Training / Pelatihan</h1>
      </div>

      <TrainingsList />
    </div>
  );
}
