import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "../../utils/supabase/server";

import InputSection from "@/components/input-section";

const tomorrow = new Date(new Date());
tomorrow.setDate(tomorrow.getDate() + 1);

export default async function Home() {
  const supabase = await createClient();
  const { data: todo } = await supabase.from("todo").select();
  const { data: adjectives } = await supabase
    .from("nickname-adjective")
    .select("*");
  const { data: animals } = await supabase.from("nickname-animal").select("*");
  const { data: jobs } = await supabase.from("nickname-job").select("*");

  if (!adjectives || !animals || !jobs) return;
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
        <InputSection nicknameData={{ adjectives, animals, jobs }} />
      </div>
    </div>
  );
}
