import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Function to check if the response is valid
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// API request helper function with better error handling and logging
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown
): Promise<Response> {
  // Log the data being sent for debugging
  console.log('Sending data:', data);

  // Ensure that data is only JSON-encoded if it is not undefined
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const body = data ? JSON.stringify(data) : undefined;

  // Log the final fetch configuration
  console.log('Request config:', { method, url, headers, body });

  const res = await fetch(url, {
    method,
    headers: data ? headers : {},
    body: body,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";

// Query function to handle 401 errors based on the behavior passed
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> = ({ on401: unauthorizedBehavior }) => async ({
  queryKey,
}) => {
  const res = await fetch(queryKey[0] as string, {
    credentials: "include",
  });

  if (unauthorizedBehavior === "returnNull" && res.status === 401) {
    return null;
  }

  await throwIfResNotOk(res);
  return await res.json();
};

// Create queryClient with default configuration
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
