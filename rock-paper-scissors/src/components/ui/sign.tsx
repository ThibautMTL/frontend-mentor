import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Image from "next/image";
const signVariants = cva(
  "z-10 rounded-full border-[16px] bg-white w-[120px] h-[120px] grid place-content-center shadow-game-btn transition-all duration-1000 ease-in-out",
  {
    variants: {
      variant: {
        rock: "border-rock-from ",
        paper: "border-paper-from ",
        scissors: "border-scissor-from",
      },
    },
    defaultVariants: {
      variant: "rock",
    },
  }
);

export interface SignProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof signVariants> {}

const Sign = React.forwardRef<HTMLButtonElement, SignProps>(
  ({ className, variant = "rock", ...props }, ref) => {
    return (
      <button
        className={cn(signVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <Image
          src={`/images/icon-${variant}.svg`}
          alt={variant ?? "rock"}
          width={40}
          height={40}
        />
      </button>
    );
  }
);
Sign.displayName = "Sign";
export { Sign, signVariants };
