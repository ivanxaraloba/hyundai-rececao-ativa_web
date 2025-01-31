"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eraser, Undo } from "lucide-react";
import { useHotkeys } from "@mantine/hooks";
import Dot from "@/components/shared/dot";

export default function Page() {
  const router = useRouter();
  const [dots, setDots] = useState<Dot[]>([]);
  const [eraserActive, setEraserActive] = useState(false);

  const addOrRemove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const marginFix = 0;

    const x = e.clientX - rect.left - marginFix;
    const y = e.clientY - rect.top - marginFix;

    if (eraserActive) {
      const newDots = dots.filter(
        (dot) => Math.hypot(dot.x - x, dot.y - y) > 15
      );
      setDots(newDots);
    } else {
      const newDot: Dot = {
        id: dots.length + 1,
        x,
        y,
        type: "start",
        value: "",
      };
      setDots((prevDots) => [...prevDots, newDot]);
    }
  };

  const undo = () => {
    setDots((prevDots) => prevDots.slice(0, -1));
  };

  const toggleEraser = () => {
    setEraserActive((prev) => !prev);
  };

  const onInputChange = (index: number, newValue: string) => {
    setDots((prevDots) =>
      prevDots.map((dot, i) =>
        i === index ? { ...dot, value: newValue } : dot
      )
    );
  };

  const save = () => {
    if (dots.length > 0) {
      localStorage.setItem("dots", JSON.stringify(dots));
      toast.success("Points saved to localStorage!");
      router.push("/");
    } else {
      toast.error("No points to save.");
    }
  };

  useHotkeys([["mod+Z", () => undo()]]);

  return (
    <div className="flex flex-col justify-center items-center p-24 gap-4 max-w-lg">
      <div className="relative flex items-center justify-center min-w-[380px] w-[380px]">
        {/* image */}
        <img
          className="min-w-[380px] w-[380px] select-none"
          src="https://previewengine-accl.zohoexternal.com/image/WD/letco0f5069236adb4cba9e4a7036e2c22d12"
          alt="clickable_image"
          onClick={addOrRemove}
        />
        {/* dots */}
        {dots.map((dot, index) => (
          <Dot
            key={index}
            dot={dot}
            autoFocus
            type="create"
            onChange={(e) => onInputChange(index, e.target.value)}
          />
        ))}

        {/* Undo and Eraser buttons */}
        <div className="absolute top-0 left-0 flex gap-2 p-2">
          <Button onClick={undo} disabled={!dots.length} variant="outline">
            <Undo className="w-4 h-4" />
          </Button>
          <Button
            onClick={toggleEraser}
            variant={eraserActive ? "destructive" : "outline"}
          >
            <Eraser className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Id do mapa" />
        <Button onClick={save}>Create</Button>
      </div>
    </div>
  );
}
