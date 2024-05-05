"use client";

import { gql } from "@/entities/graphql";
import { useEffect } from "react";

async function test() {
  const res = await gql.GetBanner();

  console.log(res);
}

const HomePage = () => {
  useEffect(() => {
    test();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello!
    </main>
  );
};

export { HomePage };
