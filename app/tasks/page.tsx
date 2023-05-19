import { Task } from "@/app/models";
import TaskList from "@/app/components/task-list";

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
      <TaskList tasks={tasks} />
    </div>
  );
}
