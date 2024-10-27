"use server";

import { revalidatePath } from "next/cache";
import { TodoCreate } from "../../utils/supabase";
import { createClient } from "../../utils/supabase/server";
import { action } from "../../utils/next-safe-action/client";
import { z } from "zod";

export const createTodoAction = action
  .metadata({
    actionName: "createTodoAction",
  })
  .schema(z.custom<TodoCreate>())
  .action(async ({ parsedInput: todo }) => {
    const supabase = await createClient();
    const result = await supabase.from("todo").insert(todo);
    revalidatePath("/");
    return result;
  });
