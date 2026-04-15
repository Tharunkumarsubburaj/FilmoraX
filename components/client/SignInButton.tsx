"Use Client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignInButton() {
//   const router = useRouter();
  const [requestToken, setRequestToken] = useState<string>("");

  useEffect(() => {
    const fetchRequestToken = async () => {
      try {
        const res = await fetch("/api/tmdb/auth");
        const data = await res.json();
        setRequestToken(data.request_token);
        // router.push("/");
      } catch (error: unknown) {
        console.error("Error on requestToken:", error);
      }
    };
    fetchRequestToken();
  }, []);

  console.log("Request Token:", requestToken);
  const handleSignIn = () => {
    if (!requestToken) {
      alert("No request token available");
      return;
    }
    window.open(
      `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/success`,
    );
  };

  return (
    <div>
      <button
        onClick={handleSignIn}
        className="px-4 py-2 bg-LimeGreen/80 text-ForestGreen rounded-lg hover:bg-LimeGreen transition-colors duration-300"
      >
        Sign In
      </button>
    </div>
  );
}
