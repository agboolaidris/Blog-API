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
      <div>
        <h1>Home Page</h1>
        <Image src="/reddit.svg" width={123} height={70} />
        <img src="../../public/reddit.svg" alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perspiciatis, molestiae aperiam asperiores libero sapiente autem sequi
          soluta? Esse atque, adipisci corporis eius, dolorum accusamus modi
          laudantium deserunt laboriosam, aut laborum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          consequuntur, quos illum ea voluptate nisi eligendi magnam architecto
          eos! Voluptatum eum accusantium dolore tempore nesciunt ad quidem
          autem maiores rerum?
        </p>
      </div>
    </>
  );
}
