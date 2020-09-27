import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property='custom' content='Amit rai' />
          <link
            href='https://fonts.googleapis.com/css2?family=Righteous&display=swap'
            rel='stylesheet'
          ></link>
          <title>Amit Rai</title>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
