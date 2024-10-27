"use client";

import { createTodoAction } from "@/actions/create-todo";
import { Button } from "./ui/button";
import { Todo, TodoCreate } from "../../utils/supabase";

interface CreateTodoButtonProps {
  newTodo: TodoCreate;
}

export default function CreateTodoButton({ newTodo }: CreateTodoButtonProps) {
  const onClickCreateButton = async () => {
    const result = await createTodoAction(newTodo);
    console.log(result);
  };
  return <Button onClick={onClickCreateButton}>생성하기</Button>;
}
