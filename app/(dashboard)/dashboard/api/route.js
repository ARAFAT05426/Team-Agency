import { connectDB } from "@/lib/mongodb/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const projects = db.collection("projects");
    const users = db.collection("users");

    // Fetch project statistics
    const totalProjects = await projects.countDocuments({});
    const activeProjects = await projects.countDocuments({ status: "active" });
    const pendingProjects = await projects.countDocuments({ status: "pending" });
    const completedProjects = await projects.countDocuments({ status: "completed" });
    const canceledProjects = await projects.countDocuments({ status: "canceled" });

    // Fetch user statistics
    const teamMembers = await users.countDocuments({ role: "team-member" });
    const totalClients = await users.countDocuments({ role: "client" });
    const projectManagers = await users.countDocuments({ role: "project-manager" });

    return NextResponse.json({
      success: true,
      adminStats: {
        projects: {
          total: totalProjects,
          active: activeProjects,
          pending: pendingProjects,
          completed: completedProjects,
          canceled: canceledProjects,
        },
        users: {
          teamMembers,
          clients: totalClients,
          projectManagers,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch statistics",
        error: error.message,
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
