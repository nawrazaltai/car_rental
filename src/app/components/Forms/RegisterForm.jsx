"use client";

import { createUser } from "@/src/actions/user";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserSchema } from "@/utils/schemas";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

function RegisterForm() {
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setError,
  } = useForm({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data) => {
    const resp = await createUser(data);

    if (resp?.errors) {
      const errors = resp.errors;

      if (errors?.email) {
        setError("email", { message: errors.email });
      } else {
        toast({
          title: "Something went wrong, please try again soon.",
          variant: "destructive",
          // description: resp?.errors.email,
        });
      }
      return;
    }

    router.push("/signin");
    toast({
      title: "Account successfully created",
      description: resp?.message,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input
        {...register("email")}
        name="email"
        type="text"
        placeholder="email"
        className="border p-2.5"
      />

      {errors?.email && <p className="text-red-500">{errors.email?.message}</p>}
      <Input
        {...register("password")}
        name="password"
        type="password"
        placeholder="password"
        className="border p-2.5"
      />
      {errors?.password && (
        <p className="text-red-500">{errors.password?.message}</p>
      )}
      <Input
        {...register("confirmPassword")}
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        className="border p-2.5"
      />
      {errors?.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword?.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="disabled:bg-slate-500 border p-2.5 bg-sky-400 text-white"
      >
        {isSubmitting ? "Loading..." : "Register"}{" "}
      </button>
    </form>
  );
}

export default RegisterForm;
