import { connectDB } from "@/lib/mongodb/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const usersCollection = db.collection("users");

    const url = new URL(request.url);
    const role = url.searchParams.get("role");
    const query = {};
    if (role) {
      query.role = role;
    }

    const users = await usersCollection.find(query).toArray();

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

export const DELETE = async (request) => {
  try {
    const db = await connectDB();
    const users = db.collection("users");

    const { id } = await request.json();

    const result = await users.deleteOne({ _id: new ObjectId(id) });

    if (result.acknowledged && result.deletedCount > 0) {
      return NextResponse.json({
        success: true,
        message: "User deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete User or User not found",
      });
    }
  } catch (error) {
    console.error("Error deleting User:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};