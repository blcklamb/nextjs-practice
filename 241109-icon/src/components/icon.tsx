import * as RemixIcons from "@remixicon/react";
import { cn } from "@/util/cn";
import { SVGProps } from "react";

type AllSVGProps = SVGProps<SVGSVGElement>;
type ReservedProps = "color" | "size" | "width" | "height" | "fill" | "viewBox";
interface RemixiconProps
  extends Pick<AllSVGProps, Exclude<keyof AllSVGProps, ReservedProps>> {
  color?: string;
  size?: number | string;
  children?: never;
}

type RemixIconsType = keyof typeof RemixIcons;

export interface IconProps extends RemixiconProps {
  name: RemixIconsType;
}

function Icon({ name, className, ...props }: IconProps) {
  const RemixIcon = RemixIcons[name];

  return <RemixIcon className={cn("shrink-0", className)} {...props} />;
}

export { Icon };
