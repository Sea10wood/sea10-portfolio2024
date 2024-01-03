import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap"
        rel="stylesheet"
      ></link>
      <Head />
      <body>
        <Main />
        <NextScript />
        <style>{`
          #__next {
            height: 100;
            width: 100;
          }
        `}</style>
      </body>
    </Html>
  );
}
