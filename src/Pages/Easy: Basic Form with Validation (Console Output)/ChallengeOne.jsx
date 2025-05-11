import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'


const ChallengeOne = () => {

  const { isPending, data, isError, isSuccess } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
      console.log(data);
      return response.data;
    }
  })
  console.log("hello")
  return (
    <div>
      <h1 className='text-center text-extrabold font-serif text-slate-900 text-6xl'>todos</h1>
      <ul className='flex flex-wrap gap-2.5'>
        {
          data && data.map((todo) => {
            return <li key={todo.id} className='flex flex-col border border-slate-600 max-w-2xs p-3 rounded-2xl'>
              <h1>{todo.title}</h1>
              <input type="checkbox" checked={todo.completed} />
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default ChallengeOne