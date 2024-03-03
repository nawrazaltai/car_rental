"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import UserInfo from "../components/UserInfo";
const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center mt-2">
      <h1>Dashboard</h1>

      <span>{session?.user.email}</span>

      <br />
      <br />
      <br />

      <UserInfo />
    </div>
  );
};

export default Dashboard;
