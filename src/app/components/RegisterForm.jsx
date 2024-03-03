"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (resp.ok) {
        // form.reset();
        console.log("REG COMPLETED");
        router.push("/signin");
      } else {
        const err = await resp.json();
        console.log("ERR!", err);
      }
    } catch (error) {
      console.log("Error:", error);
    }
    // console.log(user);
  };

  const handleInput = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-5">
      <input
        name="email"
        type="text"
        placeholder="email"
        className="border p-2.5"
        onChange={(e) => handleInput(e)}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        className="border p-2.5"
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="border p-2.5 bg-sky-400 text-white">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
