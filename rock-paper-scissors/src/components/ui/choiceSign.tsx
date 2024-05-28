import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Sign } from "./sign";
const choiceSignVariants = cva(
  "z-20 absolute transition-all duration-1000 ease-in-out",
  {
    variants: {
      variant: {
        rock: "border-rock-from bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(50%+14px)]",
        paper:
          "border-paper-from top-0 left-0 -translate-x-1/2 -translate-y-1/2",
        scissors:
          "border-scissor-from top-0 right-0 translate-x-1/2 -translate-y-1/2",
      },
    },
    defaultVariants: {
      variant: "rock",
    },
  }
);

export interface ChoiceSignProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof choiceSignVariants> {
  children: React.ReactNode;
}

const ChoiceSign = React.forwardRef<HTMLDivElement, ChoiceSignProps>(
  ({ className, variant = "rock", children, ...props }, ref) => {
    return (
      <div
        className={cn(choiceSignVariants({ variant, className }))}
        {...props}
        ref={ref}
      >
        <Sign variant={variant} />
        {children}
      </div>
    );
  }
);
ChoiceSign.displayName = "Sign";
export { ChoiceSign, choiceSignVariants };
