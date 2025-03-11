export async function apiRequest<T>(
  method: "GET" | "POST" | "PUT" | "DELETE", // HTTP method
  url: string,  // API endpoint
  data?: unknown // Request body data (optional)
): Promise<T> {
  const response = await fetch(url, {
    method, // Use the provided HTTP method
    headers: data ? { "Content-Type": "application/json" } : {}, // Set content-type if there's data
    body: data ? JSON.stringify(data) : undefined, // Stringify the data if it exists
    credentials: "include", // Include cookies for authentication if necessary (optional)
  });

  if (!response.ok) {
    const errorText = await response.text(); // Get the error message from the response
    throw new Error(`API error (${response.status}): ${errorText || response.statusText}`);
  }

  // Return the response as JSON
  return response.json() as Promise<T>;
}
