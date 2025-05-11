import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { formWithMutationSchema } from './Schema'

const FormWithMutation = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(formWithMutationSchema)
    })

    const onSubmit = ()=> console.log("submitted");
    return (
        <div>
            <form className='flex flex-col justify-center' onSubmit={handleSubmit(onSubmit)}>
                <label className='text-blue-500 text-2xl' htmlFor="name">Name</label>
                <input className='border rounded-2xl p-2' {...register("name")} type="text" name='name' id='name' />
                {errors.name && <span className='text-sm text-red-500'>{errors.name.message}</span>}
                <div className='flex gap-2'>
                    <label className='text-blue-500 text-2xl' htmlFor="completed">Completed</label>
                    <input className='border rounded-2xl p-2' {...register("completed")} type="checkbox" name="completed" id="completed" />
                </div>
                {errors.completed && <span className='text-sm text-red-500'>{errors.completed.message}</span>}
                <button className='rounded-2xl p-4 border mx-auto' role='submit' type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default FormWithMutation