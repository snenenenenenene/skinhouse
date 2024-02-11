import Link from "next/link";
import MailingList from "../components/mailingList";
import { treatments } from "../data";
// eslint-disable-next-line no-undef
export default function Layout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="border-t border-light-linen h-full w-full flex">
        <div className="w-[20rem] border-r border-light-linen pl-[5%] overflow-y-scroll flex flex-col">
          {treatments.map((treatment) => (
            <span
              className="py-[0.875rem] px-[1.rem] hover:underline transition-all duration-500 ease-in-out cursor-pointer"
              key={treatment.title}
            >
              <Link
                className="w-full h-full"
                href={`/treatments/${treatment.link}`}
              >
                <p>{treatment.title}</p>
              </Link>
            </span>
          ))}
        </div>
        {children}
      </div>
      <div className="py-[4rem]">
        <MailingList />
      </div>
    </div>
  );
}
