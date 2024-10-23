export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-black-3">
            <main>
                <p className="text-white-1">LEFT SIDEBAR</p>
                {children}
                <p className="text-white-1">RIGHT SIDEBAR</p>
            </main>
        </div>
    );
}
