import { connectDB } from "@/lib/mongodb/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const db = await connectDB();
  const projects = db.collection("projects");
  return NextResponse.json({
    success: true,
  });
};
