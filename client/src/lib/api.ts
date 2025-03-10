export async function apiRequest(
    method: string,
    url: string,
    data?: any
  ): Promise<any> {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });
  
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
  
    return response.json();
  }
  