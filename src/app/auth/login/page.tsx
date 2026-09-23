export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <h1 className="text-5xl font-bold text-slate-900 mt-6">Inicia sesión</h1>
      <p className="text-lg text-slate-600 mt-2">
        Qué bueno verte de nuevo. Ingresa para ver tus planes.
      </p>

      <form className="bg-white rounded-2xl shadow-lg p-8 mt-10 w-full max-w-md">
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="correo@ejemplo.com"
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />

        <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mt-4">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="••••••••"
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />

        {/* Por ahora el botón no envía nada, luego lo conectamos al backend */}
        <button
          type="button"
          className="w-full bg-blue-700 text-white font-semibold rounded-xl py-4 mt-8"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
