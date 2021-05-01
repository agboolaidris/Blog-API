import { useRouter } from "next/router";
import React, { useState, useEffect, FormEvent } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import SigninComponent from "../../components/Auth/SigninForm";
import { login } from "../../Redux/Action/Auth";

function Signin() {
  const [state, setstate] = useState({ email: "", password: "" });
  const [error, seterror] = useState({});

  const router = useRouter();
  const dispatch = useDispatch();
  const Auth = useSelector((state: RootStateOrAny) => state.Auth);

  useEffect(() => {
    if (Auth.type == "login") {
      seterror(Auth.error);
    }
  }, [Auth]);

  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(login(state, router));
  };

  return (
    <SigninComponent
      handleChange={handleChange}
      state={state}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}

export default Signin;
