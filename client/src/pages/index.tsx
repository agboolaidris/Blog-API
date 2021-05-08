import React, { useEffect } from "react";
import Head from "next/head";
import Feed from "../functions/Home/Feed";
import Sidebar from "../functions/Home/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Reddit:Font page of the Internet</title>
        <meta name="description" content="this is the home age" />
      </Head>
      <div className="flex p-3 mx-auto mt-5 sm:p-0 wrapper ">
        <div className="flex-auto min-h-150px ">
          <Feed />
        </div>
        <div className="hidden mt-4 ml-3 md:block sm:w-72 ">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
