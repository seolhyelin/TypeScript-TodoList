import React from "react";
import { useState } from "react";

export const AddTodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <form>
      <input type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};
