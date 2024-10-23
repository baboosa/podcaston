import LeftSidebar from "@/components/LeftSidebar"
import RightSidebar from "@/components/RightSidebar"
import Image from 'next/image'

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

                <RightSidebar />
            </main>
        </div>
    );
}
