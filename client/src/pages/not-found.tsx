"use client"; // Ensure it's a client component

import { useRouter } from "next/navigation"; // Next.js App Router navigation
import Link from "next/link"; // Alternative for navigation
import { Card, CardContent } from "@/components/ui/card"; // Ensure the correct UI component import
import { AlertCircle } from "lucide-react";
import Head from "next/head";

export default function NotFound() {
  const router = useRouter(); // Correct hook usage

  const handleGoHome = () => {
    router.push("/"); // Navigate to home page
  };

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="w-full max-w-sm sm:max-w-xs mx-auto shadow-lg">
          <CardContent className="pt-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertCircle className="h-8 w-8 text-red-500" aria-label="Error Icon" />
              <h1 className="text-2xl font-bold text-gray-900" role="heading" aria-level={1}>
                404 - Page Not Found
              </h1>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              The page you're looking for doesn't exist or may have been moved.
            </p>
            {/* Use either button with onClick OR Next.js <Link> for better performance */}
            <button
              onClick={handleGoHome}
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              Go Home
            </button>
            {/* Alternative: Next.js Link for optimized navigation */}
            {/* <Link href="/" className="block mt-4 text-blue-600 hover:underline">Go Home</Link> */}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
