import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { queryClient } from '../../App'

const Todo = ({ todo }) => {
    const { mutate } = useMutation({
        mutationKey: ["putTodo"],
        mutationFn: async (todo) => {
            console.log(todo.id)
            await axios.put(`https://6820bf0f259dad2655ad7a77.mockapi.io/api/v1/Todos/${todo.id}`, {
                id: todo.id,
                name: todo.name,
                completed: !todo.completed
            })


        },
        onSuccess: () => {
            queryClient.invalidateQueries("getTodos");
        },
        onError: (err) => {
            console.error("Mutation failed:", err);
        }
    });

    const handleCheckboxChange = () => {
        mutate({
            id: todo.id,
            name: todo.name,
            completed: !todo.completed
        });
    };

    return (
        <div className='flex flex-col gap-3 border rounded-2xl p-8 m-4'>
            <h2 className='text-blue-500 text-bold'>{todo.name}</h2>
            <div className='flex gap-1.5'>
                <label htmlFor={todo.name}>Done:</label>
                <input onChange={handleCheckboxChange} type="checkbox" name={todo.name} id={todo.name} checked={todo.completed} />
            </div>
        </div>
    )
}

export default Todo