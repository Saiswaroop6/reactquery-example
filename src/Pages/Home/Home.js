import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useTodoData, useDeleteTodo } from "../../hooks/todo";

export const Home = () => {
  const onSuccess = (res) => {
    console.log("Perform side affect after data fetching");
  };
  const onError = () => {
    console.log("Perform side affect after encountering error");
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useTodoData(onSuccess, onError);
  
  const { mutate: deleteMethod } = useDeleteTodo();

  const deleteTodo = (id) => deleteMethod(id);
  

  
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <button onClick={refetch}>Get Todo's</button>
      {data?.data.map((todo) => {
        return (
          <div key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.TaskName}</Link>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
              style={{ marginLeft: "20px" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
