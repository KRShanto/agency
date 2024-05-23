"use client";

import { cn } from "@/lib/cn";
import Boost from "@/../public/animations/Boost.json";
import Brand from "@/../public/animations/Brand.json";
import Connect from "@/../public/animations/Connect.json";
import SEO from "@/../public/animations/SEO.json";
import Shopping from "@/../public/animations/Shopping.json";
import Website from "@/../public/animations/Website.json";
import dynamic from "next/dynamic";
import Image from "next/image";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const services = [
  {
    title: "Make Your Website Stand Out",
    description: "Create a unique website that attracts attention",
    animation: Website,
  },
  {
    title: "Connect With Your Customers",
    description:
      "Build a strong connection with your audience through engaging content",
    animation: Connect,
  },

  {
    title: "Stay Ahead with SEO",
    description:
      "Optimize your website to rank higher in search engine results.",
    animation: SEO,
  },
  {
    title: "Streamline Your E-commerce",
    description: "Maximize your online store's efficiency and user experience.",
    animation: Shopping,
  },
  {
    title: "Enhance Brand Identity",
    description:
      "Craft a memorable brand identity that resonates with your audience.",
    animation: Brand,
  },
  {
    title: "Boost Conversion Rates",
    description: "Optimize your website to convert visitors into customers.",
    animation: Boost,
  },
];

export default function Solutions() {
  return (
    <div className="mt-32">
      <h2 className="text-center text-4xl font-bold">Our Business Solutions</h2>

      <div className="mt-14 flex flex-col gap-20">
        {services.map((service, index) => (
          <div
            className={cn(
              "flex",
              index % 2 === 0 ? "flex-row" : "flex-row-reverse",
            )}
            key={index}
          >
            <div
              className={cn(
                "flex w-[950px] items-center justify-between gap-5 border border-slate-600 p-8 py-5",
                index % 2 === 0 ? "rounded-r-full" : "rounded-l-full",
                index % 2 === 0 ? "bg-slate-800" : "bg-slate-900",
              )}
            >
              {index % 2 !== 0 && (
                <Lottie
                  animationData={service.animation}
                  style={{ width: 200, height: 200 }}
                />
              )}

              <div className="h-full p-5">
                <div
                  className={cn(
                    "flex items-center gap-2",
                    index % 2 === 0 ? "justify-start" : "justify-end",
                  )}
                >
                  {index % 2 === 0 && (
                    <Image
                      src={`/${index + 1}.png`}
                      alt={service.title}
                      width={60}
                      height={60}
                    />
                  )}
                  <h3
                    className={cn(
                      "text-3xl font-semibold text-slate-300",
                      index % 2 === 0 ? "text-start" : "text-end",
                    )}
                  >
                    {service.title}
                  </h3>
                  {index % 2 !== 0 && (
                    <Image
                      src={`/${index + 1}.png`}
                      alt={service.title}
                      width={60}
                      height={60}
                    />
                  )}
                </div>
                <p className="mt-3 text-xl text-slate-400">
                  {service.description}
                </p>
              </div>

              {index % 2 === 0 && (
                <Lottie
                  animationData={service.animation}
                  style={{ width: 200, height: 200 }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
