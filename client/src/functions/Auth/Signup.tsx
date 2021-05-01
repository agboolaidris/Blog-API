import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import SignUpComponent from "../../components/Auth/SignupForm";
import { register } from "../../Redux/Action/Auth";

function Signup() {
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, seterror] = useState({});

  const router = useRouter();
  const dispatch = useDispatch();
  const Auth = useSelector((state: RootStateOrAny) => state.Auth);

  useEffect(() => {
    if (Auth.type == "register") {
      seterror(Auth.error);
    }
  }, [Auth]);

  const handleChange = (e: any) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register(state, router));
  };

  return (
    <SignUpComponent
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}

export default Signup;
