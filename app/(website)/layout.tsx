import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <main className="pt-20 overflow-hidden lg:overflow-visible flex flex-col gap-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
