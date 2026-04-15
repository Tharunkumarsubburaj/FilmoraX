import axiosInstance from "@/axiosInstance/axiosInstance";
import { account_id } from "@/components/server/configurExport";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session_id = "141fa709d81546431dde506048e9d31bf65f0c1d";
    const token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmZkODI2MTFkMWI1MTg1MmJlMzFjNTFiYmUzMGJmMSIsIm5iZiI6MTc2NTExMzE1Mi4wMTUsInN1YiI6IjY5MzU3ZDQwOWMxMzE1OTdiMjA1ZDJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_FCYk5avMUhLTALkJM2D-1Ff6RSo7GLZ1OKZNsj2Gk`;

    const res = await axiosInstance.get(`/account/${account_id}`, {
      params: { session_id },
      headers: {
        accept: "application/json",
        Authorization: `${token}`,
      },
    });

    return NextResponse.json(res.data);
  } catch (error: unknown) {
    console.error(
      "Error on fetching user data:",
      (error as { response?: { data?: unknown } })?.response?.data || error,
    );
    // console.log("session id:", session_id);

    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 },
    );
  }
}
