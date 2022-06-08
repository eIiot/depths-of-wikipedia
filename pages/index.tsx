import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full space-y-3">
      <img
        className="w-48 h-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg  "
        alt="Wikipedia logo"
      />
      <h1 className="text-3xl font-bold font-georgia text-center">
        The Depths of Wikipedia
      </h1>
      <p className="lg:text-xl text-center text-base">
        Click the button to explore a random corner of Wikipedia.
      </p>
      <Link href="/api/random" as={`/api/random`} passHref prefetch={true}>
        <a className="text-blue-500 border-blue-500 border-2 bg-neutral-100 hover:bg-white font-bold py-2 px-4">
          Explore Wikipedia
        </a>
      </Link>

      <p className="text-sm absolute bottom-0 p-4 w-full md:w-1/2 flex justify-between">
        <span className="">
          Created by{" "}
          <a
            href="
          https://twitter.com/eiioth"
            className="text-blue-500 block md:inline-block"
          >
            @eiioth
          </a>
        </span>
        <span>
          Links from{" "}
          <a
            href="
          https://twitter.com/depthsofwiki"
            className="text-blue-500 block md:inline-block"
          >
            @depthsofwiki
          </a>
        </span>
      </p>
    </main>
  );
};

export default Home;
