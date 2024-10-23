import LeftSidebar from "@/components/ui/LeftSidebar"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-black-3 relative flex flex-col">
            <main className="relative flex bg-black-3">
                <LeftSidebar />
                <section>
                  <div>
                    <div>
                      <Image  />
                      MobileNav
                    </div>
                    <div>
                      Toaster (notification popups)
                      {children}
                    </div>
                  </div>
                </section>
                
                <p className="text-white-1">RIGHT SIDEBAR</p>
            </main>
        </div>
    );
}
