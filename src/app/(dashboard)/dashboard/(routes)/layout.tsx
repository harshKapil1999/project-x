import Footer from "@/components/footer"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full min-h-screen relative">
            <div className="fixed inset-y-0 left-0 z-10 w-16 flex-col border-r bg-background flex">
                <Sidebar />
            </div>
            <main className='pl-16 '>
                <Header />
                 {children}
            </main>
           <Footer />
        </div>
    )
}

export default DashboardLayout