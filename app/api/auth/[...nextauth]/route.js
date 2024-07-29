import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongodb/connectDB";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const db = await connectDB();

        try {
          const user = await db.collection("users").findOne({ email });
          if (!user) {
            throw new Error("No user found with the provided email.");
          }
          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) {
            throw new Error("Invalid credentials.");
          }
          return { name: user.name, email: user.email, role: user.role };
        } catch (error) {
          throw new Error(
            error.message || "An error occurred during authorization."
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        const db = await connectDB();
        const existingUser = await db.collection("users").findOne({ email: user.email });

        if (existingUser) {
          token.role = existingUser.role;
        } else {
          token.role = "client"; // Default role for new users
        }

        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const db = await connectDB();
        const existingUser = await db.collection("users").findOne({ email: user.email });

        if (!existingUser) {
          await db.collection("users").insertOne({
            name: user.name,
            email: user.email,
            role: "client",
            timestamp: Date.now(),
          });
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
