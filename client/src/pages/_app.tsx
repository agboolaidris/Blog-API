import { AppProps } from "next/dist/next-server/lib/router/router";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
