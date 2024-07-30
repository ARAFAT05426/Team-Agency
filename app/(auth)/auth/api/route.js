import { connectDB } from "@/lib/mongodb/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const usersCollection = db.collection("users");
    const users = await usersCollection.find().toArray();

    return NextResponse.json({ success: true, users: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch users",
    });
  }
};
export const PUT = async (request) => {
  const updatedData = await request.json();
  console.log(updatedData);
  try {
    const db = await connectDB();
    const usersCollection = db.collection("users");

    // Update the user data
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(updatedData?.id) },
      { $set: updatedData }
    );

    if (result) {
      return NextResponse.json({ success: true, message: 'user role updated successfully' });
    } else {
      return NextResponse.json({ success: false, message: 'Failed to update user role' });
    }
  } catch (error) {
    console.error('Error updating:', error);
    return NextResponse.json({ success: false, message: 'An error occurred. Please try again later.' });
  }
};

