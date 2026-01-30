import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BaseNavBar from "../imports/BaseNavBar";
import HeaderHome from "../imports/HeaderHome";
import DestaquesHome from "./DestaquesHome";
import Tab from "../imports/Tab";
import CardTotais from "../imports/CardTotais";
import Footer from "../imports/Footer";
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from "./ui/drawer";
import ModalBonusWelcomeBs from "../imports/ModalBonusWelcomeBs";
import iconLupaPeq from "../assets/iconLupaPeq.png";
import iconLimparForm from "../assets/iconLimparForm.png";

const BONUS_WELCOME_KEY = 'bonusWelcomeShown';

export default function Inicio() {
  const navigate = useNavigate();
  const [isBonusWelcomeOpen, setIsBonusWelcomeOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  const handleClearSearch = () => {
    setSearchValue("");
    searchInputRef.current?.focus();
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

      {/* Campo de busca */}
      <div 
        className="w-full bg-[#171717]"
        style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20 }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Container do ícone de lupa */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 48,
              flexShrink: 0,
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: isSearchFocused ? '#242424' : '#1E1E1E',
              backgroundColor: isSearchFocused ? '#1E1E1E' : '#171717',
              marginRight: -1,
              transition: 'all 0.2s',
            }}
          >
            <img 
              src={iconLupaPeq} 
              alt="Buscar" 
              style={{ width: 16, height: 16 }}
            />
          </div>
          
          {/* Container do Input */}
          <div 
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              height: 48,
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: isSearchFocused ? '#242424' : '#1E1E1E',
              backgroundColor: isSearchFocused ? '#1E1E1E' : '#171717',
              transition: 'all 0.2s',
            }}
          >
            <input
              ref={searchInputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Busque por mercados, assuntos..."
              className="search-input-home"
              style={{
                width: '100%',
                height: '100%',
                paddingLeft: 12,
                paddingRight: 40,
                backgroundColor: 'transparent',
                outline: 'none',
                border: 'none',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                color: isSearchFocused ? '#FFFFFF' : '#E3E3E3',
              }}
            />
            
            {/* Ícone de limpar */}
            {searchValue && (
              <button
                onClick={handleClearSearch}
                type="button"
                style={{
                  position: 'absolute',
                  right: 12,
                  width: 16,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
              >
                <img 
                  src={iconLimparForm} 
                  alt="Limpar" 
                  style={{ width: '100%', height: '100%' }}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      <CardTotais searchTerm={searchValue} />

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
