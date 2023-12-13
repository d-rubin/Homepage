import { ReactNode } from "react";
import Header from "@/components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
