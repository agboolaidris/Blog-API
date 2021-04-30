import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

function Register() {
  return (
    <>
      <Head>
        <title>Register page</title>
        <meta name="description" content="this is the home age" />
      </Head>
      <div>
        <h1 className="text-2xl">Register page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          excepturi quas iusto sunt cum culpa placeat nisi aliquid accusantium
          quod adipisci dolor qui, consectetur facilis, alias optio ducimus
          sequi animi!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          veniam, dolore aliquam ab quae iusto, ducimus incidunt modi esse amet
          mollitia facilis ullam velit eveniet fugit, consequatur accusamus
          laudantium placeat?
        </p>
      </div>
    </>
  );
}

export default Register;
