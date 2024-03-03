"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      if (resp.error) {
        // form.reset();
        console.log("Invalid credentials");
        // console.log("REG COMPLETED");
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log("Error:", error);
    }
    // console.log(user);
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
      <button type="submit" className="border p-2.5 bg-indigo-500 text-white">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
