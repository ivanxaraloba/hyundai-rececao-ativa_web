// @ts-nocheck

"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Link from "next/link";
import { DotProps } from "@/utils/types";

export default function Home() {
  const [dots, setDots] = useState<DotProps[]>([]);

  useEffect(() => {
    const storedDots = localStorage.getItem("dots");
    if (storedDots) setDots(JSON.parse(storedDots));
  }, []);

  const toggleDot = (index: number) => {
    setDots((prevDots) =>
      prevDots.map((dot, i) =>
        i === index
          ? { ...dot, type: dot.type === "start" ? "dot" : "start" }
          : dot
      )
    );
  };

  return (
    <div className="flex flex-col justify-center items-center p-24 gap-4">
      <Link href="/create">
        <Button>New Map</Button>
      </Link>
      <div className="relative flex items-center justify-center min-w-[380px] w-[380px]">
        {/* image */}
        <img
          className="min-w-[380px] w-[380px] select-none"
          src="https://previewengine-accl.zohoexternal.com/image/WD/letco0f5069236adb4cba9e4a7036e2c22d12"
          alt="clickable_image"
        />
        {/* dots */}
        {dots.map((dot, index) => (
          <div
            key={dot.id}
            className={cn(
              "w-4 h-4 absolute cursor-pointer border text-black text-xs grid place-items-center",
              dot.type === "start" ? "bg-red-200" : "bg-green-400"
            )}
            style={{ left: dot.x, top: dot.y }}
            onClick={() => toggleDot(index)}
          >
            <span>{dot.value}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {dots
          .filter((dot: Dot) => dot.type === "dot")
          .map((filteredDot) => (
            <span
              key={filteredDot.id}
              className="bg-secondary size-8 text-sm grid place-items-center rounded-md"
            >
              {filteredDot.value}
            </span>
          ))}
      </div>
    </div>
  );
}
