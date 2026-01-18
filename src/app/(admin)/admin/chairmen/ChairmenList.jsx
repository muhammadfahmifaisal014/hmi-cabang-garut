"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function ChairmenList() {
  const [chairmen, setChairmen] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChairmen();
  }, []);

  const fetchChairmen = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("chairmen")
      .select("*")
      .order("period", { ascending: true }); // Sort by period ascending (chronological)

    if (error) console.error("Error fetching chairmen:", error);
    else setChairmen(data || []);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;

    const { error } = await supabase.from("chairmen").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus!");
      console.error(error);
    } else {
      fetchChairmen();
    }
  };

  if (loading) return <div className="p-4 bg-white rounded shadow text-center">Loading Data...</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <span className="font-semibold text-gray-600">Daftar Ketua Umum ({chairmen.length})</span>
        <Link href="/admin/chairmen/create" className="bg-[#00773A] hover:bg-[#005e2e] text-white px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2">
          + Tambah Data
        </Link>
      </div>

      {chairmen.length === 0 ? (
        <div className="p-10 text-center text-gray-500">
          Belum ada data ketua umum. Silakan tambah baru.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3">Periode</th>
                <th className="px-6 py-3">Nama Ketua Umum</th>
                <th className="px-6 py-3">Deskripsi Singkat</th>
                <th className="px-6 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {chairmen.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-bold text-gray-900 w-32 whitespace-nowrap">{item.period}</td>
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4 text-gray-500 max-w-xs truncate">{item.description}</td>
                  <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                    <Link href={`/admin/chairmen/edit/${item.id}`} className="text-blue-600 hover:underline">
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
