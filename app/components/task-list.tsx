"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Task } from "@/app/models";
import { useState } from "react";

interface Props {
  tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  const [currentTask, setCurrentTask] = useState<number>();

  return (
    <ul
      className="flex flex-col gap-4 w-full"
      onMouseLeave={() => setCurrentTask(undefined)}
    >
      {tasks.map(task => (
        <li
          key={task.id}
          className="p-2 relative"
          onMouseEnter={() => setCurrentTask(task.id)}
        >
          <label className="flex gap-3 cursor-pointer capitalize">
            <input type="checkbox" checked={task.completed} readOnly />
            <span className={`${task.completed && "line-through opacity-50"}`}>
              {task.title}
            </span>
          </label>
          <AnimatePresence>
            {currentTask === task.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.1,
                }}
                layoutId="task"
                className="absolute top-0 left-0 w-full h-full bg-zinc-900 rounded-lg shadow -z-10"
              />
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
