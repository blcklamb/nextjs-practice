"use client";

import { useState } from "react";
import CreateTodoButton from "./create-todo-button";
import { Input } from "./ui/input";
import {
  CreateNicknameSection,
  CreateNicknameSectionProps,
} from "./create-nickname-section";

interface InputSectionProps {
  nicknameData: CreateNicknameSectionProps;
}

export default function InputSection({ nicknameData }: InputSectionProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col">
      <CreateNicknameSection {...nicknameData} />
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <CreateTodoButton
          onClickButton={() => setInputValue("")}
          newTodo={{
            title: inputValue,
            author: "",
          }}
        />
      </div>
    </div>
  );
}
