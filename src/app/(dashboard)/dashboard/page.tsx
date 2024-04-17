import DashboardHero from '@/components/dashboard-hero'
import Footer from '@/components/footer'
import Header from '@/components/header'

import { Toaster } from "@/components/ui/toaster"

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <Toaster />
      <DashboardHero />
      <Footer />
    </div>
  )
}

export default DashboardPage