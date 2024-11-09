import { SampleIcons } from "@/components/sample-icons";
import { SampleIconsClient } from "@/components/sample-icons-client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 ">
      <SampleIcons />
      <SampleIconsClient />
    </div>
  );
}
