"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function LPPList() {
  const [lppData, setLppData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLPP();
  }, []);

  const fetchLPP = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("lpp")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) console.error("Error fetching lpp:", error);
    else setLppData(data || []);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus Lembaga ini?")) return;

    const { error } = await supabase.from("lpp").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus!");
      console.error(error);
    } else {
      fetchLPP();
    }
  };

  if (loading) return <div className="p-4 bg-white rounded shadow text-center">Loading Data...</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <span className="font-semibold text-gray-600">Daftar LPP ({lppData.length})</span>
        <Link href="/admin/lpp/create" className="bg-[#00773A] hover:bg-[#005e2e] text-white px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2">
          + Tambah LPP
        </Link>
      </div>

      {lppData.length === 0 ? (
        <div className="p-10 text-center text-gray-500">
          Belum ada data LPP. Silakan tambah baru.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3">Nama Lembaga</th>
                <th className="px-6 py-3">Direktur/Ketua</th>
                <th className="px-6 py-3">Jabatan</th>
                <th className="px-6 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {lppData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                  <td className="px-6 py-4">{item.chairman_name}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800">
                      {item.chairman_position}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link href={`/admin/lpp/edit/${item.id}`} className="text-blue-600 hover:underline">
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
