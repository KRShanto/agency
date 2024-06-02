"use client";

import { CALENDLY_LINK } from "@/lib/consts";
import GradientButton from "./GradientButton";

export default function BookMeeting() {
  return (
    <GradientButton
      className="text-lg font-semibold max-[600px]:text-sm"
      onClick={() => {
        // TODO: for now, open calendly in a new tab
        window.open(CALENDLY_LINK, "_blank");
      }}
    >
      Book a meeting
    </GradientButton>
  );
}
