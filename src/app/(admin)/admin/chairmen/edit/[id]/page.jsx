"use client";

import React, { useState, useEffect, use } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditChairmanPage({ params }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    period: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("chairmen")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        alert("Gagal mengambil data!");
        router.push("/admin/chairmen");
      } else {
        setFormData({
          name: data.name,
          period: data.period,
          description: data.description || "",
        });
        setLoading(false);
      }
    };

    fetchData();
  }, [id, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("chairmen").update({
      name: formData.name,
      period: formData.period,
      description: formData.description,
    }).eq('id', id);

    if (error) {
      alert("Gagal mengupdate data: " + error.message);
      setSubmitting(false);
    } else {
      alert("Data berhasil diupdate!");
      router.push("/admin/chairmen");
      router.refresh();
    }
  };

  if (loading) return <div className="p-10 text-center">Loading Data...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Edit Ketua Umum</h1>
        <Link href="/admin/chairmen" className="text-sm text-gray-500 hover:text-green-600">
          ← Kembali
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Period */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Periode</label>
            <input
              type="text"
              name="period"
              required
              value={formData.period}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
              placeholder="Contoh: 2023 - 2024"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Ketua Umum</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
              placeholder="Contoh: Budi Santoso"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Deskripsi / Sejarah Singkat</label>
          <textarea
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
            placeholder="Tuliskan deskripsi singkat atau sejarah kepemimpinan..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded-lg font-bold text-white transition ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00773A] hover:bg-[#005e2e]'}`}
          >
            {submitting ? "Menyimpan Perubahan..." : "UPDATE DATA"}
          </button>
        </div>

      </form>
    </div>
  );
}
