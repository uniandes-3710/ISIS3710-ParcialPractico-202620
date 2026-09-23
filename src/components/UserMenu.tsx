"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSession, clearSession } from "@/services/session";

// Este componente solo se carga en el navegador (ver Header), por eso puede leer el localStorage.
export default function UserMenu() {
  const router = useRouter();
  const session = getSession();

  function handleLogout() {
    clearSession();
    router.push("/auth/login");
  }

  // Si hay un id guardado, el usuario inició sesión
  if (session.id) {
    return (
      <div className="flex items-center gap-6">
        <button className="bg-blue-600 text-white text-lg font-semibold rounded-xl px-6 py-3">
          + Crear Plan
        </button>
        <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
          <span className="w-10 h-10 bg-slate-300 rounded-full inline-block"></span>
          <span className="text-lg text-slate-700">{session.username}</span>
        </div>
        <button onClick={handleLogout} className="text-sm text-slate-500">
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link href="/auth/login" className="text-lg text-slate-700">
        Iniciar sesión
      </Link>
      <Link
        href="/auth/register"
        className="bg-blue-600 text-white text-lg font-semibold rounded-xl px-6 py-3"
      >
        Registrarse
      </Link>
    </div>
  );
}
