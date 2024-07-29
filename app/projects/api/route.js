import { connectDB } from "@/lib/mongodb/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const projects = db.collection("projects");
    const result = await projects.find().toArray();
    return NextResponse.json({ success: true, projects: result });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch projects",
        error: error.message,
      },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
export const POST = async (request) => {
  try {
    const db = await connectDB();
    const projects = db.collection("projects");
    
    const order = await request.json();
    console.log(order);
    const result = await projects.insertOne({...order, status: "pending", progress: 0});
    
    if (result.acknowledged) {
      return NextResponse.json({ success: true, message: "Order added successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Failed to add order" });
    }
  } catch (error) {
    console.error("Error inserting order:", error);
    return NextResponse.json({ success: false, message: "An error occurred. Please try again later." });
  }
};
export const PUT = async (request) => {
  try {
    // Connect to the database
    const db = await connectDB();
    const projects = db.collection("projects");
    
    const { formData, id } = await request.json();
    
    console.log("formData:", formData, "id:", id);

    const result = await projects.updateOne(
      { _id: id }, // Filter by ID
      { $set: formData } // Update with new data
    );

    // Check the result and return appropriate response
    if (result.acknowledged && result.matchedCount > 0) {
      return NextResponse.json({ success: true, message: "Project updated successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Failed to update project or project not found" });
    }
  } catch (error) {
    // Log and return error response
    console.error("Error updating project:", error);
    return NextResponse.json({ success: false, message: "An error occurred. Please try again later." });
  }
};