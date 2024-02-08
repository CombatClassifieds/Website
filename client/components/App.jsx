import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import collection from 'easter-egg-collection'

import React from "react";

const App = () => {
  return (
    <main>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: "url('./images/thermalBG.jpeg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Header />
        <Content />
        <Footer />
      </div>
    </main>
  );
};

export default App;
