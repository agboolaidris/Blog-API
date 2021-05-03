import React, { useEffect } from "react";
import Head from "next/head";
import Feed from "../functions/Home/Feed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Reddit:Font page of the Internet</title>
        <meta name="description" content="this is the home age" />
      </Head>
      <div className="flex p-3 wrapper">
        <div className="flex-1 bg-red-500">
          <Feed />
        </div>
        <div className="hidden sm:block sm:flex-auto sm:bg-yellow-400">
          SIDE BAR
        </div>
      </div>
    </>
  );
}
