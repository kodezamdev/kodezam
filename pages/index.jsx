import Head from "next/head";
import LetsMake from "../components/LetsMake";
import OurClient from "../components/OurClient";
import OurService from "../components/OurService";
import WorkingProcess from "../components/WorkingProcess";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kodezam</title>
        <meta
          name="google-site-verification"
          content="R7cyCgr7mGMdhXAsPYLk1LLRYvtv87-yCpQTx2jubdw"
        />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta
          property="og:site_name"
          content="Kodezam - A software development company."
        />
        <meta
          property="og:title"
          content="Kodezam - A software development company."
        />
        <meta
          property="og:description"
          content="We are the best option who care for you from outside of the box.We Build your Dream with the latest technology that can reach you exactly toward your dream. Have a Dream? Let us make it real."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://kodezam.com" />

        <meta
          name="twitter:title"
          content="Kodezam - A software development company"
        />
        <meta
          name="twitter:description"
          content="We are the best option who care for you from outside of the box.We Build your Dream with the latest technology that can reach you exactly toward your dream. Have a Dream? Let us make it real."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="kodezam" />
        <meta
          name="keywords"
          content="Bangladeshi Software Company, Web Design, Web Development, Software development, Mobile Application development,E-commerce Solution,E-commerce Website development,ERP solution,Laravel,vuejs"
        />
      </Head>
      <OurService />
      <LetsMake />
      <WorkingProcess />
      <OurClient />
    </>
  );
}
