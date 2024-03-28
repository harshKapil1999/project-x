import Header from "@/components/header"
import Sidebar from "@/components/sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full min-h-screen relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-neutral-800">
                <Sidebar />
            </div>
            <main className='md:pl-72'>
                <Header />
                 {children}
            </main>
           
        </div>
    )
}

export default DashboardLayout