"use client"
import React from "react";
import Link from 'next/link'
import { signOut, useSession } from "next-auth/react";


const Header = () => {
  const session = useSession()
  console.log(session);
  const status = session.status

  return (
    <div>
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 font-semibold text-gray-500">
          <Link className="text-primary font-semibold text-2xl" href="/">
            ST PIZZA
          </Link>
          <Link href={"/"}>HOME</Link>
          <Link href={""}>MENU</Link>
          <Link href={""}>ABOUT</Link>
          <Link href={""}>CONTACT</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {status === 'authenticated' && (
            <>
              <button onClick={() => signOut()} className="bg-primary rounded-full text-white px-8 py-2">Logout</button>
            </>
          )}
          {status === 'unauthenticated' && (
            <>
              <Link href={'/login'}>Login</Link>
              <Link
                className="bg-primary rounded-full px-8 py-2 text-white"
                href={'/register'}
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
