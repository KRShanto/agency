import { cn } from "@/lib/cn";
import React from "react";

export default function GradientButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: any) => void;
}) {
  return (
    <button
      className="btn-gradient rounded-full border p-2 px-5"
      onClick={onClick}
    >
      <p className={cn("btn-gradient-text", className)}>{children}</p>
    </button>
  );
}
