import * as React from "react";
import { Helmet } from "react-helmet";
import Landing from "../components/landing"
import Navbar from "../components/navbar" 
import Footer from "../components/footer" 
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
      <Landing name="About Us"  />
      <Footer />
    </main>
  );
};

export default IndexPage;
