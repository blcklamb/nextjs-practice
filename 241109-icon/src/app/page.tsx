import { SampleRemixIconsClient } from "@/components/sample-remix-icons";
import { SampleRemixIcons } from "@/components/sample-remix-icons-client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 ">
      <SampleRemixIcons />
      <SampleRemixIconsClient />
    </div>
  );
}
