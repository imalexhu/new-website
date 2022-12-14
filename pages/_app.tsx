import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Alex Hu | Software Engineer"
        defaultTitle="Alex Hu | Software Enginee"
        description="Hey! I'm Alex Hu, a SWE passionate about products and new technologies"
        openGraph={{
          url: "https://www.imalexhu.com/",
          title: "Alex Hu | Frontend Developer",
          description:
            "Hey! I'm Alex Hu, a SWE passionate about products and new technologies",
        }}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/iconAlex.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
