import { connectDB } from "@/lib/mongodb/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Existing GET route
export const GET = async (request, { params }) => {
  try {
    const { detailsId } = params;
    const db = await connectDB();
    const projectsCollection = db.collection("projects");
    const result = await projectsCollection.findOne({
      _id: new ObjectId(detailsId),
    });
    if (!result) {
      return NextResponse.json(
        {
          success: false,
          message: "No project found with the specified detailsId.",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing the request.",
      },
      { status: 500 }
    );
  }
};

// Existing PUT route for adding tasks
export const PUT = async (request, { params }) => {
  try {
    const db = await connectDB();
    const projectsCollection = db.collection("projects");
    const { detailsId } = params;
    const { task } = await request.json();

    if (!ObjectId.isValid(detailsId)) {
      return NextResponse.json({
        success: false,
        message: "Invalid project ID format",
      });
    }

    if (!task || typeof task !== "object" || !task.title) {
      return NextResponse.json({
        success: false,
        message: "Invalid task data. Task must include a title.",
      });
    }

    // Generate a unique ID using timestamp and a random number
    const taskId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    const result = await projectsCollection.updateOne(
      { _id: new ObjectId(detailsId) },
      {
        $push: { tasks: { ...task, id: taskId, progress: 0 } },
      }
    );

    if (result.modifiedCount > 0) {
      return NextResponse.json({
        success: true,
        message: "Task added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to add task or project not found",
      });
    }
  } catch (error) {
    console.error("Error adding task:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while processing the request.",
    });
  }
};

// New PATCH route for updating tasks
export const PATCH = async (request, { params }) => {
  try {
    const db = await connectDB();
    const projectsCollection = db.collection("projects");
    const { detailsId } = params;
    const { taskId, updateData } = await request.json();

    if (!ObjectId.isValid(detailsId)) {
      return NextResponse.json({
        success: false,
        message: "Invalid project ID format",
      });
    }

    if (!taskId || typeof taskId !== "string") {
      return NextResponse.json({
        success: false,
        message: "Invalid task ID format",
      });
    }

    if (!updateData || typeof updateData !== "object") {
      return NextResponse.json({
        success: false,
        message: "Invalid update data",
      });
    }

    const result = await projectsCollection.updateOne(
      { _id: new ObjectId(detailsId), "tasks.id": taskId },
      {
        $set: {
          "tasks.$": { ...updateData, id: taskId },
        },
      }
    );

    if (result.modifiedCount > 0) {
      return NextResponse.json({
        success: true,
        message: "Task updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update task or project/task not found",
      });
    }
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while processing the request.",
    });
  }
};

// New DELETE route for deleting tasks
export const DELETE = async (request, { params }) => {
  try {
    const db = await connectDB();
    const projectsCollection = db.collection("projects");
    const { detailsId } = params;
    const url = new URL(request.url);
    const taskId = url.searchParams.get("taskId");

    if (!ObjectId.isValid(detailsId)) {
      return NextResponse.json({
        success: false,
        message: "Invalid project ID format",
      });
    }

    if (!taskId || typeof taskId !== "string") {
      return NextResponse.json({
        success: false,
        message: "Invalid task ID format",
      });
    }

    const result = await projectsCollection.updateOne(
      { _id: new ObjectId(detailsId) },
      {
        $pull: {
          tasks: { id: taskId },
        },
      }
    );

    if (result.modifiedCount > 0) {
      return NextResponse.json({
        success: true,
        message: "Task deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete task or project/task not found",
      });
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while processing the request.",
    });
  }
};
