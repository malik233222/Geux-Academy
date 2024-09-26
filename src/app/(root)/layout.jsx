import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const MainLayout = ({ children }) => {
  return (
    <div className={`${poppins.variable} font-pop`}>
      <Navbar />
      <main>{children}
        
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
