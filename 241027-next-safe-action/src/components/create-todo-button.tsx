"use client";

import { createTodoAction } from "@/actions/create-todo";
import { Button } from "./ui/button";
import { TodoCreate } from "../../utils/supabase";
import { useAction } from "next-safe-action/hooks";

interface CreateTodoButtonProps {
  newTodo: TodoCreate;
}

export default function CreateTodoButton({ newTodo }: CreateTodoButtonProps) {
  const createTodo = useAction(createTodoAction, {
    onSuccess: ({ data }) => {
      console.log(data);
    },
  });
  const onClickCreateButton = async () => {
    createTodo.execute(newTodo);
  };
  return <Button onClick={onClickCreateButton}>생성하기</Button>;
}
