import React from 'react'

const Todo = ({ todo,handleChange }) => {
    return (
        <div className='flex flex-col gap-3 border rounded-2xl p-8 m-4'>
            <h2 className='text-blue-500 text-bold'>{todo.name}</h2>
            <div className='flex gap-1.5'>
                <label htmlFor="done">Done:</label>
                <input onChange={handleChange} type="checkbox" name="done" id="done" checked={todo.completed} />
            </div>
        </div>
    )
}

export default Todo