import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@modules/blocks/navbar";
import Masthead from "@modules/sections/masthead";
import Showcase from "@modules/sections/showcase";
import Services from "@modules/sections/services";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hompage</title>
        <meta name="description" content="LoveCoin" />
      </Head>
      <Navbar />
      <Masthead />
      <Showcase />
      <Services />
    </>
  );
};

export default Home;
