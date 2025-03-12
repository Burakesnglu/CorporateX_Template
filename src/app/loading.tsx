import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-muted border-t-primary" />
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  );
} 