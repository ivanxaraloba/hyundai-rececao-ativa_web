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
} from "@/components/ui/popover"; // Assuming shadcn popover components
import { cn } from "@/lib/utils";
import { DotProps } from "@/utils/types";

interface DotComponentProps {
  dot: DotProps;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
  type: "create" | "toggle";
}

const Dot: React.FC<DotComponentProps> = ({
  dot,
  onClick,
  disabled,
  onChange,
  autoFocus,
  type,
}) => {
  const isToggle = type === "toggle";

  const handleOptionClick = (option: string) => {
    console.log(`Selected option: ${option}`);
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
                readOnly={isToggle}
                value={dot.name}
                onChange={(e) => type === "create" && onChange?.(e)}
                onClick={onClick}
                autoFocus={autoFocus}
                className={cn(
                  "rounded-full truncate focus:z-10 transition-transform size-6 text-xs text-center text-primary-foreground",
                  dot.status ? "bg-red-400" : "bg-gray-600",
                  disabled && "pointer-events-none",
                  type === "create" && "focus:w-40",
                  isToggle && "outline-none ring-0 cursor-pointer"
                )}
              />
            </TooltipTrigger>
          </PopoverTrigger>
          {dot.options && dot.options.length > 0 && (
            <PopoverContent side="right" className="p-2 w-40">
              <ul className="space-y-2">
                {dot.options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option.value)}
                    className="cursor-pointer text-sm hover:bg-gray-100 p-2 rounded"
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </PopoverContent>
          )}
        </Popover>
        <TooltipContent>
          <p>{dot.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Dot;
