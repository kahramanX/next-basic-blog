import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-24 py-10 text-lg">
      <Link className="font-bold" href="/">
        BLOG
      </Link>
      <nav>
        <Link href="https://github.com/kahramanX">About</Link>
      </nav>
    </header>
  );
};

export default Header;
