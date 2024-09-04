import React, { useState } from "react";

function ToDoList() {
    const [Tasks, SetTask] = useState(["Enter the todo", "Eat the brake fast", "Riding A bike"]);
    const [newTask, setnewTask] = useState("");
    function handelInputChange(event) {
        setnewTask(event.target.value)
    }
    function addTask() {
        if (newTask.trim() !== "") {
            SetTask(t => [...t, newTask]);
            setnewTask("")
        }


    }
    function deleteTask(index) {
        const updatedTasks = Tasks.filter((_, i) => i !== index);
        SetTask(updatedTasks)
    }
    function moveTaskDown(index) {
        if (index > 0) {
            const updatedTasks = [...Tasks]
            [updatedTasks[index - 1]][updatedTasks[index - 1]] = [updatedTasks[index - 1]]
            SetTask(updatedTasks);
        }

    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...Tasks]
            [updatedTasks[index - 1]][updatedTasks[index - 1]] = [updatedTasks[index - 1]]
            SetTask(updatedTasks);
        }

    }

    return (<div className="to-do-list">
        <h1>To-Do-list</h1>
        <div>
            <input type="text" placeholder="Enter a task..."
                value={newTask}
                onChange={handelInputChange} style={{ padding: "10px 20px" }} />
            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>
        <ol>
            {Tasks.map((Task, index) =>
                <li key={index}>
                    <span className="text">{Task}</span>
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        delete
                    </button>
                    <button
                        className="move-button"
                        onClick={() => moveTaskUp(index)}>
                        up
                    </button>
                    <button
                        className="move-button"
                        onClick={() => moveTaskDown(index)}>
                        Down
                    </button>
                </li>
            )}
        </ol>

    </div>
    );
}
export default ToDoList