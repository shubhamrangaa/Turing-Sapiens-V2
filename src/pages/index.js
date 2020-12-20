import * as React from "react";
import { Helmet } from "react-helmet";
import Landing from "../components/landing"
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
      <Landing name="Turing Sapiens" prompt="Join Us" />
    </main>
  );
};

export default IndexPage;
