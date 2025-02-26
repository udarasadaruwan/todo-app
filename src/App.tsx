import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/ListItem.tsx";

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

function App() {
    // State to manage the list of tasks
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState<string>("");


    const addTask = (): void => {
        if (inputValue.trim() !== "") {
            const newTask: Task = {
                id: crypto.randomUUID(), // Unique ID for each task
                text: inputValue,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setInputValue(""); // Clear the input field
        }
    };


    const toggleComplete = (id: string): void => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };


    const removeTask = (id: string): void => {
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
    };


    const pendingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <div className="app">
            <h1>To-Do App</h1>

            {/* Input and Add Button */}
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <hr/>

            <TaskList
                title="Pending Tasks"
                tasks={pendingTasks}
                onToggleComplete={toggleComplete}
                onRemoveTask={removeTask}
            />

<hr/>
            <TaskList
                title="Completed Tasks"
                tasks={completedTasks}
                onToggleComplete={toggleComplete}
                onRemoveTask={removeTask}
            />
        </div>
    );
}

export default App;