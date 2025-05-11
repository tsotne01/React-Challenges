import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

const ConditionalFetching = () => {
    const [shouldFetch, setShouldFetch] = useState(false);

    const { data } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
            const data = response.data;
            return data;
        },
        enabled: shouldFetch
    })


    return (
        <>
        <div className='flex flex-col gap-2.5 max-w-2xl mb-8'>
            <span className='text-2xl text-blue-500'>Should Fetch is: {shouldFetch ? "True" : "Flase"}</span>
            <button className='max-w-80 rounded-2xl py-3 bg-amber-300 hover:bg-amber-800 cursor-pointer' role='button' onClick={() => setShouldFetch((prev) => !prev)}>Change ShouldFetch</button>
        </div>
        <div className='flex flex-wrap gap-5'>
            {data && data.map((comment) =>{
                return (
                    <div key={comment.id} className='flex rounded-2xl border p-5 flex-col gap-2.5 max-w-3xs'>
                        <span className='text-blue-800 text-2xl font-bold'>{comment.name}</span>
                        <span className='text-blue-500 underline'>{comment.email}</span>

                    </div>
                )
            })}
        </div>
        </>
        
    )
}

export default ConditionalFetching