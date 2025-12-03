import Header from "../imports/Header-2015-203";
import SubheaderPosicoes from "../imports/SubheaderPosicoes";
import BaseNavBar from "../imports/BaseNavBar";
import Content from "../imports/Content-2078-164";
import Footer from "../imports/Footer";

export default function Posicoes() {
  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Header />
      <div className="sticky top-0 z-40 bg-[#171717]">
        <div className="w-full h-auto shrink-0">
          <SubheaderPosicoes />
        </div>
      </div>
      <div className="flex-1 flex flex-col text-white pb-[56px]">
        <Content />
        <div className="h-[40px] shrink-0" />
        <Footer />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px]">
        <BaseNavBar />
      </div>
    </div>
  );
}
