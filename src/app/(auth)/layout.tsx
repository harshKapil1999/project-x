const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex w-full h-full min-h-screen flex-col">
            {children}
        </div>
    )
}

export default AuthLayout