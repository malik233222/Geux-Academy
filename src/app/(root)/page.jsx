import Hero from "@/components/Hero";
import HighPayingJobs from "@/components/HighPayingJobs";
import WhyUs from "@/components/WhyUs";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  return (
    <div className={`${poppins.variable} font-pop`}>
      <Hero />
      <WhyUs />
     <HighPayingJobs/>
      <br />
      telebelerin fikirleri
    </div>
  );
}
