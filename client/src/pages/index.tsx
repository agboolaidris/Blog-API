import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Reddit:Font page of the Internet</title>
        <meta name="description" content="this is the home age" />
      </Head>
      <div className="container mx-auto bg-red-500">
        <h1>Reddit</h1>
      </div>
    </>
  );
}
