import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";
import task from "../../server/Models/task";
import URL from "./URL";
export default function App() {
  const [data, setdata] = useState([]);
  const [newtask, setnewtask] = useState("");
  const tasks = async () => {
    try {
      const response = await axios.get(URL.Main);
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const newTask = async () => {
    try {
      const response = await axios.post(URL.Task, {
        newtask,
      });
      setdata((prevData) => [...prevData, response.data.task]);
      setnewtask("");
      console.log("New Task Added");
    } catch (error) {
      console.log("Error adding task:", error.message);
    }
  };

  const deleteTask = async (_id) => {
    try {
      await axios.delete(URL.Delete + _id);
      setdata((prevData) => prevData.filter((item) => item._id !== _id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    tasks();
  }, []);
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-neutral-800/90">
      <section className="bg-neutral-600 w-1/4 h-2/4 rounded-3xl">
        <header className="w-full flex justify-between items-center border-b-2 bg-neutral-100 h-1/7 rounded-t-3xl opacity-25">
          <nav className="w-3/4 h-4/4 flex justify-center items-center">
            <input
              type="text"
              value={newtask}
              onChange={(e) => {
                setnewtask(e.target.value);
              }}
              placeholder="Whats need to be done?"
              className="outline-none w-3/4 text-lg rounded-b-lg"
            />
          </nav>
          <nav className="flex w-1/4 h-4/4 justify-center items-center">
            <PlusIcon
              onClick={newTask}
              className="h-2/4 w-1/4  rounded-3xl transition scale-75 border-2 ease-in-out duration-1000 hover:rotate-90 hover:scale-150 hover:bg-black hover:text-amber-50"
            />
          </nav>
        </header>
        <section className="h-full w-full text-lg font-bold bg-amber-100 pt-2 overflow-auto">
          {data.map((item) => (
            <ul
              key={item._id}
              className="h-1/12 w-full flex p-2 justify-between"
            >
              <li
                onClick={(e) =>
                  e.currentTarget.classList.toggle("line-through")
                }
                className="w-4/5 h-1/12 transition cursor-pointer  ease-in-out duration-1000   "
              >
                {item.task}
              </li>
              <ul className="flex justify-end w-1/6 h-1/12 ">
                <li>
                  <TrashIcon
                    onClick={() => {
                      deleteTask(item._id);
                    }}
                    className="w-6 hover:text-red-400"
                  />
                </li>
              </ul>
            </ul>
          ))}
        </section>
      </section>
    </main>
  );
}
