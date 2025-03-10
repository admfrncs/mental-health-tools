import { useRouter } from "next/router";  // Using Next.js router for navigation

export default function Home() {
  const router = useRouter();  // Use the useRouter hook for navigation

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <button
        onClick={() => router.push("/question")}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
      >
        Start Assessment
      </button>
    </div>
  );
}
