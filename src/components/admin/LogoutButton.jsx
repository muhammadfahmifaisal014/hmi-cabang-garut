"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login"); // Redirect to login after sign out
  };

  return (
    <button
      onClick={handleLogout}
      className="text-xs text-red-600 hover:text-red-800 font-semibold px-3 py-1 border border-red-200 rounded hover:bg-red-50 transition"
    >
      Logout
    </button>
  );
}
