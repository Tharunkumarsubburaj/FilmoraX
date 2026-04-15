import axiosInstance from "@/axiosInstance/axiosInstance";
import { apiKey } from "@/components/server/configurExport";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await axiosInstance.post(
      "/authentication/session/new",
      {
        request_token: body.request_token,
      },
      {
        params: {
          api_key: apiKey,
        },
      },
    );

    return NextResponse.json(res.data);
  } catch (error: unknown) {
    console.error(
      "TMDB ERROR:",
      (error as { response?: { data?: unknown }; message?: string }).response
        ?.data || (error as { message?: string }).message,
    );

    return NextResponse.json(
      {
        error: (error as { response?: { data?: unknown }; message?: string })
          .response?.data,
      },
      { status: 500 },
    );
  }
}
