import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

function CreateSub() {
  return <div>Create Sub</div>;
}

export default CreateSub;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const cookie = req.headers.cookie;
    console.log(cookie);
    if (!cookie) throw new Error("redirect");
    await axios.get("/auth/me", { headers: { cookie } });

    return { props: {} };
  } catch (error) {
    res.writeHead(307, { location: "/signin" }).end();
  }
};
