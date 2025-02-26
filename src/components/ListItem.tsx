import React from "react";


interface TaskListProps {
    title: string; // Title of the list (e.g., "Pending Tasks")
    tasks: { id: string; text: string; completed: boolean }[]; // List of tasks
    onToggleComplete: (id: string) => void; // Function to toggle completion
    onRemoveTask: (id: string) => void; // Function to remove a task
}

const TaskList: React.FC<TaskListProps> = ({
                                               title,
                                               tasks,
                                               onToggleComplete,
                                               onRemoveTask,
                                           }) => {
    return (
        <div>
            <h2
                className={`${title=="Pending Tasks"?"pending-tasks":"completed-tasks"}`}
            ><u>{title}</u></h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
            <span
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                }}
            >
              {task.text}
            </span>
                        <button onClick={() => onToggleComplete(task.id)}
                                className={`btn btn-sm ${
                                    task.completed ? "btn-warning" : "btn-success"
                                } me-2`}
                        >
                            {task.completed ? "Undo" : "Complete"}
                        </button>| |
                        <button
                            className={"btn btn-sm btn-danger"}
                            onClick={() => onRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;