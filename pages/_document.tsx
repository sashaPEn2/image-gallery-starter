import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" href="/icon-72x72.png" />
          <meta
            name="description"
            content="Смотрите фотографии нашего класса за прошедший год"
          />
          <meta property="og:site_name" content="https://images-10a-stolin.vercel.app/" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
