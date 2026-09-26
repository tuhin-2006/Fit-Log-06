import Link from "next/link";

import WorkoutActions from "@/components/workouts/WorkoutActions";
import type { Workout } from "@/types/workout";

interface WorkoutDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Workout not found");
  }

  const workout: Workout = await response.json();

  return (
    <main className="min-h-screen bg-[#090a0d] text-white">
      <div className="mx-auto max-w-[1280px] px-4 pb-20 pt-[100px] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-[#baff00]"
        >
          ← Back to workouts
        </Link>

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#15171e]">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              {workout.name}
            </h1>

            <p className="mt-4 text-sm leading-6 text-[#8f99aa]">
              {workout.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#baff00] px-3 py-1.5 text-[9px] font-black uppercase tracking-wide text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#15171e]">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
                <span className="text-xs text-[#71809a]">Equipment</span>
                <span className="text-xs font-medium text-white">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
                <span className="text-xs text-[#71809a]">Difficulty</span>
                <span className="text-xs font-medium text-white">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
                <span className="text-xs text-[#71809a]">Duration</span>
                <span className="text-xs font-medium text-white">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
                <span className="text-xs text-[#71809a]">Calories Burned</span>
                <span className="text-xs font-medium text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
                <span className="text-xs text-[#71809a]">Sets</span>
                <span className="text-xs font-medium text-white">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
                <span className="text-xs text-[#71809a]">Reps</span>
                <span className="text-xs font-medium text-white">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-xs text-[#71809a]">Rating</span>
                <span className="text-xs font-medium text-[#baff00]">
                  ★ {workout.rating}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-black uppercase tracking-tight text-white">
                Instructions
              </h2>

              <div className="mt-5 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#baff00] text-[9px] font-black text-black">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-6 text-[#8f99aa]">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <WorkoutActions workout={workout} />
          </div>
        </section>
      </div>
    </main>
  );
}
