import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchTodo = () => {
  return axios.get("http://localhost:4000/todo");
};

const addTodo = (todo) => {
  return axios.post("http://localhost:4000/todo", todo);
};

const deleteTodo = (id) => {
  return axios.delete(`http://localhost:4000/todo/${id}`);
};

export const useTodoData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["todo"],
    queryFn: fetchTodo,
    onSuccess,
    onError
  });
};


export const useAddTodoData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
      
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });
};
