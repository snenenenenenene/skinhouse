"use client";
import { useState } from "react";
import MailingList from "../components/mailingList";

export default function Voucher() {
  const prizes = [10, 20, 50, 100, 200];

  const [selectedPrize, setSelectedPrize] = useState(prizes[0]);

  return (
    <main className="flex w-[90%] max-w-[320rem] mx-auto flex-col justify-center">
      <div className="grid grid-cols-[2.5fr,1fr] w-full h-full">
        <section className="w-full h-full">
          <picture className="w-full flex pr-[8rem] pt-[4rem] h-[80vh]">
            <img
              src="https://images.unsplash.com/photo-1565718253569-3156836e2ec0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="voucher"
              className="w-full h-full object-cover"
            />
          </picture>
        </section>
        <section className="w-full h-full flex flex-col pt-[4rem]">
          <h2 className="text-[2.25rem] font-Novela w-full border-b border-light-blacktext pb-[1rem] mb-[2rem]">
            Gift voucher
          </h2>
          <p className="text-[1rem] pb-[2rem]">
            Health, beautiful skin, smile and sparkle in the eye. This is what
            you will give your loved ones with our gift voucher. You can choose
            any value and the recipient will decide how to use it. Skin
            consultation and examination, treatments or personalized care. Our
            cosmetologists will prepare a unique proposal tailored to the needs
            of your skin.
            <br />
            <br /> A physical version that we will send to you by courier.
          </p>
          <div className="mt-auto border-t border-light-blacktext">
            <section className="flex gap-x-[1rem] p-[1rem] border-light-blackasset text-[1.25rem] ">
              {/* add prizes ranging from 10 to 200 in increments when clicking the prize it should add an underline and remove it from the other ones */}
              {prizes.map((prize) => (
                <button
                  key={prize}
                  onClick={() => setSelectedPrize(prize)}
                  className={`${
                    selectedPrize === prize
                      ? " border-light-blacktext text-light-blacktext"
                      : "border-transparent text-light-blackasset/50 hover:text-light-blacktext"
                  } border-btransition-all duration-300 `}
                >
                  {prize}€
                </button>
              ))}

              <span className="flex justify-center items-center ml-auto">
                {selectedPrize}€
              </span>
            </section>
            <button className="bg-light-blackasset text-light-alabaster rounded-lg  py-[0.875rem] px-[1.5rem] justify-center whitespace-nowrap w-full ">
              Add to Cart
            </button>
          </div>
        </section>
      </div>
      <section className="py-[8rem]">
        <MailingList />
      </section>
    </main>
  );
}
