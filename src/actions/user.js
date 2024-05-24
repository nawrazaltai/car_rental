"use server";

import User from "@/models/user";
import { connectDB } from "@/utils/connect";
import bcrypt from "bcryptjs";
import { UserSchema } from "@/utils/schemas";
import { UserExistingSchema } from "@/utils/schemas";

export const checkUserExist = async (email) => {
  try {
    await connectDB();
    const userExists = await User.findOne({ email });

    if (userExists) {
      return userExists.email;
    } else {
      return null;
    }
  } catch (error) {
    return { message: error, status: 502 };
  }
};

export const createUser = async (data) => {
  const parsed = await UserExistingSchema.safeParseAsync(data);

  if (!parsed.success) {
    return {
      errors: parsed.error?.flatten().fieldErrors,
      status: 409,
    };
  }

  // console.log("här", parsed);
  const {
    data: { email, password },
  } = parsed;

  try {
    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, password: hashedPassword });

    return { message: `User ${email} registered`, status: 201 };
  } catch (error) {
    return { message: error, status: 502 };
  }
};
