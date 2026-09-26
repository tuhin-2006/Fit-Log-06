"use client";

import type { Workout } from "@/types/workout";

import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
  const {
    isInPlan,
    isSaved,
    addToPlan,
    removeFromPlan,
    saveWorkout,
    removeSaved,
  } = useFitLog();

  const addedToPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  const handlePlanClick = () => {
    if (addedToPlan) {
      removeFromPlan(workout.id);
    } else {
      addToPlan(workout);
    }
  };

  const handleSaveClick = () => {
    if (saved) {
      removeSaved(workout.id);
    } else {
      saveWorkout(workout);
    }
  };

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {/* Add to Plan */}
      <button
        type="button"
        onClick={handlePlanClick}
        className={`
          inline-flex
          items-center
          gap-2.5
          rounded-md
          px-5
          py-3
          text-xs
          font-medium
          transition
          ${
            addedToPlan
              ? "bg-[#18220b] text-[#baff00]"
              : "bg-[#baff00] text-black hover:bg-[#c8ff38]"
          }
        `}
      >
        {/* Square Icon */}
        {addedToPlan ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12.5L9.5 17L19 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.5"
              y="4.5"
              width="15"
              height="15"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        )}

        <span>
          {addedToPlan
            ? "Added to today's plan"
            : "Add to today's plan"}
        </span>
      </button>

      {/* Save for Later */}
      <button
        type="button"
        onClick={handleSaveClick}
        className={`
          inline-flex
          items-center
          gap-2.5
          rounded-md
          border
          px-5
          py-3
          text-xs
          font-medium
          transition
          ${
            saved
              ? "border-[#baff00] bg-[#18220b] text-[#baff00]"
              : "border-white/10 bg-[#111319] text-white hover:bg-white/5"
          }
        `}
      >
        {/* Bookmark Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={saved ? "currentColor" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 4.5C6 3.672 6.672 3 7.5 3H16.5C17.328 3 18 3.672 18 4.5V21L12 17.25L6 21V4.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>
          {saved ? "Saved" : "Save for later"}
        </span>
      </button>
    </div>
  );
}