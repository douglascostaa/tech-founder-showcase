import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "electric";
  size?: "sm" | "md" | "lg" | "xl";
}

const BentoCard = ({ children, className, variant = "default", size = "md" }: BentoCardProps) => {
  const sizeClasses = {
    sm: "col-span-1 row-span-1",
    md: "col-span-1 row-span-2 md:col-span-2",
    lg: "col-span-1 row-span-2 md:col-span-2 lg:col-span-3",
    xl: "col-span-1 row-span-3 md:col-span-3 lg:col-span-4"
  };

  const variantClasses = {
    default: "bento-card",
    dark: "bento-card bento-card-dark",
    electric: "bento-card bento-card-electric"
  };

  return (
    <div className={cn(
      "grid-appear",
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      {children}
    </div>
  );
};

export default BentoCard;