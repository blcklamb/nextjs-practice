import { cn } from "@/util/cn";
import { cva } from "class-variance-authority";
import { RemixType } from "./remix-type";

interface IconProps {
  name: RemixType;
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  className?: string;
}

const fontSizeVariants = cva("inline-flex align-middle", {
  variants: {
    size: {
      sm: "text-sm/[14px]",
      base: "text-base/[16px]",
      lg: "text-lg/[18px]",
      xl: "text-xl/[20px]",
      "2xl": "text-2xl/[24px]",
      "3xl": "text-5 text-[40px]/[40px]",
      "4xl": "text-[80px]/[80px]",
      "5xl": "text-[120px]/[120px]",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

function Icon({ name, size, className }: IconProps) {
  return (
    <i className={cn(`ri-${name}`, fontSizeVariants({ size }), className)}></i>
  );
}

export { Icon };
