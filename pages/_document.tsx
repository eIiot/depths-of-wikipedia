import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>The Depths of Wikipedia</title>
        <meta name="title" content="The Depths of Wikipedia" />
        <meta name="description" content="Explore the depths of Wikipedia" />
        <link rel="icon" href="https://www.depth.wiki/favicon.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.depth.wiki" />
        <meta property="og:title" content="The Depths of Wikipedia" />
        <meta
          property="og:description"
          content="Explore the depths of Wikipedia"
        />
        <meta property="og:image" content="https://www.depth.wiki/meta.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.depth.wiki/" />
        <meta property="twitter:title" content="The Depths of Wikipedia" />
        <meta
          property="twitter:description"
          content="Explore the depths of Wikipedia"
        />
        <meta
          property="twitter:image"
          content="https://www.depth.wiki/meta.png"
        />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
