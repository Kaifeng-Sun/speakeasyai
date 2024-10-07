import Image from "next/image";
import { Button } from "@/components/ui/button"
import Banner from "@/components/Home/Banner";
import HowItWorks from "@/components/Home/HowItWorks";
import Pricing from "@/components/Home/Pricing";
import Footer from "@/components/Home/Footer";
import Divider from "@/components/Home/Divider";

export default function Home() {
  return (
    <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px), transparent_1px] [background-size:16px_16px]">
      <Banner></Banner>
      <Divider/>
      <HowItWorks></HowItWorks>
      {/* <Divider></Divider> */}
      <Pricing></Pricing>
      {/* <Divider></Divider> */}
      <Footer></Footer>
    </main>
  )
}

