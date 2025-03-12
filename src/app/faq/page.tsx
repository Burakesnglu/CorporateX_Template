import { MainLayout } from "@/components/layout/main-layout"
import { FAQ1 } from "@/components/sections/faq-1"
import { PageHeader } from "@/components/ui/page-header"

export const metadata = {
  title: "FAQ | CorporateX",
  description: "Frequently asked questions and answers about our services and solutions.",
}

export default function FAQPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Frequently Asked Questions"
        description="Frequently asked questions and answers about our services and solutions."
      />
      <FAQ1 />
    </MainLayout>
  )
} 