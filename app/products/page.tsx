import MailingList from "../components/mailingList";
import Product from "../components/product";
import { products } from "../data";

export default function Products() {
  return (
    <div className="py-[8rem] w-[90%] max-w-[320rem] mx-auto flex flex-col justify-center">
      <span className="mb-[3.5rem]">
        <h2 className="text-[2.25rem] font-Novela">Products</h2>
        <p className="text-[1rem]">
          Home care is one of the key aspects of skin health. Our store offers
          selected cosmetics recommended by Eliza.
        </p>
      </span>
      <div className="grid grid-cols-3 w-full">
        {products.map((p) => (
          <Product
            key={p.title}
            title={p.title}
            price={p.price}
            description={p.description}
            image={p.image}
            link={p.link}
          />
        ))}
      </div>
      <section className="pt-[2rem]">
        <MailingList />
      </section>
    </div>
  );
}
