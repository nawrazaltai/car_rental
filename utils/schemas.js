import { checkUserExist } from "@/src/actions/user";
import { z } from "zod";

export const UserSchema = z
  .object({
    email: z.string().trim().email(),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters long." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // path of error
  });

export const UserExistingSchema = z
  .object({
    email: z.string().trim().email(),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters long." }),
    confirmPassword: z.string(),
  })
  .refine(
    async (data) => {
      const email = data.email;
      const existingUserEmail = await checkUserExist(email);
      if (existingUserEmail == email) {
        return false;
      } else {
        return true;
      }
    },
    { message: "User Already exists", path: ["email"] }
  );
