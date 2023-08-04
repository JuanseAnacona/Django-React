import { Link } from "react-router-dom";

export function Navegador() {
    return (
        <div>
            <Link to="/tasks">
                <h1> Task app</h1>
            </Link>

            <Link to="/tasks-create" >create task</Link>
        </div>
    )
}