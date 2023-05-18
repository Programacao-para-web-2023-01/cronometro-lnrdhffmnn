"use client";

import { useEffect, useState } from "react";
import {
  PlayIcon,
  PauseIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      isRunning && setCounter(_counter => _counter + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  function resetCounter() {
    setCounter(0);
  }

  function pauseCounter() {
    setIsRunning(_isRunning => !_isRunning);
  }

  return (
    <>
      <p className="font-semibold text-2xl">
        {Math.floor(counter / 3600) < 10 && <span>0</span>}
        {Math.floor(counter / 3600)}
        <span>:</span>
        {Math.floor(counter / 60) % 60 < 10 && <span>0</span>}
        {Math.floor(counter / 60) % 60}
        <span>:</span>
        {counter % 60 < 10 && <span>0</span>}
        {counter % 60}
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={pauseCounter}
          className={`p-2 rounded-md shadow transition hover:scale-105 active:scale-95 ${
            isRunning
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {isRunning ? (
            <PauseIcon className="w-6 h-6" />
          ) : (
            <PlayIcon className="w-6 h-6" />
          )}
        </button>
        <button
          className="bg-emerald-600 hover:bg-emerald-700 p-2 rounded-md shadow transition hover:scale-105 active:scale-95"
          onClick={resetCounter}
        >
          <ArrowPathIcon className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
