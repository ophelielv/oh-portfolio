import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
          <link 
            href="https://fonts.googleapis.com/css2?family=Exo:wght@500;600&family=Poppins:wght@700&display=swap" 
            rel="stylesheet" 
          />
          <meta name="description" content="Ophélie Le Vigouroux, Front-end developer" />
          <meta name="keywords" content="HTML, CSS, JavaScript, React.js, Next.js, developer, front, end, full, stack, symfony, développeur, développeuse" />
          <meta name="author" content="Ophélie Le Vigouroux" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument