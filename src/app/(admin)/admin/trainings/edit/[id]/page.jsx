"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";

export default function EditTrainingPage({ params }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    category: "LK 1",
    description: "",
    image_url: "",
  });

  const categories = ["LK 1", "TRAINING RAYA", "PELATIHAN KHUSUS"];

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("trainings")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        alert("Gagal mengambil data training!");
        router.push("/admin/trainings");
      } else {
        setFormData({
          title: data.title,
          date: data.date,
          category: data.category,
          description: data.description,
          image_url: data.image_url || "",
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
    const fileName = `${Date.now()}-${file.name}`;

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

      setFormData({ ...formData, image_url: publicData.publicUrl });
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("trainings").update({
      title: formData.title,
      date: formData.date,
      category: formData.category,
      description: formData.description,
      image_url: formData.image_url,
    }).eq('id', id);

    if (error) {
      alert("Gagal mengupdate training: " + error.message);
      setSubmitting(false);
    } else {
      alert("Training berhasil diupdate!");
      router.push("/admin/trainings");
      router.refresh();
    }
  };

  if (loading) return <div className="p-10 text-center">Loading Data...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Edit Training</h1>
        <Link href="/admin/trainings" className="text-sm text-gray-500 hover:text-green-600">
          ← Kembali
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Training</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
            placeholder="Contoh: LK 1 Komisariat Teknik"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Jenis Training</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900 bg-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tanggal Pelaksanaan</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Poster / Banner</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
          {submitting && <p className="text-sm text-gray-500 mt-2">Uploading image...</p>}

          {formData.image_url && (
            <div className="mt-4 relative w-full h-48 bg-gray-100 rounded overflow-hidden border border-gray-200">
              <Image src={formData.image_url} alt="Preview" fill className="object-cover" />
            </div>
          )}
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Singkat</label>
          <textarea
            name="description"
            required
            rows="5"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900"
            placeholder="Jelaskan detail tempat dan tema training..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded-lg font-bold text-white transition ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00773A] hover:bg-[#005e2e]'}`}
          >
            {submitting ? "Menyimpan Perubahan..." : "UPDATE TRAINING"}
          </button>
        </div>

      </form>
    </div>
  );
}
