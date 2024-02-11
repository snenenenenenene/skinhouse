"use client";

import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    loading && (
      <div className="fixed top-0 z-[100] left-0 w-screen h-screen text-5xl flex justify-center items-center bg-light-statehover">
        Loading
      </div>
    )
  );
}
