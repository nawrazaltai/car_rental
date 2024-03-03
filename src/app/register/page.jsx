import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import RegisterForm from "../components/RegisterForm";

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col justify-center p-36">
      <h2>Register</h2>
      <RegisterForm />
    </div>
  );
};

export default Register;
