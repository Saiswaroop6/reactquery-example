import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTodo = ({queryKey}) => { 
    const todoId = queryKey[1]
  return axios.get(`http://localhost:4000/todo/${todoId}`);
};

export const useTodoData = (todoId) => {
  return useQuery( {queryKey:["todo", todoId], queryFn:fetchTodo})
};

