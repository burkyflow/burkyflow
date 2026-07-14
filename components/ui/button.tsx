import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform active:translate-y-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Logo orange, deepening to a darker orange on hover.
        primary:
          "bg-brand-cta text-brand-cta-fg shadow-soft hover:bg-brand-cta-hover hover:-translate-y-0.5 hover:shadow-soft-lg hover:[&_svg]:translate-x-0.5",
        secondary:
          "bg-white text-foreground border border-border shadow-soft hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-soft-lg",
        ghost: "text-foreground hover:bg-surface hover:text-accent",
        link: "text-brand underline-offset-4 hover:text-accent hover:underline",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
