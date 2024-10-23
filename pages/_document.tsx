import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal(); // Asegura que los estilos se liberen correctamente
    }
  }

  render() {
    return (
      <Html lang="es">
        {" "}
        {/* SEO: Especifica el idioma */}
        <Head>
          <meta
            name="description"
            content="Descubre nuestra colección de zapatillas, zapatos y botas de moda para hombre y mujer. Compra en Modakelar con envíos rápidos y seguros."
          />
          <meta
            name="keywords"
            content="zapatillas, zapatos, botas, calzado hombre, calzado mujer, zapatillas deportivas, moda"
          />
          <link rel="icon" href="/images/Logo.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
