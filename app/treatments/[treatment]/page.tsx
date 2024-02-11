/* eslint-disable no-undef */
"use client";
import { treatments } from "@/app/data";
import { useEffect, useState } from "react";

export default function Treatment({
  params,
}: {
  params: { treatment: string };
}) {
  const { treatment } = params;
  const [treatmentData, setTreatmentData] = useState<
    | {
        title: string;
        img?: string;
        link: string;
        description: React.ReactNode;
      }
    | undefined
  >();

  useEffect(() => {
    const t = treatments.find((t) => treatment === t.link);

    setTreatmentData(t || undefined);
  }, [treatment]);

  return (
    <>
      <div className="flex flex-col overflow-y-scroll sm:overflow-y-hidden relative sm:border-r border-light-linen overflow-x-hidden w-full sm:pt-[2rem] h-full">
        <div className="sm:overflow-auto sm:order-first order-last px-[5%] flex-grow pb-24 w-full text-justify">
          <h1 className="text-3xl text-[2.5rem] pb-[4rem] font-normal font-Novela">
            {treatmentData?.title}
          </h1>
          <span>{treatmentData?.description && treatmentData.description}</span>
        </div>
        <section
          className="bg-gradient-to-t from-light-alabaster to-transparent
          w-full bottom-0 left-0 px-[3.5rem] h-20 absolute z-20 flex justify-center items-center"
        >
          <button className="bg-light-blackasset text-light-alabaster rounded-lg w-full py-[0.875rem] px-[1.5rem] justify-center whitespace-nowrap h-12">
            Make an appointment
          </button>
        </section>
      </div>
      <div className="flex sm:order-last order-first overflow-hidden h-full w justify-center items-center sm:p-0 p-[5rem]">
        {treatmentData && treatmentData.img && (
          <img
            src={treatmentData.img}
            alt="placeholder"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </>
  );
}
