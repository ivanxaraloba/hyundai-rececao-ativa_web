import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { DotProps } from "@/utils/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
import { ScrollText } from "lucide-react";

interface DotComponentProps {
  dot: DotProps;
  onSelect: (newDot: DotProps) => void;
  disabled?: boolean;
}

const Dot: React.FC<DotComponentProps> = ({ dot, onSelect, disabled }) => {
  const handleOptionToggle = (optionValue: string) => {
    const updatedOptions = dot.options?.map((option) =>
      option.value === optionValue
        ? { ...option, active: !option.active }
        : option
    );

    onSelect({ ...dot, options: updatedOptions });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <Popover>
          <PopoverTrigger asChild>
            <TooltipTrigger
              type="button"
              className="absolute origin-center"
              style={{
                left: dot.x,
                top: dot.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <input
                type="text"
                readOnly
                className={cn(
                  "rounded-full truncate focus:z-10 transition-transform size-6 text-xs text-center text-primary-foreground",
                  dot.active ? "bg-red-400" : "bg-gray-600",
                  disabled && "pointer-events-none",
                  "outline-none ring-0 cursor-pointer"
                )}
                value={""}
              />
            </TooltipTrigger>
          </PopoverTrigger>

          {/* Multi-type dots */}
          {dot.options && dot.options.length > 0 && (
            <PopoverContent side="right" className="flex flex-col gap-2">
              <div className="grid gap-4">
                <div className="">
                  <h4 className="font-medium leading-none">Danos</h4>
                  <p className="text-sm text-muted-foreground">
                    Selecione o tipo de dano
                  </p>
                </div>
              </div>
              {dot.options.map((option) => (
                <div key={option.value} className="grid grid-cols-4">
                  <div className="flex items-center gap-2 col-span-3">
                    <Checkbox
                      id={option.value}
                      className="data-[state=checked]:bg-red-400"
                      checked={option.active}
                      disabled={disabled}
                      onCheckedChange={() => handleOptionToggle(option.value)}
                    />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`estimate_${option.value}`}>
                      <ScrollText className="size-4" strokeWidth={1.5} />
                    </Label>
                    <Checkbox
                      id={`estimate_${option.value}`}
                      className="data-[state=checked]:bg-green-400"
                      disabled={!option.active}
                    />
                  </div>
                </div>
              ))}
            </PopoverContent>
          )}
        </Popover>
        <TooltipContent>{dot.name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Dot;
