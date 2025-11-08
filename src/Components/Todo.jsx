import { useEffect, useState } from "react";
import "./Todo.css";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const myTodo = "todoApp";
export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState(() => {
    const tempData = localStorage.getItem(myTodo);
    if (!tempData) return [];
    return () => JSON.parse(tempData);
  });
  //Input Field function
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  // Task entry point
  function handleTaskEntry(e) {
    e.preventDefault();

    if (!inputValue) return;
    setTask((prev) => [...prev, { content: inputValue, check: false }]);
    setInputValue("");
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(task));
  }, [task]);
  const handleTaskDelete = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };
  const handleTaskCheck = (value) => {
    const updatedTask = task.map((curTask) => curTask.content === value);
    setTask(updatedTask);
  };
  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>TODO APP</h1>
      </header>
      <section className="todo-entries">
        <form onSubmit={handleTaskEntry}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Task here"
          />
          <button type="submit" className="add-task">
            Add Task
          </button>
        </form>
      </section>
      <section className="display-entries">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li
                className={`todo-entry ${curTask.check ? "checked" : ""}`}
                key={index}
              >
                <span>{curTask.content}</span>
                <button
                  className="check-btn"
                  onClick={() => handleTaskCheck(curTask.content)}
                >
                  <FaCheck />
                </button>
                <button
                  className="delete -btn"
                  onClick={() => handleTaskDelete(curTask.content)}
                >
                  <MdDelete />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
