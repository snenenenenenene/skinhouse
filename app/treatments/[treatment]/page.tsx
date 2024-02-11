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
    { title: string } | undefined
  >();

  useEffect(() => {
    const t = treatments.find((t) => treatment === t.link);

    setTreatmentData(t || undefined);
  }, [treatment]);

  return (
    <>
      <div className="w-[60%] flex flex-col relative border-r border-light-linen  overflow-x-hidden  pt-[2rem] h-[75vh]">
        <div className="overflow-auto px-[5%] flex-grow  pb-24 text-justify">
          <h1 className="text-3xl font-bold font-Novela pb-[1rem]">
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
      <div className="flex overflow-hidden h-[75vh] w-[20rem] justify-center items-center">
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
