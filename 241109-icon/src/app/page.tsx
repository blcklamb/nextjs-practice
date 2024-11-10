import { SampleRemixWebfontIcons } from "@/components/sample-remix-webfont-icons";
import { SampleRemixWebfontIconsClient } from "@/components/sample-remix-webfont-icons-client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 ">
      <SampleRemixWebfontIcons />
      <SampleRemixWebfontIconsClient />
    </div>
  );
}
