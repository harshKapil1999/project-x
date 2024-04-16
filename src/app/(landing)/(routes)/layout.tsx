import Footer from "@/components/footer"
import LandingNavnar from "@/components/landing-navbar"

const LandingPagesLayout = ({ children }: { children: React.ReactNode }) => { 
    return (
        <>
            <LandingNavnar />
                {children}
            <Footer />
        </>
    )
}

export default LandingPagesLayout