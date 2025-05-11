import React from 'react'
import { useCounterStore } from './CounterStore'


const ZustandCounter = () => {
    const { count, increment, decrement } = useCounterStore();
    return (
        <>
            <span className='text-5xl font-bold'>counter: {count}</span>
            <div className='flex gap-x-2.5'>
                <button className='border hover:bg-amber-400 cursor-pointer p-5 rounded-2xl' onClick={increment} role='button'>increment</button>
                <button className='border hover:bg-amber-500 cursor-pointer p-5 rounded-2xl' onClick={decrement} role='button'>decrement</button>
            </div>
        </>
    )
}

export default ZustandCounter