"use server";

import { revalidatePath } from "next/cache";
import { TodoCreate } from "../../utils/supabase";
import { createClient } from "../../utils/supabase/server";

export const createTodoAction = async (todo: TodoCreate) => {
  const supabase = await createClient();
  const result = await supabase.from("todo").insert(todo);
  revalidatePath("/");
  return result;
};
