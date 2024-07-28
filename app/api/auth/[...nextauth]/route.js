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
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const db = await connectDB();

          const user = await db.collection("users").findOne({ email });

          if (!user) {
            throw new Error("No user found with the provided email.");
          }

          const isValidPassword = await bcrypt.compare(password, user.password);

          if (!isValidPassword) {
            throw new Error("Invalid credentials.");
          }

          return { name: user.name, email: user.email, role: user?.role };
        } catch (error) {
          throw new Error(error.message || "An error occurred during authorization.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.role = token.role;
      return session;
    },
    async signIn({ user, account }) {
      console.log(account);
      if (account.provider === "google") {
        try {
          const db = await connectDB();
          const existingUser = await db.collection("users").findOne({ email: user.email });

          if (!existingUser) {
            await db.collection("users").insertOne({
              name: user.name,
              email: user.email,
              role: "client",
              password: "Pa$$w0rd!",
              timestamp: Date.now()
            });
          }
          return user
        } catch (error) {
          console.error("Error saving OAuth user to the database:", error);
          return false;
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
