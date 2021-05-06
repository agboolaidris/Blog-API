import axios from "axios";
import { useEffect } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { Provider, useDispatch } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { SWRConfig } from "swr";

import Layout from "../layout";
import store from "../Redux";
import "../styles/globals.css";
import { isMe } from "../Redux/Action/Auth";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isMe());
  }, [dispatch]);

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
