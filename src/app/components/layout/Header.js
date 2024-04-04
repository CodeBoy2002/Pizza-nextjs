import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href="">
          ST PIZZA
        </Link>
        <nav className="flex items-center gap-8 font-semibold text-gray-500">
          <Link href={""}>HOME</Link>
          <Link href={""}>MENU</Link>
          <Link href={""}>ABOUT</Link>
          <Link href={""}>CONTACT</Link>
          <Link
            className="bg-primary rounded-full px-8 py-2 text-white"
            href={""}
          >
            LOGIN
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
