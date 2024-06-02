import Benefits from "@/components/Benefits";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import { SITE_NAME } from "@/lib/consts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Boost Your Business by Elevating Your Online Presence`,
  description: `Whether you're a startup looking to make a splash or an
  established business aiming to refresh your online presence, ${SITE_NAME} is your trusted partner in achieving digital excellence. Let's collaborate to elevate your online presence and propel your business forward.`,
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Solutions />
      <Benefits />
      <Clients />
    </div>
  );
}
