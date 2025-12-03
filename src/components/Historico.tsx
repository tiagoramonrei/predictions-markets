import { useState } from "react";
import Header from "../imports/Header-2015-203";
import SubheaderHistorico from "../imports/SubheaderHistorico";
import BaseTab from "../imports/BaseTab";
import BaseNavBar from "../imports/BaseNavBar";
import HistoricoContent from "../imports/HistoricoContent";
import Footer from "../imports/Footer";

export default function Historico() {
  const [activeTab, setActiveTab] = useState<'pitaco' | 'financeiro'>('pitaco');

  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Header />
      <div className="sticky top-0 z-40 bg-[#171717]">
        <div className="w-full h-auto shrink-0">
          <SubheaderHistorico />
        </div>
        <div className="w-full h-auto shrink-0">
          <BaseTab activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
      <div className="flex-1 flex flex-col text-white pb-[56px]">
        <HistoricoContent activeTab={activeTab} />
        <div className="h-[40px] shrink-0" />
        <Footer />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px]">
        <BaseNavBar />
      </div>
    </div>
  );
}
