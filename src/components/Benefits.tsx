import Image from "next/image";
import React from "react";

const benefits = [
  {
    title: "Rapid Delivery",
    description: "Receive your designs promptly, typically within days.",
  },
  {
    title: "Flexible Pricing",
    description: "Our rates are adaptable and budget-friendly.",
  },
  {
    title: "Lightning-Fast Websites",
    description: "Ensure a seamless user experience with swift loading times.",
  },
  {
    title: "Stunning Designs",
    description: "Elevate your brand with visually captivating websites.",
  },
];

export default function Benefits() {
  return (
    <div className="mt-32">
      <h2 className="text-center text-4xl font-bold">
        Benefits Working With Us
      </h2>

      <div className="mx-auto mt-14 grid w-[1100px] grid-cols-2 items-center justify-items-center gap-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex w-[500px] flex-col items-center gap-2 rounded-lg border-slate-700 p-3"
          >
            {/* TODO */}
            <Image
              src={`/MainRocket.png`}
              width={100}
              height={70}
              alt={benefit.title}
            />
            <h3 className="text-2xl font-bold text-slate-300">
              {benefit.title}
            </h3>
            <p className="text-slate-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
