import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Todo from './Todo'

const DataMutation = () => {
  const { data } = useQuery({
    queryKey: ["getTodos"],
    queryFn: async () => {
      const response = await axios.get("https://6820bf0f259dad2655ad7a77.mockapi.io/api/v1/Todos")
      const data = response.data;
      return data;
    }
  })
  return (
    <div>
      <h1>Todos</h1>
      {data && data.map((todo) => {
        return (<Todo key={todo.id} todo={todo} />)
      })}
    </div>
  )
}

export default DataMutation