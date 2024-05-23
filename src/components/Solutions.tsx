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
import { useMediaQuery } from "react-responsive";
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
  const is1000px = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div className="mt-32">
      <h2 className="text-center text-4xl font-bold max-[600px]:text-3xl">
        Our Business Solutions
      </h2>

      <div className="mt-14 flex flex-col gap-32 max-[1000px]:items-center max-[1000px]:gap-20">
        {services.map((service, index) =>
          !is1000px ? (
            <div
              className={cn(
                "flex",
                index % 2 === 0 ? "flex-row" : "flex-row-reverse",
              )}
              key={index}
            >
              <div
                className={cn(
                  "flex w-[950px] items-center justify-between gap-5 border border-slate-600 p-8 py-5 max-[1100px]:p-4 max-[1100px]:px-5",
                  index % 2 === 0 ? "rounded-r-full" : "rounded-l-full",
                  index % 2 === 0 ? "bg-slate-800" : "bg-slate-900",
                )}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
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
          ) : (
            <div
              key={index}
              className="flex w-[600px] flex-col items-center gap-5 rounded-lg border border-slate-700 p-3 px-5 max-[700px]:w-full"
              data-aos="fade-up"
            >
              <Lottie
                animationData={service.animation}
                style={{ width: 200, height: 200 }}
              />
              <h3 className="text-center text-2xl font-bold text-slate-300">
                {service.title}
              </h3>
              <p className="text-center text-xl text-slate-400">
                {service.description}
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
