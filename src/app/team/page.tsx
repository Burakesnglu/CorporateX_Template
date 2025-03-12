import { MainLayout } from "@/components/layout/main-layout"
import { Team1 } from "@/components/sections/team-1"
import { PageHeader } from "@/components/ui/page-header"

export const metadata = {
  title: "Our Team | CorporateX",
  description: "Meet our professional team. Our expert staff is here to help bring your projects to life successfully.",
}

export default function TeamPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Team"
        description="Meet our professional team. Our expert staff is here to help bring your projects to life successfully."
      />
      <Team1 />
    </MainLayout>
  )
} 