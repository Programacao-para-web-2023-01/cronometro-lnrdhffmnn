async function getData() {
  interface Task {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json: Task[] = await res.json();

  return { tasks: json };
}

export default async function Tasks() {
  const { tasks } = await getData();

  return (
    <div className="w-full max-w-xl h-full flex-grow flex flex-col items-stretch gap-8">
      <h1 className="font-bold text-xl">Lista de tarefas</h1>
      <ul className="flex flex-col gap-4">
        {tasks.map(task => (
          <li key={task.id}>
            <label className="flex gap-2 hover:underline underline-offset-4 cursor-pointer capitalize">
              <input type="checkbox" defaultChecked={task.completed} />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
