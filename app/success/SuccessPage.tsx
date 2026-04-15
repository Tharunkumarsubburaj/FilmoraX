"use client";

import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const calledRef = useRef(false);

  useEffect(() => {
    const createSession = async (requestToken: string) => {
      try {
        const res = await axios.post("/api/tmdb/session", {
          request_token: requestToken,
        });

        console.log("Session:", res.data);

        localStorage.setItem("session_id", res.data.session_id);
        localStorage.setItem("isLogIn", "true");

        router.push("/");
      } catch (err: unknown) {
        console.error(
          "Session error:",
          (err as { response?: { data?: unknown }; message?: string }).response
            ?.data || (err as { message?: string }).message,
        );
      }
    };

    if (calledRef.current) return;

    const approved = searchParams.get("approved");
    const requestToken = searchParams.get("request_token");

    if (approved === "true" && requestToken) {
      calledRef.current = true;

      // 🔥 remove token from URL (VERY IMPORTANT)
      window.history.replaceState({}, "", "/success");

      createSession(requestToken);
    }
  }, [router, searchParams]);

  return (
    <div className=" min-h-screen flex items-center justify-center text-2xl text-ForestGreen font-semibold ">
      Logging you in...
    </div>
  );
}
