import { connectDB } from "@/lib/mongodb/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const usersCollection = db.collection("users");

    const url = new URL(request.url);
    const role = url.searchParams.get("role");
    const search = url.searchParams.get("search") || ""; // Search keyword for names or emails
    const page = parseInt(url.searchParams.get("page")) || 1; // Default to page 1 if not provided
    const limit = parseInt(url.searchParams.get("limit")) || 10; // Default to 10 users per page if not provided

    const query = {};

    // Apply role filter if provided
    if (role) {
      query.role = role;
    }

    // Apply search filter on name and email fields
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } }, // Case-insensitive search on name
        { email: { $regex: search, $options: "i" } }, // Case-insensitive search on email
      ];
    }

    const totalUsers = await usersCollection.countDocuments(query); // Get total count of matching users
    const totalPages = Math.ceil(totalUsers / limit); // Calculate total pages

    const users = await usersCollection
      .find(query)
      .skip((page - 1) * limit) // Skip users based on the current page
      .limit(limit) // Limit the number of users returned
      .toArray();

    return NextResponse.json({
      success: true,
      users: users,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalUsers: totalUsers,
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch users",
    });
  }
};

export const PATCH = async (request) => {
  const updatedData = await request.json();
  try {
    const db = await connectDB();
    const usersCollection = db.collection("users");

    // Check if user exists
    const user = await usersCollection.findOne({ email: updatedData?.email });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    // Update the user data
    const updateFields = {};
    if (updatedData.role) updateFields.role = updatedData.role;
    if (updatedData.position) updateFields.position = updatedData.position;

    const result = await usersCollection.updateOne(
      { email: updatedData?.email },
      { $set: updateFields }
    );

    if (result.modifiedCount > 0) {
      return NextResponse.json({
        success: true,
        message: "User updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "No changes made to the user",
      });
    }
  } catch (error) {
    console.error("Error updating:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

export const DELETE = async (request) => {
  try {
    const db = await connectDB();
    const users = db.collection("users");

    const { id } = await request.json();

    const result = await users.deleteOne({ email: id });

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
