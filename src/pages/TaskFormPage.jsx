import { useForm } from 'react-hook-form'
import { createTask } from '../api/tareas.api'

export function TaskFormPage() {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        const res = await createTask(data)
        console.log(res);
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Titulo"
                    {...register("Titulo", { required: true })}
                />

                {errors.Titulo && <span>Este campo es requerido</span>}
                <textarea
                    rows="3"
                    placeholder="Descripcion"
                    {...register("Descripcion", { required: true })}
                ></textarea>
                {errors.Descripcion && <span>Este campo es requerido</span>}
                <button>Guardar</button>
            </form>





        </div>
    )
}