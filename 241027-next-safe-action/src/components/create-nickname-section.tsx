import { useState } from "react";
import { SingleNickname } from "../../utils/supabase";
import { LuRefreshCw } from "react-icons/lu";

export interface CreateNicknameSectionProps {
  adjectives: SingleNickname["adjective"][];
  animals: SingleNickname["animal"][];
  jobs: SingleNickname["job"][];
}

function pickRandom<T>(data: T[]): T {
  return data[Math.round(Math.random() * data.length)];
}

const flatObject = (obj: SingleNickname) => {
  const emoji = obj.animal.emoji;
  const combinedName = Object.values(obj)
    .map((ele) => ele.label || "")
    .join(" ");
  return emoji + " " + combinedName;
};

export function CreateNicknameSection({
  adjectives,
  animals,
  jobs,
}: CreateNicknameSectionProps) {
  const [nicknameInfo, setNicknameInfo] = useState<SingleNickname>({
    adjective: pickRandom<SingleNickname["adjective"]>(adjectives),
    animal: pickRandom<SingleNickname["animal"]>(animals),
    job: pickRandom<SingleNickname["job"]>(jobs),
  });

  const onClickRefreshNickname = () => {
    const newNickname = {
      adjective: pickRandom<SingleNickname["adjective"]>(adjectives),
      animal: pickRandom<SingleNickname["animal"]>(animals),
      job: pickRandom<SingleNickname["job"]>(jobs),
    };
    setNicknameInfo(newNickname);
  };

  return (
    <div className="flex gap-2">
      {flatObject(nicknameInfo)}
      <button onClick={onClickRefreshNickname}>
        <LuRefreshCw />
      </button>
    </div>
  );
}
