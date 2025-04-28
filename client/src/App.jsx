import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
export default function App() {
<<<<<<< HEAD
=======
  const [data, setdata] = useState([]);
  const [newtask, setnewtask] = useState("");
  const tasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const newTask = async () => {
    try {
      await axios.post("http://localhost:3000/newtask", {
        newtask,
      });
      setdata((prevData) => [
        ...prevData,
        { _id: Date.now().toString(), task: newtask }, // creating a new task object with a unique id handel it as key for ul
      ]);
      setnewtask("");
      console.log("New Task Added");
    } catch (error) {
      console.log("Error adding task:", error.message);
    }
  };

  const deleteTask = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    tasks();
  }, []);
>>>>>>> 0d2e99f (done with add new task)
  return (
    // <main className="app-container">
    //   {/* Main Layout Wrapper */}
    //   {/* Header for Actions (Add Task, Filters, etc.) */}
    //   <header className="app-actions">
    //     <nav>{/* Buttons like "Add New Task" */}</nav>
    //   </header>

    //   {/* Task List Section */}
    //   <section className="task-list">
    //     {/* Individual Task Items */}
    //     <ul className="tasks">
    //       <li className="task-item">
    //         {/* Task Content + Edit/Delete Buttons */}
    //       </li>
    //     </ul>
    //   </section>
    // </main>
    <main className="h-screen w-screen flex items-center justify-center bg-neutral-800/90">
      <section className="bg-neutral-600 w-1/4 h-2/4 rounded-3xl">
        <header className="w-full flex justify-between border-b-2 bg-neutral-100 h-1/7 rounded-t-3xl opacity-25">
          <nav className="w-3/4 h-4/4 flex justify-center">
            <input
              type="text"
              placeholder="Whats need to be done?"
              className="outline-none w-3/4 text-lg rounded-b-lg"
            />
          </nav>
          <nav className="flex w-1/4 h-4/4 justify-center items-center">
            <PlusIcon className="h-2/4 w-1/4  rounded-3xl transition scale-125 border-2 ease-in-out duration-1000 hover:rotate-90 hover:scale-150 hover:bg-black hover:text-amber-50" />
          </nav>
        </header>
<<<<<<< HEAD
        <section className="h-full w-full text-lg font-bold bg-amber-100 pt-5">
          <ul className="h-full w-full flex p-2 justify-between">
            <li
              onClick={(e) => e.currentTarget.classList.toggle("line-through")}
              className="w-4/5 h-1/12 transition cursor-pointer  ease-in-out duration-1000   "
=======
        <section className="h-full w-full text-lg font-bold bg-amber-100 pt-2 overflow-auto">
          {data.map((item) => (
            <ul
              key={item._id}
              className="h-1/12 w-full flex p-2 justify-between"
>>>>>>> 0d2e99f (done with add new task)
            >
              Customized
            </li>
            <ul className="flex justify-between  w-1/6 h-1/12 ">
              <li>
                <TrashIcon className="w-6 hover:text-red-400" />
              </li>
              <li>
                <PencilSquareIcon className="w-6 hover:text-blue-400" />
              </li>
            </ul>
          </ul>
        </section>
      </section>
    </main>
  );
}
