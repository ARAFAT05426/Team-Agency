import { connectDB } from "@/lib/mongodb/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const blogs = db.collection("blogs");
    const result = await blogs.find().toArray();
    return NextResponse.json({ success: true, blogs: result });
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch blogs",
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
    const blogs = db.collection('blogs');
    
    const blog = await request.json();

    const result = await blogs.insertOne(blog);

    if (result.acknowledged && result.insertedId) {
      return NextResponse.json({ success: true, message: 'Blog added successfully' });
    } else {
      return NextResponse.json({ success: false, message: 'Failed to add blog' });
    }
  } catch (error) {
    console.error('Error adding blog:', error);
    return NextResponse.json({ success: false, message: 'An error occurred. Please try again later.' });
  }
};

export const PUT = async (request) => {
  try {
    const db = await connectDB();
    const blogs = db.collection("blogs");

    const { title, author, content, image, tags, categories, id } =
      await request.json();

    // Ensure all fields are properly updated
    const updateData = {
      title,
      author,
      content,
      image,
      tags,
      categories,
    };

    const result = await blogs.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.acknowledged && result.matchedCount > 0) {
      return NextResponse.json({
        success: true,
        message: "Blog updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update blog or blog not found",
      });
    }
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

export const DELETE = async (request) => {
  try {
    const db = await connectDB();
    const blogs = db.collection("blogs");

    const { id } = await request.json();

    const result = await blogs.deleteOne({ _id: new ObjectId(id) });

    if (result.acknowledged && result.deletedCount > 0) {
      return NextResponse.json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete blog or blog not found",
      });
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};
