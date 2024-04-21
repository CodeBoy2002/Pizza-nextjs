"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false)
    setUserCreated(false)
    const response = await fetch("api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
        setError(true)
        console.log(error.message);
    }
    setCreatingUser(false);
    setEmail('')
    setPassword('')
  };
  return (
    <section className="mt-4">
      <h1 className="text-center mb-2 text-primary text-2xl font-bold">
        Register
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          User Created. Now you Can <br />
          <Link className="underline text-primary" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}

      {error && (
        <div className="my-4 text-center">
          Error. <br />
          Please try again later
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">or login with</div>
        <button className="flex justify-center gap-4">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 border-t pt-4">
            <p className="text-blue-600">
                Already have an account?
            </p>
            <Link className="underline" href={'/login'}>Login here &raquo;</Link>
        </div>
      </form>
    </section>
  );
};

export default register;
