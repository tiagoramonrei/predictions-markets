import Header from "../imports/Header-2015-203";
import Subheader from "../imports/Subheader";
import BaseTab from "../imports/BaseTab";
import BaseNavBar from "../imports/BaseNavBar";
import HistoricoContent from "../imports/HistoricoContent";

export default function Historico() {
  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Header />
      <div className="sticky top-0 z-40 bg-[#171717]">
        <div className="w-full h-auto shrink-0">
          <Subheader />
        </div>
        <div className="w-full h-auto shrink-0">
          <BaseTab activeTab="historico" />
        </div>
      </div>
      <div className="flex-1 flex flex-col text-white pb-[80px]">
        <HistoricoContent />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px]">
        <BaseNavBar />
      </div>
    </div>
  );
}
