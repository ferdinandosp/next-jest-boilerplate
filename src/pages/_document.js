import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import MyHead from 'components/head';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="id">
        <Head />
        <MyHead
          title="eCommerce"
          description="eCommerce"
          url="https://www.google.com"
          ogImage=""
        />
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-56d7bc01ab01a8eb" />
        </body>
      </html>
    );
  }
}

export default MyDocument;
