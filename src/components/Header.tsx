"use client";

import React from "react";
import BookMeeting from "./BookMeeting";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      {/* TODO: Logo */}
      <h1 className="text-3xl font-bold text-yellow-400">ShortFlows</h1>

      <BookMeeting />
    </div>
  );
}
