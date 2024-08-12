import { connectDB } from "@/lib/mongodb/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    const user = await request.json();
    if (!user || !user.email || !user.password) {
      return NextResponse.json(
        { success: false, message: "Invalid user data" },
        { status: 400 }
      );
    }

    const db = await connectDB();
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ email: user.email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 409 }
      );
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);

      const result = await usersCollection.insertOne({
        ...user,
        password: hashedPassword,
        role: "client"
      });
      console.log(result);
      return NextResponse.json(
        {
          success: true,
          message: "User inserted successfully",
          data: result,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error inserting user:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
};
