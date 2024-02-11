"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollDir, setScrollDir] = useState("scrolling up");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollDir("scrolling down");
      } else {
        setScrollDir("scrolling up");
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <nav
      className={`z-50 transition-all duration-700 ease-in-out pt-16 px-[5%] fixed flex w-full top-0 left-0 ${
        scrollDir === "scrolling down"
          ? "bg-transparent text-transparent"
          : "backdrop-blur-xl bg-light-alabaster"
      }`}
    >
      <div className="text-[0.875rem] w-full flex ">
        <section className="flex-1 flex gap-x-[4rem] justify-start">
          <Link
            className="hover:bg-light-linen h-fit px-[1rem] py-[0.5rem] rounded-[0.5rem]"
            href="/first-visit"
          >
            First visit
          </Link>
          <Link
            className="hover:bg-light-linen h-fit px-[1rem] py-[0.5rem] rounded-[0.5rem]"
            href="/treatments/feel-good"
          >
            Treatments
          </Link>
          <Link
            className="hover:bg-light-linen h-fit px-[1rem] py-[0.5rem] rounded-[0.5rem]"
            href="/voucher"
          >
            Buy a Voucher
          </Link>
        </section>

        <picture className={`h-14 w-14  relative `}>
          <div
            className={`h-10 w-10 absolute transition-all duration-300 -top-4  rounded-full flex justify-center items-center ${
              scrollDir === "scrolling down"
                ? "bg-transparent text-transparent"
                : " bg-light-blackasset text-light-alabaster "
            }`}
          >
            <Link href="/">
              <h1 className="font-Novela text-xl">SH</h1>
            </Link>
          </div>
          {/* <img alt="logo" className="text-4xl font-bold absolute -top-8" /> */}
        </picture>
        <section className="flex-1 flex gap-x-[4rem] justify-end">
          <Link
            className="hover:bg-light-linen h-fit px-[1rem] py-[0.5rem] rounded-[0.5rem]"
            href="/book-appointment"
          >
            Book your appointment
          </Link>
          <Link
            className="hover:bg-light-linen h-fit px-[1rem] py-[0.5rem] rounded-[0.5rem]"
            href="/products"
          >
            Buy products
          </Link>
        </section>
      </div>
    </nav>
  );
}
