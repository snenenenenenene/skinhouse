import Loading from "./components/loading";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "Skinhouse",
  description:
    "SkinHouse | HydraFacial Antwerpen | iS CLINICAL Huidverbetering",
  keywords: "HydraFacial, iS CLINICAL, Antwerpen, Huidverbetering, SkinHouse",
  themeColor: "#ebe6df",
  generator: "Senne Bels",
  category: "Skin",
  icons: [
    {
      rel: "icon",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
  ],
  twitter: {
    card: "summary_large_image",
    site: "https://www.skinhouse.be/",
    title: "SkinHouse",
    description:
      "SkinHouse | HydraFacial Antwerpen | iS CLINICAL Huidverbetering",
    creator: "Senne Bels",
    images: [
      {
        url: "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_2hrnpUkvy3zBTCCGxRGquSfnDnM8%26teamId%3Dsnenenenenenene%26withStatus%3D1&w=1920&q=75&dpl=dpl_7BsSCkzUxGRMVFVmKbSPAgMRzoUt",
        width: 800,
        height: 600,
      },
    ],
  },
  applicationName: "SkinHouse",
  authors: [
    { name: "Eliza Duda" },
    { name: "Senne Bels", url: "https://sennebels.xyz" },
  ],
  creator: "Eliza Duda",
  publisher: "Senne Bels",
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
  openGraph: {
    title: "SkinHouse",
    creators: ["Eliza Duda", "Senne Bels"],
    releaseDate: "2023-03-28",

    countryName: "Belgium",
    firstName: "Eliza",
    lastName: "Duda",
    username: "elizaduda",
    emails: "info@skinhouse.be",
    tags: [
      "HydraFacial",
      "iS CLINICAL",
      "Huidverbetering",
      "Antwerpen",
      "Senne Bels",
      "Eliza Duda",
    ],
    description:
      "SkinHouse | HydraFacial Antwerpen | iS CLINICAL Huidverbetering",
    url: "https://www.skinhouse.be/",
    images: [
      {
        url: "blob:https://vercel.com/f6cb8460-0d93-4f59-8fda-e484add0ea60",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-light-alabaster text-light-blacktext font-Basier flex flex-col w-full h-full pt-32 pb-4 px-[5%]">
        <Loading />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
