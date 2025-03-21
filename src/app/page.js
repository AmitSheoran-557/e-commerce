import Footer from "@/components/common/Footer";
import DressStyle from "@/components/DressStyle";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import PartnerBrands from "@/components/PartnerBrands";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerBrands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
      <Footer />
    </>
  );
}
