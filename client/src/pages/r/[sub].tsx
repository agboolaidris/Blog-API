import Head from "next/head";
import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Banner from "../../functions/Sub/Banner";
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
        <div className="px-3 md:px-5 wrapper">
          <SubPost />
        </div>
      </>
    </div>
  );
}

export default Sub;
