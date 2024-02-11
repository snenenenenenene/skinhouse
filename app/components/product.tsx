import Link from "next/link";

export default function Product({
  image,
  title,
  price,
  description,
  link,
}: {
  image: string;
  title: string;
  price: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <article className="text-center group pt-[1rem]  flex flex-col rounded-lg overflow-hidden hover:bg-light-linen">
        <section className="px-[2rem]">
          <img src={image} alt={title} className="object-cover w-full h-full" />
          <span className="flex flex-col w-full border-b border-b-light-blacktext gap-y-[0.5rem] pb-[1rem]">
            <h3>{title}</h3>
            <p>{price}</p>
          </span>
          <p className="py-[1rem]">{description}</p>
        </section>
        <span className="w-full invisible mt-[15px] h-10 flex group-hover:visible justify-center items-center hover:bg-light-blacktext bg-light-blackasset text-light-white">
          <p>Add to Cart</p>
        </span>
      </article>
    </Link>
  );
}
