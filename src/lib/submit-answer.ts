// src/lib/submit-answer.ts

export async function submitAnswer(userId: string, questionId: string, score: number, date: string) {
    try {
      // Make a POST request to the API route
      const response = await fetch('/api/submit-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, questionId, score, date }),
      });
  
      // Handle the response from the API
      if (response.ok) {
        const data = await response.json();
        return data; // Return the response from the server (i.e., the stored answer)
      } else {
        const errorData = await response.json();
        console.error('Error submitting answer:', errorData.error);
        return null; // Return null if there was an error
      }
    } catch (error) {
      console.error('Error during submitAnswer:', error);
      return null; // Return null if the fetch fails
    }
  }
  