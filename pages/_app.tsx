import "../styles/tailwind.css";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { getInitialPreloadedQuery, getRelayProps } from "relay-nextjs/app";
import { getClientEnvironment } from "relay/clientEnvironment";

const clientEnv = getClientEnvironment();
const initialPreloadedQuery = getInitialPreloadedQuery({
  createClientEnvironment: () => getClientEnvironment()!
});

export default function App({ Component, pageProps }: AppProps) {
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery);
  const env = relayProps.preloadedQuery?.environment ?? clientEnv!;

  return (
    <>
      <DefaultSeo
        title="AguilarKevin"
        twitter={{
          cardType: "summary_large_image",
          handle: "@_aguilarkevin_",
          site: "@_aguilarkevin_"
        }}
      />
      <RelayEnvironmentProvider environment={env}>
        <Component {...pageProps} {...relayProps} />
      </RelayEnvironmentProvider>
    </>
  );
}
