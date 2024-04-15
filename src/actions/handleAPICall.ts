"use server";

const handleAPICall = async <T = any>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
): Promise<TAPIResponse<T>> => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: ["POST", "PUT"].includes(method) ? JSON.stringify(data) : undefined,
    }
  );
  return response.json();
};

export default handleAPICall;
