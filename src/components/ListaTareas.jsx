import { useEffect, useState } from "react"
import { getAllTask } from "../api/tareas.api"
import { Tarjetas } from "./tarjetas";

export function ListaTareas() {
    const [task, setTask] = useState([]);


    useEffect(() => {
        async function cargarTareas() {
            const res = await getAllTask();
        setTask(res.data)
        }
        cargarTareas();
    }, [])

    return (
        <div>
            {task.map(task => (
                <Tarjetas key={task.id} task= {task} />
            ))}
        </div>
    )
}


