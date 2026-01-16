"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, usePathname } from "next/navigation";

export default function AdminAuthCheck({ children }) {
  const router = useRouter();
  const pathname = usePathname(); // Get current path
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Only check auth on admin pages
    if (pathname.startsWith("/admin")) {
      const checkSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
          router.push("/login");
        } else {
          setAuthorized(true);
        }
      };

      checkSession();
    } else {
      // Non-admin pages are always authorized
      setAuthorized(true);
    }
  }, [router, pathname]);

  // Show nothing while checking (or a spinner)
  if (!authorized && pathname.startsWith("/admin")) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">Checking Access...</div>;
  }

  return <>{children}</>;
}
