import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-10">
      <Button className="mx-auto w-full max-w-xs">Click Me</Button >
      <Slider
        defaultValue={[75]}
        max={100}
        step={1}
        className="mx-auto w-full max-w-xs"
      />
    </main >

  );
}
