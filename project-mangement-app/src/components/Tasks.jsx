import { use } from "react";
import { useState } from "react";
export default function Tasks({ onAdd, onDelete, tasks }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handlChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <section>
      <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
      <div className="flex items-center gap-4">
        <input
          onChange={handlChange}
          type="text"
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.taskId} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.taskId)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
