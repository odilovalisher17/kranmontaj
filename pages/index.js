import Header from "@/Components/Homepage/Header/Header";
import Service from "@/Components/Homepage/Service/Service";
import Slider from "@/Components/Homepage/Slider/Slider";
import Footer from "@/Utils/Footer/Footer";
import Map from "@/Utils/Map/Map";
import Navbar from "@/Utils/Navbar/Navbar";
import Zayavka from "@/Utils/Zayavka/Zayavka";

export default function Home() {
  return (
    <>
      <Navbar />

      <Header />
      <Slider />

      <Zayavka />

      <Service />

      <Map />
      <Footer />
    </>
  );
}
