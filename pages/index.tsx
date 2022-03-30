import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@modules/blocks/navbar";
import Masthead from "@modules/sections/masthead";
import Showcase from "@modules/sections/showcase";
import Services from "@modules/sections/services";
import Footer from "@modules/sections/footer";
import { useState } from "react";
import Menu from "@modules/blocks/menu";

const Home: NextPage = () => {
  const [hamburger, setHamburger] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Hompage</title>
        <meta name="description" content="LoveCoin" />
      </Head>
      <Navbar hamburger={hamburger} setHamburger={setHamburger} />
      {hamburger && <Menu setHamburger={setHamburger} />}
      <Masthead />
      <Showcase />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
