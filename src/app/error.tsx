"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Error logging service integration can be added here
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="container max-w-md">
        <h1 className="text-9xl font-bold text-destructive">500</h1>
        <h2 className="mt-4 text-2xl font-bold">An Error Occurred</h2>
        <p className="mt-4 text-muted-foreground">
          We're sorry, something went wrong. Please try again later.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button onClick={() => reset()}>Try Again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 