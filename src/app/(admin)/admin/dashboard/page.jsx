import React from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export const revalidate = 0; // Ensure fresh data on every request

export default async function AdminDashboardPage() {
  // Fetch counts in parallel
  const { count: newsCount } = await supabase.from("news").select("*", { count: "exact", head: true });
  const { count: eventsCount } = await supabase.from("events").select("*", { count: "exact", head: true });
  const { count: trainingsCount } = await supabase.from("trainings").select("*", { count: "exact", head: true });
  const { count: membersCount } = await supabase.from("members").select("*", { count: "exact", head: true });

  const stats = [
    {
      title: "BERITA",
      count: newsCount || 0,
      label: "Artikel Dipublish",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      ),
      bg: "bg-blue-50",
      link: "/admin/news"
    },
    {
      title: "EVENT",
      count: eventsCount || 0,
      label: "Agenda Kegiatan",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      bg: "bg-orange-50",
      link: "/admin/events"
    },
    {
      title: "TRAINING",
      count: trainingsCount || 0,
      label: "Jadwal Training",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      bg: "bg-purple-50",
      link: "/admin/trainings"
    },
    {
      title: "PENGURUS",
      count: membersCount || 0,
      label: "Total Kader",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      bg: "bg-green-50",
      link: "/admin/members"
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
      <p className="text-gray-500 mb-8">Ringkasan data HMI Cabang Garut</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <Link href={item.link} key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${item.bg}`}>
                {item.icon}
              </div>
              {/* Optional: Add trend icon or percentage here */}
            </div>

            <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1 group-hover:text-gray-700 transition">{item.title}</h3>
            <p className="text-3xl font-black text-gray-800">{item.count}</p>
            <p className="text-xs text-gray-400 mt-2">{item.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 p-8 bg-gradient-to-r from-[#004e26] to-[#00773A] rounded-2xl shadow-lg text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-bold text-2xl mb-2">👋 Selamat Datang, Admin!</h3>
          <p className="opacity-90 max-w-2xl text-sm md:text-base leading-relaxed">
            Anda sedang mengakses Panel Admin HMI Cabang Garut. Gunakan menu di sebelah kiri untuk mengelola Berita, Event, Training, dan Data Pengurus. Semua perubahan akan langsung diterapkan ke website publik.
          </p>
        </div>
        {/* Decorative circle */}
        <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
