import * as React from "react";
import { Helmet } from "react-helmet";
import Landing from "../components/landing"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Events from "../components/events"
// styles

// markup
const IndexPage = () => {
  return (
    <main >
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Turing Sapiens</title>
        </Helmet>
      </div>
      <Navbar />
      <Landing name="Turing Sapiens" prompt="Join Us" address="./" />
      <Events img="./images/icon.png" heading="General Body Meeting" date="23rd December, 2020" />
      <Footer />
    </main>

  );
};

export default IndexPage;
