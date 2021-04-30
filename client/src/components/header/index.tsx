import React from "react";
import Link from "next/link";
function Header() {
  return (
    <header>
      <nav>
        <h1>Header</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
