import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="mt-20 flex justify-between">
      <div>
        <h1 className="hero-gradient inline text-7xl font-bold">ShortFlows</h1>
        <h2 className="mt-5 text-3xl font-semibold">
          Boost your business quickly
        </h2>
        <p className="mt-14 w-[700px] text-xl leading-10 text-slate-300">
          Whether you&rsquo;re a startup looking to make a splash or an
          established business aiming to refresh your online presence,
          ShortFlows is your trusted partner in achieving digital excellence.
          Let&rsquo;s collaborate to elevate your online presence and propel
          your business forward.
        </p>
      </div>

      <div>
        {/* TODO: more icons */}
        <Image
          src="/MainRocket.png"
          alt="Hero Image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
