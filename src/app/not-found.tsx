import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090a0d] px-4 text-white">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center">
          <img
            src="/images/logo.png"
            alt="Fit-Log"
            className="h-12 w-12 object-contain"
          />
        </div>

        <p className="mt-6 text-7xl font-black tracking-tight text-[#baff00]">
          404
        </p>

        <h1 className="mt-4 text-2xl font-black uppercase tracking-tight">
          Page not found
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#7f899b]">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center justify-center rounded-md bg-[#baff00] px-6 py-3 text-xs font-medium text-black transition hover:bg-[#c8ff38]"
        >
          ← Back to workouts
        </Link>
      </div>
    </main>
  );
}
