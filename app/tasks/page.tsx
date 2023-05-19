import { Task } from "@/app/models";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json: Task[] = await res.json();

  return { tasks: json };
}

export default async function Tasks() {
  const { tasks } = await getData();

  return (
    <div className="w1/2 md:w-3/4 h-full flex-grow flex flex-col gap-8">
      <h1 className="font-bold text-xl text-center">Lista de tarefas</h1>
      <ul className="flex flex-col gap-2 w-full">
        {tasks.map(task => (
          <li
            key={task.id}
            className="transition hover:bg-zinc-900 p-2 rounded-lg shadow"
          >
            <label className="flex gap-2 cursor-pointer capitalize">
              <input type="checkbox" checked={task.completed} readOnly />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
