"use client";
import { useState } from "react";
import MailingList from "../components/mailingList";

export default function Voucher() {
  const prizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200];

  const [selectedPrize, setSelectedPrize] = useState(prizes[0]);

  return (
    <main className="flex w-[90%] max-w-[320rem] mx-auto flex-col justify-center">
      <div className="flex w-full h-full">
        <section className="w-full h-full">
          <picture className="w-full flex pr-[2.5rem] h-[80vh]">
            <img
              src="https://images.unsplash.com/photo-1565718253569-3156836e2ec0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="voucher"
              className="w-full h-full object-cover"
            />
          </picture>
        </section>
        <section className="w-full h-full flex flex-col border-">
          <h2 className="text-[2.25rem] font-Novela w-full border-b border-light-blacktext pb-[1rem] mb-[2rem]">
            Gift voucher
          </h2>
          <p className="text-[1rem] border-b border-light-blacktext pb-[2rem]">
            Health, beautiful skin, smile and sparkle in the eye. This is what
            you will give your loved ones with our gift voucher. You can choose
            any value and the recipient will decide how to use it. Skin
            consultation and examination, treatments or personalized care. Our
            cosmetologists will prepare a unique proposal tailored to the needs
            of your skin.
            <br />
            <br /> A physical version that we will send to you by courier.
          </p>
          <section className="flex justify-between p-[1rem] border-x border-b border-light-blackasset">
            {/* add prizes ranging from 10 to 200 in increments when clicking the prize it should add an underline and remove it from the other ones */}
            {prizes.map((prize) => (
              <button
                key={prize}
                onClick={() => setSelectedPrize(prize)}
                className={`${
                  selectedPrize === prize
                    ? " border-light-blacktext"
                    : "border-transparent"
                } border-b-2 text-[1.25rem] transition-all duration-300 text-light-blackasset`}
              >
                {prize}
              </button>
            ))}

            <span className="text-[1rem] border-l flex justify-center items-center">
              € (euro)
            </span>
          </section>
          <button className="bg-light-blackasset text-light-alabaster rounded-lg  py-[0.875rem] px-[1.5rem] justify-center whitespace-nowrap w-full mt-auto">
            Add to Cart
          </button>
        </section>
      </div>
      <section className="py-[8rem]">
        <MailingList />
      </section>
    </main>
  );
}
