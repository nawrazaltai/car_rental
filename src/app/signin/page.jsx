import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LoginForm from "../components/LoginForm";

const SignIn = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col justify-center p-36 max-w-screen-2xl">
      <h2>Signin</h2>
      <LoginForm />
    </div>
  );
};

export default SignIn;
