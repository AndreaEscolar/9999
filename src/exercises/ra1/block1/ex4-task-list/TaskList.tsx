interface Task {
    id: number,
    title: string,
    completed: boolean
}

interface TaskListProps {
    tasks: Task[]
}

export const TaskList = ({ tasks }: TaskListProps) => {
    return (
        <ul>
            {
                tasks.map(task => (
                    <li 
                        key={task.id}
                        style= {{ textDecoration: task.completed ? "line-through" : "none" }}
                    >
                        {task.title}
                    </li>
                ))
            }
        </ul>
    )
}

