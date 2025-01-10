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
  onToggle: () => void;
  onSelect: (newDot: DotProps) => void;
  disabled?: boolean;
}

const Dot: React.FC<DotComponentProps> = ({
  dot,
  onToggle,
  onSelect,
  disabled,
}) => {
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
                  dot.status ? "bg-red-400" : "bg-gray-600",
                  disabled && "pointer-events-none",
                  "outline-none ring-0 cursor-pointer"
                )}
                value={""}
                onClick={dot.type === "single" ? () => onToggle() : undefined}
              />
            </TooltipTrigger>
          </PopoverTrigger>

          {/* Multi-type dots */}
          {dot.type === "multi" && dot.options?.length && (
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
                // exemplo 1
                // <div key={option.value} className="grid grid-cols-3 gap-2">
                //   <Toggle
                //     variant="outline"
                //     aria-label="Toggle italic"
                //     className="w-full data-[state=on]:bg-red-400 data-[state=on]:text-accent col-span-2"
                //   >
                //     <span>{option.label}</span>
                //   </Toggle>
                //   <Toggle
                //     variant="outline"
                //     aria-label="Toggle italic"
                //     className="data-[state=on]:bg-green-400"
                //   >
                //     <ScrollText className="h-4 w-4" />
                //   </Toggle>
                // </div>
                // exemplo 2
                // <div key={option.value} className="flex items-center gap-2">
                //   <Checkbox
                //     id={option.value}
                //     className="data-[state=checked]:bg-red-400"
                //     checked={dot.value?.includes(option.value)}
                //     onCheckedChange={() => onSelect(option.value)}
                //     disabled={disabled}
                //   />
                //   <Label htmlFor={option.value}>{option.label}</Label>
                // </div>
                // exemplo 3
                <div key={option.value} className="grid grid-cols-4">
                  <div className="flex items-center gap-2 col-span-3">
                    <Checkbox
                      id={option.value}
                      className="data-[state=checked]:bg-red-400"
                      checked={dot.value?.includes(option.value)}
                      disabled={disabled}
                      onCheckedChange={() => {
                        dot.value = dot.value
                          ? dot.value.includes(option.value)
                            ? dot.value.filter(
                                (v: string) => v !== option.value
                              )
                            : [...dot.value, option.value]
                          : [option.value];
                        onSelect(dot);
                      }}
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
                      disabled={!dot.value?.includes(option.value)}
                      // checked={dot.estimate}
                      // onCheckedChange={() => {
                      //   dot.estimate = !dot.estimate;
                      //   onSelect(dot);
                      // }}
                    />
                  </div>
                </div>
              ))}
              {/* <hr />
              <div className="flex items-center gap-2">
                <Checkbox
                  id="orcamento"
                  className="data-[state=checked]:bg-green-400"
                  disabled={disabled}
                />
                <Label htmlFor="orcamento">Orçamento</Label>
              </div> */}
            </PopoverContent>
          )}
        </Popover>
        <TooltipContent>{dot.name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Dot;
