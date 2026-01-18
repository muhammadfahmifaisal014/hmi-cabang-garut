"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";

export default function EditLPPPage({ params }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    chairman_name: "",
    chairman_position: "",
    chairman_instagram: "",
    chairman_image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("lpp")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        alert("Gagal mengambil data LPP!");
        router.push("/admin/lpp");
      } else {
        setFormData({
          title: data.title,
          description: data.description,
          chairman_name: data.chairman_name,
          chairman_position: data.chairman_position,
          chairman_instagram: data.chairman_instagram || "",
          chairman_image: data.chairman_image || "",
        });
        setLoading(false);
      }
    };

    fetchData();
  }, [id, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSubmitting(true);
    const fileName = `lpp-${Date.now()}-${file.name}`;

    // Upload to Supabase Storage bucket named 'images'
    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, file);

    if (error) {
      alert("Gagal upload gambar: " + error.message);
      setSubmitting(false);
    } else {
      const { data: publicData } = supabase.storage
        .from("images")
        .getPublicUrl(fileName);

      setFormData({ ...formData, chairman_image: publicData.publicUrl });
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("lpp").update({
      title: formData.title,
      description: formData.description,
      chairman_name: formData.chairman_name,
      chairman_position: formData.chairman_position,
      chairman_instagram: formData.chairman_instagram.replace('@', ''),
      chairman_image: formData.chairman_image,
    }).eq('id', id);

    if (error) {
      alert("Gagal mengupdate lpp: " + error.message);
      setSubmitting(false);
    } else {
      alert("LPP berhasil diupdate!");
      router.push("/admin/lpp");
      router.refresh();
    }
  };

  if (loading) return <div className="p-10 text-center">Loading Data...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Edit LPP</h1>
        <Link href="/admin/lpp" className="text-sm text-gray-500 hover:text-green-600">
          ← Kembali
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lembaga (LPP)</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
            placeholder="Contoh: Lembaga Dakwah Mahasiswa Islam (LDMI)"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Deskripsi</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
            placeholder="Jelaskan tentang lembaga ini..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chairman Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Direktur/Ketua</label>
            <input
              type="text"
              name="chairman_name"
              required
              value={formData.chairman_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
              placeholder="Contoh: Yusup Saepul Hayat"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Jabatan</label>
            <input
              type="text"
              name="chairman_position"
              required
              value={formData.chairman_position}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
              placeholder="Contoh: Direktur Utama"
            />
          </div>
        </div>

        {/* Instagram */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Username Instagram Ketua (Tanpa @)</label>
          <input
            type="text"
            name="chairman_instagram"
            value={formData.chairman_instagram}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
            placeholder="hmicabanggarut"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Foto Ketua</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
          {submitting && <p className="text-sm text-gray-500 mt-2">Uploading image...</p>}

          {formData.chairman_image && (
            <div className="mt-4 relative w-24 h-32 bg-gray-100 rounded overflow-hidden border border-gray-200">
              <Image src={formData.chairman_image} alt="Preview" fill className="object-cover" />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded-lg font-bold text-white transition ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00773A] hover:bg-[#005e2e]'}`}
          >
            {submitting ? "Menyimpan Perubahan..." : "UPDATE LPP"}
          </button>
        </div>

      </form>
    </div>
  );
}
