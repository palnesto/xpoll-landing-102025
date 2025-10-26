import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// tailwind-variants for color & base styling
const glowButton = tv({
  base: `
    inline-flex items-center justify-center
    text-white/80 font-medium rounded-full
    transition-all duration-200 ease-in-out
    hover:text-white
  `,
  variants: {
    color: {
      default:
        "bg-[rgb(145,92,182)] hover:shadow-[0_5px_25px_rgba(145,92,182,0.6)]",
      blue: "bg-blue-500 hover:shadow-[0_5px_25px_rgba(59,130,246,0.6)]",
      red: "bg-red-500 hover:shadow-[0_5px_25px_rgba(239,68,68,0.6)]",
      green: "bg-green-500 hover:shadow-[0_5px_25px_rgba(34,197,94,0.6)]",
      custom: "",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

// size class map
const sizeClasses = {
  sm: "px-8 py-2 text-sm",
  md: "px-10 py-3 text-md",
  lg: "px-12 py-4 text-lg",
  xl: "px-14 py-5 text-xl",
  "2xl": "px-16 py-6 text-2xl",
};

// helper type for responsive props
type ResponsiveSize = keyof typeof sizeClasses;
type Responsive<T> =
  | T
  | { base?: T; sm?: T; md?: T; lg?: T; xl?: T; "2xl"?: T };

// merge responsive classes
const getResponsiveClasses = (size?: Responsive<ResponsiveSize>) => {
  if (!size) return "";
  if (typeof size === "string") return sizeClasses[size];
  return Object.entries(size)
    .map(([bp, val]) => {
      if (!val) return "";
      const prefix = bp === "base" ? "" : `${bp}:`;
      return `${prefix}${sizeClasses[val]}`;
    })
    .join(" ");
};

// helper: convert color to RGBA shadow
function toRgbaShadow(color: string, opacity = 0.6) {
  if (!color) return `rgba(145,92,182,${opacity})`;

  if (color.startsWith("rgba")) {
    const parts = color
      .replace(/[rgba()]/g, "")
      .split(",")
      .map((v) => v.trim());
    return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${opacity})`;
  }

  if (color.startsWith("rgb")) {
    return color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
  }

  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return `rgba(145,92,182,${opacity})`;
}

type GlowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof glowButton> & {
    size?: Responsive<ResponsiveSize>;
    customColor?: string;
    intensity?: number;
  };

export const GlowButton = ({
  size = "md",
  color,
  customColor,
  intensity = 0.6,
  className,
  children,
  ...props
}: GlowButtonProps) => {
  const style =
    color === "custom" && customColor
      ? {
          background: customColor,
          boxShadow: `0 8px 30px ${toRgbaShadow(customColor, intensity)}`,
        }
      : {};

  const responsiveSizeClasses = getResponsiveClasses(size);

  return (
    <button
      {...props}
      className={`${glowButton({ color })} ${responsiveSizeClasses} ${
        className || ""
      }`}
      style={style}
    >
      {children}
    </button>
  );
};
