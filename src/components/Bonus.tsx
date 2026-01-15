import { useState } from "react";
import Header from "../imports/Header-2015-203";
import SubheaderBonus from "../imports/SubheaderBonus";
import BaseTabBonus from "../imports/BaseTabBonus";
import BaseNavBar from "../imports/BaseNavBar";
import BonusContent from "../imports/BonusContent";
import Footer from "../imports/Footer";
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from "./ui/drawer";
import ModalBonusBs from "../imports/ModalBonusBs";

export default function Bonus() {
  const [activeTab, setActiveTab] = useState<'disponiveis' | 'encerrados'>('disponiveis');
  const [isBonusDrawerOpen, setIsBonusDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Header />
      <div className="sticky top-0 z-40 bg-[#171717]">
        <div className="w-full h-auto shrink-0">
          <SubheaderBonus onEntendaBonusClick={() => setIsBonusDrawerOpen(true)} />
        </div>
        <div className="w-full h-auto shrink-0">
          <BaseTabBonus activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
      <div className="flex-1 flex flex-col text-white pb-[56px]">
        <BonusContent activeTab={activeTab} />
        <div className="h-[40px] shrink-0" />
        <Footer />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px]">
        <BaseNavBar />
      </div>

      {/* Bonus Drawer */}
      <Drawer open={isBonusDrawerOpen} onOpenChange={setIsBonusDrawerOpen}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Bônus disponível</DrawerTitle>
            <DrawerDescription>Explicação detalhada sobre o bônus</DrawerDescription>
          </div>
          <ModalBonusBs onClose={() => setIsBonusDrawerOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
