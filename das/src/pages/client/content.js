import React from "react";
import DisplayResults from "./displayResults";
import Doctors from "./doctors";
import Footer from "./footer";
import Header from "./header";

export default function Content() {
  return (
    <div>
      <Header />
      <DisplayResults />
      <Doctors />
      <Footer />
    </div>
  );
}
