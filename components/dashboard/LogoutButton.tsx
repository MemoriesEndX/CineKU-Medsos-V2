"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async (): Promise<void> => {
    if (isLoading) return;

    setIsLoading(true);

    await signOut({
      callbackUrl: "/login",
    });
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoading}
      className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-sm font-medium text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {isLoading ? "Keluar..." : "Ganti Akun"}
    </button>
  );
}