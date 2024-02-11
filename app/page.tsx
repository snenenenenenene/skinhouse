import Link from "next/link";
import Footer from "./components/footer";
import MailingList from "./components/mailingList";
import Product from "./components/product";
import { products } from "./data";

export default function Home() {
  return (
    <main className="">
      <div className="flex w-full h-[50rem] pb-[12rem]">
        <section className="flex w-full h-full relative">
          <picture className="pr-20 pt-[5rem]">
            <img
              className="bg-green-900 w-full h-[25rem] object-cover"
              src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </picture>
        </section>
        <section className="flex w-full h-full flex-col">
          <picture className="pr-20">
            <video
              className="bg-green-900 w-full h-[25rem] object-cover"
              autoPlay
              loop
              muted
              src="/video.mp4"
            />
            {/* <img
              src="https://images.unsplash.com/photo-1585945037805-5fd82c2e60b1?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="bg-green-900 w-full h-[20rem] object-cover"
            /> */}
          </picture>
        </section>
        <section className="flex w-full h-full">
          <picture className="pl-24 pt-[5rem]">
            <img
              src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D"
              className="bg-green-900 w-full h-[25rem] object-cover"
            />
          </picture>
        </section>
        <section className="flex w-full h-full">
          <picture className="pl-24 pt-[10rem]">
            <img
              src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlfGVufDB8fDB8fHww"
              className="bg-green-900 w-full h-[25rem] object-cover"
            />
          </picture>
        </section>
        <div className="flex flex-col absolute top-[32rem] ml-[19rem] mt-8">
          <span className="flex gap-x-2 text-light-blackasset">
            <p>HydraFacial™</p>
            <p>-</p>
            <p>Aesthethicism</p>
          </span>
          <span className="flex text-6xl font-Novela w-96">
            <h2>Love yourself more.</h2>
          </span>
          <span className="text-[1rem] font-normal text-light-blackasset flex gap-[1rem]">
            <Link href="/book-appointment">Book your appointment</Link>
            <Link href="/products">Buy products</Link>
          </span>
        </div>
      </div>
      <div className="border-y-2 border-light-linen py-[8rem] px-[1rem] text-[2.25rem] font-Novela text-center w-[90%] max-w-[320rem] mx-auto flex justify-center">
        <span className="max-w-[720px]">
          “I love coming to see Eliza and do the hydrofacial with her. Is always
          very gentle and I come out with clean and glowing. Highly
          recommended.”
        </span>
      </div>
      <div className="py-[8rem] px-[1rem] text-[2.25rem] font-Novela text-center w-[90%] max-w-[320rem] mx-auto flex justify-center">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1629380150561-5fe77dab7fc6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="border-y-2 border-light-linen py-[8rem] px-[1rem] w-[90%] max-w-[320rem] mx-auto flex justify-center">
        <section className="flex flex-col gap-y-[2rem] w-1/3 mr-[4vw]">
          <h1 className="text-[2.25rem] font-Novela">About me</h1>
          <p className="text-[1rem] mb-[20vh]">
            I create a place full of passion, knowledge, and care for the skin.
            My team consists of individuals focused on developing, deepening,
            and updating knowledge and, most importantly, skin health. I consult
            and examine the skin to select the best treatment therapies and
            care. Thanks to this, together with you, I enjoy the best results.
          </p>

          <h1 className="text-[2.25rem] font-Novela">First visit</h1>
          <p className="text-[1rem]">
            We start with a detailed consultation and skin examination. They
            give us a picture of the current condition of the skin and allow us
            to select an individually tailored treatment and care plan.
            Everything with attention and care for the needs of your skin.
          </p>
        </section>
        <section className="flex flex-col gap-y-[2rem] w-2/3 justify-start relative">
          <div className="w-[80%] flex h-[25rem] sticky top-40">
            <picture className="flex w-full h-full">
              <img
                className="object-cover flex w-full h-full"
                src="https://plus.unsplash.com/premium_photo-1674941900249-4a5d0efe20e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D"
              />
            </picture>{" "}
            <picture className="flex w-full h-full relative">
              <img
                className="object-cover flex w-full h-full absolute -left-20 top-20"
                src="https://images.unsplash.com/photo-1585945037805-5fd82c2e60b1?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </picture>
          </div>
        </section>
      </div>
      <div className="py-[8rem] w-[90%] max-w-[320rem] mx-auto flex flex-col justify-center">
        <h1 className="text-[2.25rem] font-Novela mb-[3.5rem] h-[3.5rem]">
          Treatments
        </h1>
        <section className="flex w-full h-[35vw] gap-[2.5rem]">
          <Link href="/treatments/feel-good" className="w-full h-full flex">
            <article className="flex w-full h-full relative overflow-hidden">
              <picture className="flex w-full h-full">
                <img
                  className="object-cover flex w-full h-full brightness-50"
                  src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </picture>
              <span className="absolute w-full h-full p-[3.5rem] flex flex-col text-light-white gap-y-[2rem] justify-end">
                <h2 className="text-[2.25rem] font-normal">Hydrafacial</h2>
                <p className="text-[1rem]">
                  HydraFacial™ is geschikt voor alle huidtypes en de aangewezen
                  behandeling als je een vermoeide en vale huid hebt, een
                  rijpere huid met verslapping, lijntjes en kraaienpootjes,
                  pigmentvlekken of littekens. Ook bij een door de zon
                  beschadigde huid, een rokershuid, onzuivere huid en grove
                  poriën kan de HydraFacial™ perfect worden ingezet.
                </p>
              </span>
            </article>
          </Link>
          <Link href="/treatments/feel-good" className="w-full h-full flex">
            <article className="flex w-full h-full relative overflow-hidden">
              <picture className="flex w-full h-full">
                <img
                  className="object-cover flex w-full h-full brightness-50"
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </picture>
              <span className="absolute w-full h-full p-[3.5rem] flex flex-col text-light-white gap-y-[2rem] justify-end">
                <h2 className="text-[2.25rem] font-normal">Aesthetics</h2>
                <p className="text-[1rem]">
                  Based on an intake conversation, I get to know your
                  preferences regarding skincare. Through a skin analysis, I
                  also learn about the needs of your skin. This way, as a skin
                  coach, I can provide you with accurate advice on your skincare
                  routine and apply the advice immediately during the first
                  facial care session.
                </p>
              </span>
            </article>
          </Link>
        </section>
      </div>
      <div className="py-[8rem] w-[90%] max-w-[320rem] mx-auto flex flex-col justify-center">
        <span className="mb-[3.5rem]">
          <h2 className="text-[2.25rem] font-Novela">Products</h2>
          <p className="text-[1rem]">
            Home care is one of the key aspects of skin health. Our store offers
            selected cosmetics recommended by Eliza.
          </p>
        </span>
        <div className="grid grid-cols-3 w-full">
          {products
            .filter((_, i) => i < 6)
            .map((product) => (
              <Product
                key={product.title}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                link={product.link}
              />
            ))}
        </div>
      </div>
      <div className="py-[4rem]">
        <MailingList />
      </div>
      <Footer />
    </main>
  );
}
