import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { RootStateOrAny, useSelector } from "react-redux";

export const publicRoute = () => {
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.Auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);
};
