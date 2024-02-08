import { useRef, useState } from "react";

const TodoList = () => {
  const inputRef = useRef(); // ref to focus
  const [error, setError] = useState(""); // ref to error

  const [task, setTask] = useState(""); // var for task
  const [listTask, setListTask] = useState(["Monday", "Tuesday", "Wednesday"]); // array var for stored task
  const [editIndex, setEditIndex] = useState(-1); // index want to edit

  // Add Task
  const handleAdd = (event) => {
    event.preventDefault();
    if (editIndex === -1) {
      // If not editing, add a new task
      // If inputRef is Empty
      if (inputRef.current.value === "") {
        setError("Enter your task!");
        setTimeout(() => {
          setError("");
        }, 3000);
      } else {
        // If inputRef is not empty, add a new task
        setListTask([...listTask, task]);
      }
    } else {
      //  editing, update the existing task
      const updatedTasks = [...listTask];
      updatedTasks[editIndex] = task;
      setListTask(updatedTasks);
      setEditIndex(-1); // Reset the editIndex
    }
    inputRef.current.focus();
    setTask("");
  };

  // Edit Task
  const handleEdit = (taskIndex) => {
    setTask(listTask[taskIndex]);
    setEditIndex(taskIndex); // Set the index of the task being edited
    inputRef.current.focus();
  };

  // Removed Task
  const handleRemove = (taskIndex) => {
    const filteredTask = listTask.filter((task, index) => index !== taskIndex);
    setListTask(filteredTask);
    setEditIndex(-1); // Reset the editIndex
  };

  // Keydown events
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd(event);
    }
  };

  return (
    <div className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="border-4 border-green-300 bg-green-500 h-[600px] w-[500px] p-3 rounded-md overflow-hidden pb-2">
        <div className="grid flex justify-center items-center">
          <input
            ref={inputRef}
            type="text"
            value={task}
            placeholder="Enter Task"
            className="font-semibold w-[300px] p-2 rounded my-1"
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
          <small className="ml-2 text-lg text-orange-600 font-bold">
            {error}
          </small>
        </div>

        <div className="flex justify-center items-center mt-4">
          <button
            className="w-[150px] bg-blue-700 text-white px-2 py-1 hover:bg-blue-600 rounded"
            onClick={handleAdd}
          >
            {editIndex === -1 ? "Submit" : "Update"}
          </button>
        </div>

        <ul className="overflow-y-scroll p-3 my-2 h-[470px]">
          {listTask.map((task, index) => (
            <li
              key={index}
              className="min-w-[400px] flex justify-between my-2 p-2 border bg-gray-200 shadow-md rounded-md font-semibold"
            >
              {task}
              <div>
                <button
                  onClick={() => {
                    handleEdit(index);
                  }}
                  className="hover:bg-yellow-500 hover:text-black border-2 px-4 text-white bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleRemove(index);
                  }}
                  className="hover:bg-yellow-500 hover:text-black border-2 px-4 text-white bg-orange-600"
                >
                  Del
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
