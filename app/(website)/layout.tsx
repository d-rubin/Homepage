import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
