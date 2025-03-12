import { MainLayout } from "@/components/layout/main-layout"
import { References1 } from "@/components/sections/references-1"
import { Testimonials1 } from "@/components/sections/testimonials-1"
import { PageHeader } from "@/components/ui/page-header"

export const metadata = {
  title: "Our Projects | CorporateX",
  description: "Explore our successfully completed projects and client testimonials.",
}

export default function ProjectsPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Projects"
        description="Explore our successfully completed projects and client testimonials."
      />
      <References1 />
      <Testimonials1 />
    </MainLayout>
  )
} 