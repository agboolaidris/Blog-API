import Head from "next/head";
import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Banner from "../../functions/Sub/Banner";
import Sidebar from "../../functions/Sub/Sidebar";
import SubPost from "../../functions/Sub/Sub";
import { Sub as SubType } from "../../helper/types";

function Sub() {
  const sub: SubType = useSelector(
    (state: RootStateOrAny) => state.Post.sub.sub
  );
  return (
    <div>
      <Head>
        <title>{sub?.title}</title>
      </Head>
      <>
        <Banner />
        <div className="flex px-3 md:px-5 wrapper ">
          <div className="px-5">
            <SubPost />
          </div>

          <div className="hidden mt-3 w-72 sm:block min-h-screen-10">
            <Sidebar />
          </div>
        </div>
      </>
    </div>
  );
}

export default Sub;
