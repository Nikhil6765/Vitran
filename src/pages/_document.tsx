import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <div className="home-page">
      <Html>
        <Head />
        {/* <body className="bg-black bg-no-repeat bg-cover bg-center bg-fixed dark:bg-[url('../assets/dark.jpeg')]"> */}
          <Main />
          <NextScript />
        {/* </body> */}
      </Html>
      </div>
    );
  }
}

export default MyDocument;
