import { connectDB } from "@/utils/connect";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import { connectDB } from "../../../../utils/connect";

export async function POST(req) {
  //   console.log("req", req.body);
  try {
    await connectDB();
    const { email, password } = await req.json();

    console.log(email, password);
    const userExists = await User.findOne({ email });

    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 502 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "User registered" }, { status: 200 });

    // console.log(email, password);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
