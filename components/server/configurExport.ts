// TMDB API Key
export const apiKey = process.env.TMDB_API_KEY;

export const getSessionId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("session_id");
  }
  return null;
};

//default account id for fetching user details
export const account_id = 22534835;

