import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { toast } from 'react-toastify';  // Ensure react-toastify is installed for error notifications

// Utility function to throw an error if the response is not OK
const throwIfResNotOk = async (res: Response): Promise<void> => {
  if (!res) {
    console.error("Response is undefined or null.");
    throw new Error("No response received.");
  }

  if (!res.ok) {
    const text = (await res.text()) || res.statusText;

    // Only log the error if console is available (client-side)
    if (typeof window !== 'undefined' && console) {
      console.error(`HTTP Error: ${res.status} - ${text}`); // Log the error for debugging
    }

    throw new Error(`${res.status}: ${text}`);
  }
};

// Function to handle API requests
export const apiRequest = async (
  method: string,
  url: string,
  data?: unknown
): Promise<any> => {
  try {
    // Make the fetch request
    const res = await fetch(url, {
      method,
      headers: data ? { "Content-Type": "application/json" } : {},
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
    });

    // Check if the response is okay, throw an error if not
    await throwIfResNotOk(res);

    // Return the parsed JSON if everything is okay
    return await res.json();
  } catch (error: any) {
    // Log the error for debugging
    if (typeof window !== 'undefined' && console) {
      console.error("Error in API request:", error);
    }

    // Show a toast notification to inform the user
    toast.error(`Request failed: ${error.message || 'Unknown error'}`);

    // Rethrow the error to be handled at the calling level if needed
    throw error;
  }
};

// Behavior when unauthorized (401)
type UnauthorizedBehavior = "returnNull" | "throw";

// Function to get the query function for react-query
export const getQueryFn =
  <T>({ on401 }: { on401: UnauthorizedBehavior }): QueryFunction<T> =>
  async ({ queryKey }) => {
    try {
      // Make the fetch request for the query
      const res = await fetch(queryKey[0] as string, {
        credentials: "include",
      });

      // Handle unauthorized error based on the behavior configured
      if (on401 === "returnNull" && res.status === 401) {
        return null;
      }

      // Throw an error if the response is not OK
      await throwIfResNotOk(res);

      // Return the parsed JSON response if the request is successful
      return res.json();
    } catch (error: any) {
      if (typeof window !== 'undefined' && console) {
        console.error("Error in query function:", error);
      }

      // Handle error according to your app's needs
      if (error instanceof Error) {
        toast.error(`Query failed: ${error.message}`);
      }

      // Re-throw the error for React Query to handle
      throw error;
    }
  };

// Initialize the query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }), // Handle unauthorized errors by throwing
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
