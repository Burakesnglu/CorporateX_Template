import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="container max-w-md">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 