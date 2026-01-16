"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorObj, setErrorObj] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorObj(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorObj(error.message);
      setLoading(false);
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-block p-4 rounded-full bg-green-50 mb-4">
            {/* HMI Logo Placeholder or Text */}
            <h1 className="text-2xl font-black text-[#004e26]">HMI ADMIN</h1>
          </div>
          <p className="text-gray-500 text-sm">Masuk untuk mengelola website</p>
        </div>

        {errorObj && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100">
            {errorObj === "Invalid login credentials" ? "Email atau Password salah." : errorObj}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00773A] focus:border-[#00773A] outline-none transition text-gray-900"
              placeholder="admin@hmi.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00773A] focus:border-[#00773A] outline-none transition text-gray-900"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold text-white shadow-lg shadow-green-200 transition-all ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#00773A] hover:bg-[#005e2e] hover:shadow-xl"
              }`}
          >
            {loading ? "Memproses..." : "LOGIN SEKARANG"}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-gray-400">
          &copy; 2025 HMI Cabang Garut
        </div>
      </div>
    </div>
  );
}
