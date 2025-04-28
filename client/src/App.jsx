import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "./URL";

export default function App() {
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await axios.get(URL.Main);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async () => {
    try {
      const response = await axios.post(URL.Task, { newtask: newTask });
      setData((prev) => [...prev, response.data.task]);
      setNewTask("");
      console.log("New Task Added");
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  const deleteTask = async (_id) => {
    try {
      await axios.delete(URL.Delete + _id);
      setData((prev) => prev.filter((item) => item._id !== _id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="min-h-screen w-screen flex items-center justify-center bg-neutral-800/90 p-4">
      <section className="bg-neutral-600 rounded-3xl shadow-lg w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3 2xl:w-1/4 flex flex-col h-[70vh]">
        <header className="flex justify-between items-center border-b-2 bg-neutral-100 rounded-t-3xl p-2">
          <div className="flex-1 flex justify-center items-center">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="What's need to be done?"
              className="outline-none w-full rounded-lg px-2 py-1 text-base md:text-lg"
            />
          </div>
          <button
            onClick={addTask}
            className="flex items-center justify-center ml-2 bg-neutral-200 hover:bg-black hover:text-white transition duration-500 rounded-full p-2"
          >
            <PlusIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </header>

        <section className="flex-1 overflow-auto bg-amber-100 rounded-b-3xl p-4 space-y-2">
          {data.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white shadow-sm rounded-lg p-2 hover:bg-neutral-50 transition"
            >
              <span
                onClick={(e) =>
                  e.currentTarget.classList.toggle("line-through")
                }
                className="cursor-pointer flex-1 truncate"
              >
                {item.task}
              </span>
              <TrashIcon
                onClick={() => deleteTask(item._id)}
                className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer"
              />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
