"use client";
import MailingList from "@/app/components/mailingList";
import { products } from "@/app/data";
import { useEffect, useState } from "react";

export default function Product({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    products.find((p) => {
      if (p.link.split("/").pop() === params.id) {
        setProduct(p);
      }
    });
  }, []);

  return (
    <main className="flex w-[90%] max-w-[320rem] mx-auto flex-col justify-center">
      <div className="flex w-full h-full">
        <section className="w-full h-full">
          <picture className="w-full flex pr-[2.5rem] h-[80vh]">
            <img
              src={product?.image}
              alt="voucher"
              className="w-full h-full object-cover"
            />
          </picture>
        </section>
        <section className="w-full h-full flex flex-col border-">
          <h2 className="text-[2.25rem] font-Novela w-full border-b border-light-blacktext pb-[1rem] mb-[2rem]">
            {product?.title}
          </h2>
          <p className="text-[1rem] border-b border-light-blacktext pb-[2rem]">
            {product?.description}
            <br />
            <br /> A physical version that you can pick up at Skin House.
          </p>
          <section className="flex justify-between p-[1rem] border-x border-b border-light-blackasset">
            {product?.price} € (euro)
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
