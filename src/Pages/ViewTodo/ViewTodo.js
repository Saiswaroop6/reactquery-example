import React from 'react'
import { useParams } from 'react-router-dom';
import { useTodoData } from '../../hooks/viewTodo';

const ViewTodo = () => {
    const {id} = useParams()
    const { isLoading, data, isError, error, isFetching ,refetch} = useTodoData(id)
    if (isLoading || isFetching) {
        return <h2>Loading...</h2>;
      }
      if (isError) {
        return <h2>{error.message}</h2>;
      }
  return (
    <div>{data?.data.TaskName} - {data?.data.Priority}</div>
  )
}
export default ViewTodo
