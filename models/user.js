import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Must provide a username."],
      unique: [true, "Username must be unique."],
    },
    password: {
      type: String,
      required: [true, "Must provide a password."],
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
