import React, { useState } from "react";
import { useAddTodoData } from "../../hooks/todo";

const AddTodo = () => {
  const [TaskName, setTaskName] = useState("");
  const [Priority, setPriority] = useState("");
  const { mutate } = useAddTodoData();

  const handleAddTodo = () => {
    const data = { TaskName, Priority };
    mutate(data);
  };
  return (
    <div>
      <label htmlFor='taskName'>TaskName</label>
      <input
        type="text"
        id='taskName'
        value={TaskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label htmlFor='priority'>Priority</label>
        <input
        id='priority'
        type="text"
        value={Priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
