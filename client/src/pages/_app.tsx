import { AppProps } from "next/dist/next-server/lib/router/router";
import { Provider } from "react-redux";
import Layout from "../layout";
import { createWrapper } from "next-redux-wrapper";
import store from "../Redux";
import "../styles/globals.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
