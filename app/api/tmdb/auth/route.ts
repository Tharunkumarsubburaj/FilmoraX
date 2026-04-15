import axiosInstance from "@/axiosInstance/axiosInstance";
import { apiKey } from "@/components/server/configurExport";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axiosInstance.get("/authentication/token/new", {
      params: {
        api_key: apiKey,
      },
    });
    return NextResponse.json(res.data);
  } catch (error: unknown) {
    console.error("Error on fetching the token:", error);
    console.error("TMDB ERROR:", (error as { response?: { data?: unknown } })?.response?.data || error);
    return NextResponse.json(
      { error: "Failed to fetch the token" },
      { status: 500 },
    );
  }
}
