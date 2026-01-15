import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BaseNavBar from "../imports/BaseNavBar";
import HeaderHome from "../imports/HeaderHome";
import DestaquesHome from "./DestaquesHome";
import Tab from "../imports/Tab";
import CardTotais from "../imports/CardTotais";
import Footer from "../imports/Footer";
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from "./ui/drawer";
import ModalBonusWelcomeBs from "../imports/ModalBonusWelcomeBs";

const BONUS_WELCOME_KEY = 'bonusWelcomeShown';

export default function Inicio() {
  const navigate = useNavigate();
  const [isBonusWelcomeOpen, setIsBonusWelcomeOpen] = useState(false);

  // Verifica se é a primeira vez que o usuário abre a home
  useEffect(() => {
    const hasSeenBonusWelcome = localStorage.getItem(BONUS_WELCOME_KEY);
    if (!hasSeenBonusWelcome) {
      // Aguarda um pouco para a página carregar antes de mostrar o modal
      const timer = setTimeout(() => {
        setIsBonusWelcomeOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseBonusWelcome = () => {
    localStorage.setItem(BONUS_WELCOME_KEY, 'true');
    setIsBonusWelcomeOpen(false);
  };

  const handleVerBonus = () => {
    localStorage.setItem(BONUS_WELCOME_KEY, 'true');
    setIsBonusWelcomeOpen(false);
    navigate('/bonus');
  };

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

      {/* Bonus Welcome Drawer - mostra apenas na primeira visita */}
      <Drawer open={isBonusWelcomeOpen} onOpenChange={(open) => {
        if (!open) handleCloseBonusWelcome();
      }}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Bônus de boas-vindas</DrawerTitle>
            <DrawerDescription>Você ganhou créditos de bônus</DrawerDescription>
          </div>
          <ModalBonusWelcomeBs 
            onClose={handleCloseBonusWelcome} 
            onVerBonus={handleVerBonus}
            bonusAmount={50}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
