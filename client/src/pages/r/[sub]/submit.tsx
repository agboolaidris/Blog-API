import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

import CreatePostForm from "../../../functions/Post/CreatePost";
import Sidebar from "../../../components/shared/Sidebar";
import { Sub } from "../../../helper/types";
import { useAuthState } from "../../../States/Context/Auth";

function CreatePost() {
  const router = useRouter();
  const query = router.query.sub;
  const { isAuthenticated } = useAuthState();

  const { data: sub, error } = useSWR<Sub>(query ? `/sub/${query}` : null);
  if (error) router.push("/");

  return (
    <>
      <Head>
        <title>{sub && sub.name}</title>
      </Head>
      <div className="flex p-3 mt-2 bg-gray-200 rounded wrapper">
        <div className="w-full">
          <CreatePostForm sub={sub} />
        </div>
        <div className="hidden sm:w-64 sm:block">
          <Sidebar sub={sub} isAuthenticated={isAuthenticated} />
        </div>
      </div>
    </>
  );
}

export default CreatePost;
