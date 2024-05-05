"use client";

import { useGetBanner } from "@/entities/Banner";

const HomePage = () => {
  const { data, isLoading } = useGetBanner();

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoading && <div>loading...</div>}
      {!isLoading && data && data.banner.length > 0 && data.banner[0].title}
    </main>
  );
};

export { HomePage };
