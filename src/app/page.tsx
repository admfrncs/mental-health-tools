"use client"; // Required for Client Component behavior

import { useRouter } from "next/navigation"; // Next.js router
import Image from "next/image"; // Import Next.js Image component
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { Activity, Brain } from "lucide-react";

export default function Home() {
  const router = useRouter(); // Next.js navigation

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <div className="max-w-4xl mx-auto pt-16 text-center">
        
        {/* ✅ Logo Added Here */}
        <Image 
          src="/mhtoolslogo.png" 
          alt="Mental Health Tool Shop Logo" 
          width={150} 
          height={150} 
          className="mx-auto mb-6" // Centers the logo
          priority 
        />

        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Mental Health Tool Shop
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Mood Tracker Card */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <Activity className="h-12 w-12 text-primary" />
              <h2 className="text-2xl font-semibold">Mood Tracker</h2>
              <p className="text-muted-foreground">
                Track your emotional well-being through a comprehensive assessment.
              </p>
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-black" 
                onClick={() => router.push("/mood-tracker")}
              >
                Start Mood Assessment
              </Button>
            </CardContent>
          </Card>

          {/* Symptom Tracker Card */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <Brain className="h-12 w-12 text-blue-500" />
              <h2 className="text-2xl font-semibold">Symptom Tracker</h2>
              <p className="text-muted-foreground">
                Record and monitor your symptoms for better health management.
              </p>
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600" 
                onClick={() => router.push("/symptom-tracker")} // Next.js navigation
              >
                Start Symptom Assessment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
