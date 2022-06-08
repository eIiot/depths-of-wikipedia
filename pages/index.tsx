import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Depths of Wikipedia</title>
        <link rel="icon" href="https://www.depth.wiki/favicon.svg" />
        <meta name="title" content="The Depths of Wikipedia" />
        <meta name="description" content="Explore the depths of Wikipedia" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://depth.wiki/" />
        <meta property="og:title" content="The Depths of Wikipedia" />
        <meta
          property="og:description"
          content="Explore the depths of Wikipedia"
        />
        <meta property="og:image" content="https://www.depth.wiki/meta.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="Eliot Hertenstein" />
        <meta property="twitter:url" content="https://depth.wiki/" />
        <meta property="twitter:title" content="The Depths of Wikipedia" />
        <meta
          property="twitter:description"
          content="Explore the depths of Wikipedia"
        />
        <meta
          property="twitter:image"
          content="https://www.depth.wiki/meta.png"
        />
        <meta name="twitter:widgets:new-embed-design" content="on" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen w-full space-y-3 p-2">
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

        <p className="text-sm absolute bottom-0 p-2 w-full md:w-1/2 flex justify-between">
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
    </>
  );
};

export default Home;
