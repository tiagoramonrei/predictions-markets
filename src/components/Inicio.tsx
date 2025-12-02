import BaseNavBar from "../imports/BaseNavBar";
import HeaderHome from "../imports/HeaderHome";
import DestaquesHome from "./DestaquesHome";
import Tab from "../imports/Tab";
import CardTotais from "../imports/CardTotais";
import Footer from "../imports/Footer";

export default function Inicio() {
  return (
    <div className="min-h-screen bg-[#171717] flex flex-col pb-[56px]">
      <div className="w-full h-[80px] shrink-0 z-50 sticky top-0">
        <HeaderHome />
      </div>
      
      <div className="w-full relative z-0">
        <DestaquesHome />
      </div>

      <div className="w-full sticky top-[80px] z-40 bg-[#171717]">
        <Tab />
      </div>

      <CardTotais />

      <Footer />
      
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px]">
        <BaseNavBar />
      </div>
    </div>
  );
}
