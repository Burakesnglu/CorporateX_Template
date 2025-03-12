import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-muted py-16 md:py-24", className)}>
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  )
} 