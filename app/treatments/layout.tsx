"use client";
/* eslint-disable no-undef */
import Link from "next/link";
import { useEffect, useState } from "react";
import { treatments } from "../data";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [currentTreatment, setCurrentTreatment] = useState("");

  useEffect(() => {
    setCurrentTreatment(window.location.pathname.split("/")[2]);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-y-clip">
      <div className="border-t border-light-linen h-full w-full grid grid-cols-[0.5fr,2fr,1fr]">
        <div className="h-full border-r border-light-linen  overflow-y-scroll flex flex-col">
          {treatments.map((treatment) => (
            <span
              onClick={() => setCurrentTreatment(treatment.link)}
              className={`${
                currentTreatment === treatment.link
                  ? "underline"
                  : "no-underline"
              } my-[0.875rem] px-[1.rem] hover:underline transition-all duration-500 ease-in-out cursor-pointer`}
              key={treatment.title}
            >
              <Link
                className="w-full h-full "
                href={`/treatments/${treatment.link}`}
              >
                <p>{treatment.title}</p>
              </Link>
            </span>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
