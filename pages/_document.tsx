import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import type {
  DocumentContext as NextDocumentContext,
  DocumentProps as NextDocumentProps
} from "next/document";
import { createRelayDocument } from "relay-nextjs/document";
import type { RelayDocument } from "relay-nextjs/document";

type DocumentContext = NextDocumentContext & {
  relayDocument: RelayDocument;
};

type DocumentProps = NextDocumentProps & {
  relayDocument: RelayDocument;
};

export default class Document extends NextDocument<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const relayDocument = createRelayDocument();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
      return originalRenderPage({
        enhanceApp: app => relayDocument.enhance(app)
      });
    };

    const initialProps = await NextDocument.getInitialProps(ctx);

    return { ...initialProps, relayDocument };
  }

  render() {
    const { relayDocument } = this.props;

    return (
      <Html lang="en">
        <Head>
          <relayDocument.Script />
          <link href="favicon.svg" rel="icon" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
