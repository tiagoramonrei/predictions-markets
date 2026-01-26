import { useState, useEffect } from "react";
import Header from "../imports/Header-2015-203";
import SubheaderPosicoes from "../imports/SubheaderPosicoes";
import BaseNavBar from "../imports/BaseNavBar";
import Content from "../imports/Content-2078-164";
import Footer from "../imports/Footer";
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from "./ui/drawer";
import ModalVoceSabiaBs from "../imports/ModalVoceSabiaBs";

const PITACOS_FIRST_VISIT_KEY = 'pitacosFirstVisitShown';

export default function Posicoes() {
  const [isVoceSabiaOpen, setIsVoceSabiaOpen] = useState(false);

  // Verifica se é a primeira vez que o usuário abre a página de Pitacos
  useEffect(() => {
    const hasSeenVoceSabia = localStorage.getItem(PITACOS_FIRST_VISIT_KEY);
    if (!hasSeenVoceSabia) {
      // Aguarda um pouco para a página carregar antes de mostrar o modal
      const timer = setTimeout(() => {
        setIsVoceSabiaOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseVoceSabia = () => {
    localStorage.setItem(PITACOS_FIRST_VISIT_KEY, 'true');
    setIsVoceSabiaOpen(false);
  };

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

      {/* Você Sabia? Drawer - mostra apenas na primeira visita */}
      <Drawer open={isVoceSabiaOpen} onOpenChange={(open) => {
        if (!open) handleCloseVoceSabia();
      }}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Você Sabia?</DrawerTitle>
            <DrawerDescription>Informações sobre limites de perda e ganho</DrawerDescription>
          </div>
          <ModalVoceSabiaBs onClose={handleCloseVoceSabia} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
