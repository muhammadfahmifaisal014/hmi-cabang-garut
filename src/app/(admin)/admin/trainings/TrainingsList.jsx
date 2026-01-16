"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function TrainingsList() {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("trainings")
      .select("*")
      .order("date", { ascending: false });

    if (error) console.error("Error fetching trainings:", error);
    else setTrainings(data || []);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus training ini?")) return;

    const { error } = await supabase.from("trainings").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus!");
      console.error(error);
    } else {
      fetchTrainings();
    }
  };

  if (loading) return <div className="p-4 bg-white rounded shadow text-center">Loading Data...</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <span className="font-semibold text-gray-600">Daftar Training ({trainings.length})</span>
        <Link href="/admin/trainings/create" className="bg-[#00773A] hover:bg-[#005e2e] text-white px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2">
          + Buat Training Baru
        </Link>
      </div>

      {trainings.length === 0 ? (
        <div className="p-10 text-center text-gray-500">
          Belum ada training. Silakan buat baru.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3">Nama Training</th>
                <th className="px-6 py-3">Kategori</th>
                <th className="px-6 py-3">Tanggal</th>
                <th className="px-6 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {trainings.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">{new Date(item.date).toLocaleDateString("id-ID")}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link href={`/admin/trainings/edit/${item.id}`} className="text-blue-600 hover:underline">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
