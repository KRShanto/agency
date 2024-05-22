import { cn } from "@/lib/cn";
import React from "react";

export default function GradientButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button className="btn-gradient rounded-full border p-2 px-5">
      <p className={cn("btn-gradient-text", className)}>{children}</p>
    </button>
  );
}
