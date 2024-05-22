import React from "react";
import GradientButton from "./GradientButton";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      {/* TODO: Logo */}
      <h1 className="text-3xl font-bold text-yellow-400">ShortFlows</h1>

      {/* TODO: calendly link */}
      <GradientButton className="text-lg font-semibold">
        Book a meeting
      </GradientButton>
    </div>
  );
}
