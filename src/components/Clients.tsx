import React from "react";
import { SITE_NAME } from "@/lib/consts";
import Image from "next/image";

const clients = [
  {
    name: "Jafar Ahammed",
    title: "Owner of Star Elevator",
    review: `"${SITE_NAME} enabled me to take my business online seamlessly."`,
    image: "/JafarAhammed.png",
  },
  {
    name: "KR Shanto",
    title: "Full Stack Developer at Levant IT",
    review: `"${SITE_NAME} delivered an outstanding portfolio that truly represents my brand."`,
    image: "/KRShanto.png",
  },
];

export default function Clients() {
  return (
    <div className="mt-32">
      <h2 className="text-center text-4xl font-bold max-[600px]:text-3xl">
        What Our Clients Say
      </h2>

      <div className="relative mx-auto mt-14 grid w-[1100px] grid-cols-2 items-center justify-items-center gap-10 max-[1300px]:w-[900px] max-[1200px]:w-full max-[1000px]:grid-cols-1 max-[900px]:mt-32">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex w-[500px] flex-col items-center gap-5 rounded-lg border border-slate-700 p-3 px-5 max-[1300px]:w-[400px] max-[600px]:w-full"
          >
            <p className="mt-2 text-xl text-slate-300 max-[1300px]:text-lg">
              {client.review}
            </p>

            <div className="flex w-full items-center gap-5">
              <Image
                src={client.image}
                alt={client.name}
                width={70}
                height={100}
                className="rounded-full"
              />
              <div>
                <h3 className="text-nowrap text-2xl font-bold text-slate-300">
                  {client.name}
                </h3>
                <p className="text-slate-400">{client.title}</p>
              </div>
            </div>
          </div>
        ))}

        <Image
          src="/Social1.png"
          alt="Social Icon"
          width={70}
          height={50}
          className="absolute -top-20 left-28 max-[600px]:left-10"
        />
        <Image
          src="/Social2.png"
          alt="Social Icon"
          width={50}
          height={50}
          className="absolute -top-20 right-28 max-[600px]:right-10"
        />
        <Image
          src="/Social3.png"
          alt="Social Icon"
          width={40}
          height={50}
          className="absolute -bottom-20 left-28 max-[600px]:left-10"
        />
        <Image
          src="/Social4.png"
          alt="Social Icon"
          width={30}
          height={50}
          className="absolute -right-20 max-[1000px]:right-0"
        />
        <Image
          src="/Social5.png"
          alt="Social Icon"
          width={50}
          height={50}
          className="absolute -left-20 max-[1000px]:left-0"
        />
        <Image
          src="/Social6.png"
          alt="Social Icon"
          width={70}
          height={50}
          className="absolute -bottom-20 right-28 max-[600px]:right-10"
        />
      </div>
    </div>
  );
}
