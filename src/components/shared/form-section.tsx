import React from "react";

export default function FormSection({
  label,
  children,
}: {
  label: string;
  children: any;
}) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl">{label}</h1>
      <div className="flex flex-col gap-4 mt-6">{children}</div>
    </div>
  );
}
