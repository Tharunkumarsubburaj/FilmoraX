import axiosInstance from "@/axiosInstance/axiosInstance";
import { apiKey } from "@/components/server/configurExport";

export async function GET () {
    try {
        const res = await axiosInstance.get("/discover/movie", {
            params: {
                api_key: apiKey,
            }
        });
        return new Response(JSON.stringify(res.data), {
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error("Error fetching discover movies:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch discover movies" }), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 500
        });
    }
};