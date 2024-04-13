const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex w-full h-full min-h-screen flex-col bg-gradient-to-r from-[#EBD9FC] via-[#F2EBFB] to-[#FBFAFF]">
            {children}
        </div>
    )
}

export default LandingLayout