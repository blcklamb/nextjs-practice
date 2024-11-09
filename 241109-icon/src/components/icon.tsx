import { VariantProps, cva } from "class-variance-authority";
import * as s from "@heroicons/react/24/solid";
import * as o from "@heroicons/react/24/outline";
import { cn } from "@/util/cn";

export interface IconProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof iconVarients> {
  name: keyof typeof s | keyof typeof o;
  solid?: boolean;
}

const iconVarients = cva("shrink-0 text-inherit", {
  variants: {
    size: {
      sm: "size-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

function Icon({ name, size, solid, className, ...props }: IconProps) {
  const HeroIcon = solid ? s[name] : o[name];
  return (
    <HeroIcon
      className={cn(
        iconVarients({
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Icon };
