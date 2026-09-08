import Logo from "@/components/Logo";

export default function AuthLayout({ children }: LayoutProps<"/auth">) {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Logo className="bg-black" containerStyle="fixed top-6 left-8 lg:left-20 z-99" extended/>
            {children}
        </div>
    )
}