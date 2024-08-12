import { connectDB } from "@/lib/mongodb/connectDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const projects = db.collection("projects");
    const url = new URL(request.url);
    const statusParam = url.searchParams.get("status");
    const searchParam = url.searchParams.get("search");
    const countParam = url.searchParams.get("count");

    const totalCount = await projects.countDocuments();

    if (countParam === "true") {
      const [activeCount, pendingCount, completedCount, canceledCount] =
        await Promise.all([
          projects.countDocuments({ status: "active" }),
          projects.countDocuments({ status: "pending" }),
          projects.countDocuments({ status: "completed" }),
          projects.countDocuments({ status: "canceled" }),
        ]);

      return NextResponse.json({
        success: true,
        counts: {
          active: activeCount,
          pending: pendingCount,
          completed: completedCount,
          canceled: canceledCount,
        },
      });
    }

    let query = {};
    if (statusParam) {
      query.status = statusParam;
    }
    if (searchParam) {
      query.$or = [
        { projectTitle: { $regex: searchParam, $options: "i" } },
        { description: { $regex: searchParam, $options: "i" } },
      ];
    }

    const result = await projects.find(query).toArray();
    return NextResponse.json({
      success: true,
      projects: result,
      total: totalCount,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch projects",
        error: error.message,
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const projects = db.collection("projects");

    const order = await request.json();
    console.log("Order Data:", order);

    if (!order || typeof order !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid order data" },
        { status: 400 }
      );
    }

    const result = await projects.insertOne({
      ...order,
      status: "pending",
      progress: 0,
    });

    if (result.acknowledged) {
      return NextResponse.json({
        success: true,
        message: "Order added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to add order",
      });
    }
  } catch (error) {
    console.error("Error inserting order:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

export const PUT = async (request) => {
  try {
    const db = await connectDB();
    const projects = db.collection("projects");

    const { formData, id } = await request.json();

    console.log("formData:", formData, "id:", id);

    const result = await projects.updateOne(
      { _id: new ObjectId(id) }, // Filter by ID
      { $set: formData } // Update with new data
    );

    if (result.acknowledged && result.matchedCount > 0) {
      return NextResponse.json({
        success: true,
        message: "Project updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update project or project not found",
      });
    }
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};
