import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
// import RegisterForm from "../components/RegisterForm";
import RegisterForm from "../components/Forms/RegisterForm";

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col justify-center items-center pt-16">
      <div className="flex flex-col border border-zinc-200 shadow-sm items-center py-10 shadow-stone-300 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-5">Register</h2>
        <div className="flex mt-10 px-5 w-full justify-between">
          <div className="w-1/3">IMAGE</div>
          <div className="flex-grow">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
