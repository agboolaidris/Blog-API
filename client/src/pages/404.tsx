import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.push("/");
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <p>opp......</p>
      <p>Page not found</p>
      <Link href="/">
        <a>go back to Home Page</a>
      </Link>
    </div>
  );
}

export default NotFound;
