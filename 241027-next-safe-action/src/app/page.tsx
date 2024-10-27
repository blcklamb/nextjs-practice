import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "../../utils/supabase/server";
import CreateTodoButton from "@/components/create-todo-button";
import { TodoCreate } from "../../utils/supabase";

const MOCK_NEW_TODO: TodoCreate = {
  title: "d",
  author: "d",
  is_done: false,
  due_at: new Date(new Date().getDate() + 1).toDateString(),
};

export default async function Home() {
  const supabase = await createClient();
  const { data: todo } = await supabase.from("todo").select();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-[600px] h-fit flex flex-col gap-4">
        <div className="text-3xl">My TODOs</div>
        <div className="flex flex-col gap-2">
          {todo?.map((ele) => {
            return (
              <div className="flex items-center space-x-2" key={ele.id}>
                <Checkbox />
                <label
                  htmlFor="todo"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {ele.title}
                </label>
              </div>
            );
          })}
        </div>
        <CreateTodoButton newTodo={MOCK_NEW_TODO} />
      </div>
    </div>
  );
}
