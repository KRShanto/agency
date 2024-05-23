"use client";

import { SITE_NAME } from "@/lib/consts";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const is1100px = useMediaQuery({ query: "(max-width: 1100px)" });

  return (
    <div className="mt-20 flex justify-between">
      <div className="flex-col items-center max-[1100px]:flex max-[1100px]:w-full">
        <h1 className="hero-gradient inline text-7xl font-bold max-[600px]:text-5xl">
          {SITE_NAME}
        </h1>
        {is1100px && (
          <Image
            src="/Hero.png"
            alt="Hero Image"
            width={500}
            height={400}
            className="mt-10"
          />
        )}
        <h2 className="mt-5 text-3xl font-semibold max-[1100px]:mt-20 max-[600px]:text-center max-[600px]:text-2xl">
          Boost your business quickly
        </h2>
        <p className="mt-14 w-[700px] text-xl leading-10 text-slate-300 max-[1300px]:w-[500px] max-[1100px]:w-full max-[1100px]:px-10 max-[1100px]:text-center max-[600px]:p-0 max-[600px]:text-lg">
          Whether you&rsquo;re a startup looking to make a splash or an
          established business aiming to refresh your online presence,{" "}
          {SITE_NAME} is your trusted partner in achieving digital excellence.
          Let&rsquo;s collaborate to elevate your online presence and propel
          your business forward.
        </p>
      </div>

      <div>
        {!is1100px && (
          <Image src="/Hero.png" alt="Hero Image" width={700} height={400} />
        )}
      </div>
    </div>
  );
}
