import { Database, Tables } from "./database.types";

export type Todo = Tables<"todo">;

export type TodoCreate = Database["public"]["Tables"]["todo"]["Insert"];
