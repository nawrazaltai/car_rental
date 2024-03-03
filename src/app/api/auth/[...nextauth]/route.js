import User from "@/models/user";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/utils/connect";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const correctPassword = await bcrypt.compare(password, user.password);

          if (!correctPassword) {
            return null;
          }

          return user;
        } catch (e) {
          console.log(e);
        }

        // return null;
      },
    }),
  ],
  //   callbacks: {
  //     async jwt({ token, user }) {
  //       if (user) {
  //         token.email = user.email;
  //         token.id = user.id;
  //       }
  //       return token;
  //     },
  //     async session({ session, token }) {
  //       if (token) {
  //         session.user.email = token.email;
  //         session.user.id = token.id;
  //       }
  //     },
  //   },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
