"use client";
import { useEffect, useState } from "react";

const Loading = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        showContent ? "bg-transparent text-transparent invisible" : " visible"
      } bg-light-alabaster flex transition-all duration-500 ease-in-out fixed top-0 z-[100] left-0 w-screen h-screen justify-center items-center`}
    >
      <div
        className={`h-20 w-20 text-3xl rounded-full flex animate-pulse justify-center items-center ${
          showContent
            ? "bg-transparent text-transparent"
            : "bg-light-blackasset text-light-alabaster"
        }`}
      >
        <h1 className="font-Novela">SH</h1>
      </div>
    </div>
  );
};

export default Loading;
