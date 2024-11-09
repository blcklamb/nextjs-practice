"use client";

import { createTodoAction } from "@/actions/create-todo";
import { Button } from "./ui/button";
import { TodoCreate } from "../../utils/supabase";
import { useAction } from "next-safe-action/hooks";

interface CreateTodoButtonProps {
  newTodo: TodoCreate;
  onClickButton: () => void;
}

export default function CreateTodoButton({
  newTodo,
  onClickButton,
}: CreateTodoButtonProps) {
  const createTodo = useAction(createTodoAction, {
    onSuccess: ({ data }) => {
      console.log(data);
    },
  });
  const onClickCreateButton = async () => {
    createTodo.execute(newTodo);
    onClickButton();
  };
  return <Button onClick={onClickCreateButton}>생성하기</Button>;
}
