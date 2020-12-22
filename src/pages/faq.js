import * as React from "react";
import { Helmet } from "react-helmet";
import Landing from "../components/landing"
import Navbar from "../components/navbar" 
import Footer from "../components/footer" 
import Qna from "../components/qna" 
// styles

// markup
const faqPage = () => {
  return (
    <main >
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Turing Sapiens</title>
        </Helmet>
      </div>
      <Navbar />
      <Landing name="Frequently Asked Questions" />
      <Qna />
      <Footer />
    </main>
  );
};

export default faqPage;
