/* eslint-disable no-undef */
import Link from "next/link";
import { treatments } from "../data";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-y-clip">
      <div className="border-t border-light-linen h-full w-full grid grid-cols-[0.5fr,2fr,1fr]">
        <div className="h-full border-r border-light-linen  overflow-y-scroll flex flex-col">
          {treatments.map((treatment) => (
            <span
              className="my-[0.875rem] px-[1.rem] no-underline hover:underline transition-all duration-500 ease-in-out cursor-pointer"
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
