import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t-2 border-light-linen pt-16 pb-8 grid grid-cols-4">
      <section className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">SkinHouse</h2>
        <span className="flex flex-col">
          <p>SkinHouse</p>
          <p>@ 2024</p>
        </span>
        <span className="mt-auto flex">
          <p>F</p>
          <p>I</p>
        </span>
      </section>
      <section>
        {/* Jan Van Rijswijcklaan 132, 2018 Antwerpen */}
        {/* +32 470 17 60 26 * */}
        {/* info@skinhouse.be */}

        <span className="flex flex-col gap-y-[1.5rem]">
          <p>Jan Van Rijswijcklaan 132, 2018 Antwerpen</p>
          <p>+32 470 17 60 26</p>
          <p>info@skinhouse.be</p>
        </span>
      </section>
      <section>
        <span className="flex flex-col gap-y-[1.5rem]">
          <Link href="/first-visit">First visit</Link>
          <Link href="/treatments">Treatments</Link>
          <Link href="/products/voucher">Buy a Voucher</Link>
        </span>
      </section>
      <section>
        <span className="flex flex-col gap-y-[1.5rem]">
          <Link href="/book-appointment">Book your appointment</Link>
          <Link href="/products">Buy products</Link>
        </span>
      </section>
    </div>
  );
}
