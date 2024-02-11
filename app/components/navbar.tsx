import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full">
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
            href="/treatments"
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

        <picture className="h-14 w-14 relative">
          <div className="h-14 w-14 absolute -top-4 bg-light-blacktext rounded-full flex justify-center items-center">
            <Link href="/">
              <h1 className="text-light-alabaster font-Novela text-3xl">SH</h1>
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
