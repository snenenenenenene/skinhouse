import Link from "next/link";

export default function FirstVisit() {
  return (
    <div className="py-[8rem] w-[90%] max-w-[320rem] mx-auto flex flex-col justify-center">
      <main className="flex">
        <section className="flex flex-col pr-[2rem] gap-y-[1rem]">
          <h1 className="font-Novela text-[2rem]">First Visit</h1>
          <p className="text-[1rem]">
            Step into the realm of rejuvenation at SkinHouse, Your maiden voyage
            into facial care? Fear not!
            <br />
            <br />
            Embark on a journey tailored to your skin&apos;s desires through a
            personalized consultation, where I delve into your skincare
            aspirations. With a meticulous skin analysis, I unveil the
            intricacies of your skin&apos;s needs. As your skin whisperer, I
            guide you through a bespoke skincare ritual, infusing my
            recommendations seamlessly into your inaugural facial treatment.
            <br />
            <br />
            Your skin, a canvas of uniqueness, deserves nothing but the utmost
            care and attention. Entrust me to orchestrate a symphony of
            indulgence, utilizing premium ingredients from professional-grade
            products to lavish your skin with opulence, unveiling a visible
            metamorphosis with each delicate touch.
          </p>
          <Link
            href="/book-appointment"
            className="font-Novela text-light-blackasset"
          >
            Book your appointment
          </Link>
        </section>
        <section className="w-full h-full">
          <picture className="flex w-[20rem] h-full">
            <img
              src="https://images.unsplash.com/photo-1597826322461-9b11d306d08f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="first-visit"
              className="w-full h-full object-cover"
            />
          </picture>
        </section>
      </main>
    </div>
  );
}
