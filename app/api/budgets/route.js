import { db } from "@/utils/dbConfig.jsx";
import { budgets } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

export async function GET(request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const result = await db
      .select()
      .from(budgets)
      .where(eq(budgets.createdBy, email));

    return Response.json(result);
  } catch (error) {
    console.error("Error fetching budgets:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
