import { Database, Tables } from "./database.types";

export type Todo = Tables<"todo">;

export type TodoCreate = Database["public"]["Tables"]["todo"]["Insert"];

export type SingleNickname = {
  adjective: Tables<"nickname-adjective">;
  animal: Tables<"nickname-animal">;
  job: Tables<"nickname-job">;
};
