"use client";
import { signOut } from "next-auth/react";
const UserInfo = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
  );
};

export default UserInfo;
