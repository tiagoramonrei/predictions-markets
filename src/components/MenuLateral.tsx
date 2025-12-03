import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from './ui/drawer';
import ModalBs from '../imports/ModalBs';
import ModalSaldoBs from '../imports/ModalSaldoBs';

// Importar ícones PNG
import iconNotificacao from '../assets/iconNotificacao.png';
import iconFechar from '../assets/iconFechar.png';
import iconMostrarEsconder from '../assets/iconMostrarEsconder.png';
import iconVerificacao from '../assets/iconVerificacao.png';
import iconHome from '../assets/iconHome.png';
import iconHistorico from '../assets/iconHistorico.png';
import iconPosicoes from '../assets/iconPosicoes.png';
import iconCentral from '../assets/iconCentral.png';
import iconApostas from '../assets/iconApostas.png';
import iconCassino from '../assets/iconCassino.png';
import iconDuvidas from '../assets/iconDuvidas.png';
import iconSuporte from '../assets/iconSuporte.png';
import iconTermoUso from '../assets/iconTermoUso.png';
import iconPrivacidade from '../assets/iconPrivacidade.png';
import iconRendimentos from '../assets/iconRendimentos.png';
import iconTemaClaro from '../assets/iconTemaClaro.png';
import iconTemaEscuro from '../assets/iconTemaEscuro.png';
import iconSistema from '../assets/iconSistema.png';
import iconSair from '../assets/iconSair.png';
import iconDeletar from '../assets/iconDeletar.png';
import iconAccordion from '../assets/iconAccordion.png';

interface MenuLateralProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  carteira?: number;
  saldo?: number;
  notificacoes?: number;
}

// Componentes movidos para fora para evitar re-criação e manter transições
function SectionTitle({ title, isOpen, onClick }: { title: string; isOpen: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
      }}
      className="hover:opacity-80 transition-opacity"
    >
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: 'white', lineHeight: 1.4, margin: 0 }}>{title}</p>
      <img 
        src={iconAccordion} 
        alt="" 
        style={{ 
          width: '20px', 
          height: '20px', 
          minWidth: '20px', 
          minHeight: '20px', 
          maxWidth: '20px', 
          maxHeight: '20px',
          transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
          transition: 'transform 0.3s ease-in-out',
        }} 
      />
    </button>
  );
}

function AccordionContent({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  return (
    <div
      style={{ 
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.3s ease-in-out',
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          width: '100%', 
          paddingTop: '16px',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function MenuContent({ 
  isOpen, 
  onClose, 
  userName = "José da Silva",
  carteira = 3400.00,
  saldo = 240.90,
  notificacoes = 8
}: MenuLateralProps) {
  const [temaAtivo, setTemaAtivo] = useState<'claro' | 'escuro' | 'sistema'>('escuro');
  const [valoresVisiveis, setValoresVisiveis] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isCarteiraDrawerOpen, setIsCarteiraDrawerOpen] = useState(false);
  const [isSaldoDrawerOpen, setIsSaldoDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };
  
  // Estados para controlar a abertura/fechamento das seções
  const [secoesAbertas, setSecoesAbertas] = useState({
    geral: true,
    voceGosta: true,
    atendimento: true,
    legal: true,
  });

  const toggleSecao = (secao: keyof typeof secoesAbertas) => {
    setSecoesAbertas(prev => ({
      ...prev,
      [secao]: !prev[secao]
    }));
  };

  // Prevent body scroll when menu is open and reset scroll to top
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset scroll to top when menu opens
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const formatarReal = (valor: number) => {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const MenuItem = ({ icon, label, hasBorder = true, onClick }: { icon: string; label: string; hasBorder?: boolean; onClick?: () => void }) => (
    <div 
      style={{
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div
        onClick={onClick}
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          paddingTop: '14px',
          paddingBottom: '14px',
          width: '100%',
          cursor: 'pointer',
          borderBottom: hasBorder ? '1px solid #242424' : 'none',
        }}
        className="hover:opacity-80 transition-opacity"
      >
        <img src={icon} alt="" style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', maxWidth: '20px', maxHeight: '20px' }} />
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'white', lineHeight: 1.4, margin: 0 }}>{label}</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Carteira Drawer */}
      <Drawer open={isCarteiraDrawerOpen} onOpenChange={setIsCarteiraDrawerOpen}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Sua Carteira</DrawerTitle>
            <DrawerDescription>Explicação detalhada sobre o cálculo do portfólio</DrawerDescription>
          </div>
          <ModalBs onClose={() => setIsCarteiraDrawerOpen(false)} />
        </DrawerContent>
      </Drawer>

      {/* Saldo Drawer */}
      <Drawer open={isSaldoDrawerOpen} onOpenChange={setIsSaldoDrawerOpen}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Seu Saldo</DrawerTitle>
            <DrawerDescription>Explicação detalhada sobre o cálculo do saldo</DrawerDescription>
          </div>
          <ModalSaldoBs onClose={() => setIsSaldoDrawerOpen(false)} />
        </DrawerContent>
      </Drawer>

      <div 
        style={{ 
          position: 'fixed', 
          inset: 0, 
          zIndex: 999999,
          pointerEvents: isOpen ? 'auto' : 'none',
          isolation: 'isolate'
        }}
      >
      {/* Overlay */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          zIndex: 1
        }}
      />
      
      {/* Menu Panel - 100% width */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          backgroundColor: '#1e1e1e',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 2
        }}
      >
        {/* Header - Fixed */}
        <div style={{ 
          borderBottom: '1px solid #242424', 
          padding: '12px 12px 12px 20px',
          backgroundColor: '#1e1e1e',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {/* Avatar com notificação */}
              <div style={{ 
                backgroundColor: '#f1f1f1', 
                borderRadius: '50%', 
                width: '28px', 
                height: '28px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative',
                flexShrink: 0,
              }}>
                <img src={iconNotificacao} alt="" style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px' }} />
                {notificacoes > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    backgroundColor: '#ad0924',
                    borderRadius: '9999px',
                    minWidth: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 4px',
                  }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '8px', color: 'white', fontWeight: 500 }}>{notificacoes}</span>
                  </div>
                )}
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: 'white', lineHeight: 1.4 }}>Olá, {userName}</p>
            </div>
            <button 
              onClick={onClose} 
              style={{ 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <img src={iconFechar} alt="Fechar" style={{ width: '32px', height: '32px' }} />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', width: '100%', flex: 1, overflowY: 'auto' }}>
          {/* Banner - Carteira e Saldo */}
          <div style={{ padding: '20px', paddingBottom: '28px' }}>
            <div style={{ 
              backgroundColor: '#242424', 
              borderRadius: '8px', 
              padding: '20px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px' 
            }}>
              {/* Botão esconder valores */}
              <div 
                onClick={() => setValoresVisiveis(!valoresVisiveis)}
                style={{ display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer' }}
              >
                <img src={iconMostrarEsconder} alt="" style={{ width: '20px', height: '20px' }} />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'white' }}>
                  {valoresVisiveis ? 'Esconder todos os valores' : 'Mostrar todos os valores'}
                </span>
              </div>

              {/* Valores */}
              <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
                {/* Sua Carteira */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCarteiraDrawerOpen(true);
                    }}
                    style={{ display: 'flex', gap: '4px', alignItems: 'center', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  >
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'white', opacity: 0.56 }}>Sua Carteira</span>
                    <img src={iconDuvidas} alt="" style={{ width: '16px', height: '16px', opacity: 0.56 }} />
                  </button>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'white' }}>R$</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: 'white', lineHeight: '24px' }}>
                      {valoresVisiveis ? formatarReal(carteira) : '••••••'}
                    </span>
                  </div>
                </div>

                {/* Seu Saldo */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSaldoDrawerOpen(true);
                    }}
                    style={{ display: 'flex', gap: '4px', alignItems: 'center', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  >
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'white', opacity: 0.56 }}>Seu Saldo</span>
                    <img src={iconDuvidas} alt="" style={{ width: '16px', height: '16px', opacity: 0.56 }} />
                  </button>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'white' }}>R$</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: 'white', lineHeight: '24px' }}>
                      {valoresVisiveis ? formatarReal(saldo) : '••••••'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <button style={{ 
                  backgroundColor: '#19954f', 
                  height: '32px', 
                  borderRadius: '9999px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '100%',
                  border: 'none',
                  cursor: 'pointer',
                }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '12px', color: 'white' }}>Fazer um depósito</span>
                </button>
                <button style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #19954f', 
                  height: '32px', 
                  borderRadius: '9999px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '100%',
                  cursor: 'pointer',
                }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '12px', color: '#32a866' }}>Efetuar um saque</span>
                </button>
              </div>
            </div>
          </div>

          {/* Seção Geral */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '100%',
            paddingTop: '20px',
            paddingBottom: '20px',
            borderBottom: '2px solid #242424',
          }}>
            <SectionTitle title="Geral" isOpen={secoesAbertas.geral} onClick={() => toggleSecao('geral')} />
            <AccordionContent isOpen={secoesAbertas.geral}>
              <MenuItem icon={iconVerificacao} label="Verificação da conta" />
              <MenuItem icon={iconHome} label="Início" onClick={() => handleNavigate('/')} />
              <MenuItem icon={iconHistorico} label="Histórico" onClick={() => handleNavigate('/historico')} />
              <MenuItem icon={iconPosicoes} label="Pitacos" onClick={() => handleNavigate('/posicoes')} />
              <MenuItem icon={iconCentral} label="Carteira" hasBorder={false} onClick={() => handleNavigate('/central')} />
            </AccordionContent>
          </div>

          {/* Seção Você também pode gostar */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '100%',
            paddingTop: '20px',
            paddingBottom: '20px',
            borderBottom: '2px solid #242424',
          }}>
            <SectionTitle title="Você também pode gostar" isOpen={secoesAbertas.voceGosta} onClick={() => toggleSecao('voceGosta')} />
            <AccordionContent isOpen={secoesAbertas.voceGosta}>
              <MenuItem icon={iconApostas} label="Apostas" />
              <MenuItem icon={iconCassino} label="Cassino" hasBorder={false} />
            </AccordionContent>
          </div>

          {/* Seção Atendimento */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '100%',
            paddingTop: '20px',
            paddingBottom: '20px',
            borderBottom: '2px solid #242424',
          }}>
            <SectionTitle title="Atendimento" isOpen={secoesAbertas.atendimento} onClick={() => toggleSecao('atendimento')} />
            <AccordionContent isOpen={secoesAbertas.atendimento}>
              <MenuItem icon={iconDuvidas} label="Dúvidas frequentes" onClick={() => handleNavigate('/duvidas')} />
              <MenuItem icon={iconSuporte} label="Falar com o suporte" hasBorder={false} />
            </AccordionContent>
          </div>

          {/* Seção Legal */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '100%',
            paddingTop: '20px',
            paddingBottom: '20px',
            borderBottom: '2px solid #242424',
          }}>
            <SectionTitle title="Legal" isOpen={secoesAbertas.legal} onClick={() => toggleSecao('legal')} />
            <AccordionContent isOpen={secoesAbertas.legal}>
              <MenuItem icon={iconTermoUso} label="Termo de Uso" />
              <MenuItem icon={iconPrivacidade} label="Política de Privacidade" />
              <MenuItem icon={iconRendimentos} label="Informe de Rendimentos" hasBorder={false} />
            </AccordionContent>
          </div>

          {/* Footer */}
          <div style={{ backgroundColor: '#242424', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Tema */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: 'white', lineHeight: 1.4 }}>Tema</p>
              <div style={{ 
                backgroundColor: '#373737', 
                borderRadius: '9999px', 
                display: 'flex', 
                gap: '8px', 
                height: '38px', 
                padding: '4px',
              }}>
                <div 
                  style={{ 
                    flex: 1, 
                    borderRadius: '9999px', 
                    display: 'flex', 
                    gap: '4px', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: temaAtivo === 'claro' ? '#171717' : 'transparent',
                  }}
                >
                  <img src={iconTemaClaro} alt="" style={{ width: '20px', height: '20px' }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'white', fontWeight: temaAtivo === 'claro' ? 700 : 400 }}>Claro</span>
                </div>
                <div 
                  style={{ 
                    flex: 1, 
                    borderRadius: '9999px', 
                    display: 'flex', 
                    gap: '4px', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: temaAtivo === 'escuro' ? '#171717' : 'transparent',
                  }}
                >
                  <img src={iconTemaEscuro} alt="" style={{ width: '20px', height: '20px' }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'white', fontWeight: temaAtivo === 'escuro' ? 700 : 400 }}>Escuro</span>
                </div>
                <div 
                  style={{ 
                    flex: 1, 
                    borderRadius: '9999px', 
                    display: 'flex', 
                    gap: '4px', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: temaAtivo === 'sistema' ? '#171717' : 'transparent',
                  }}
                >
                  <img src={iconSistema} alt="" style={{ width: '20px', height: '20px' }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'white', fontWeight: temaAtivo === 'sistema' ? 700 : 400 }}>Sistema</span>
                </div>
              </div>
            </div>

            {/* Botões Sair e Deletar */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%' }}>
              <button style={{ 
                flex: 1, 
                display: 'flex', 
                gap: '8px', 
                alignItems: 'center', 
                padding: '14px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}>
                <img src={iconSair} alt="" style={{ width: '20px', height: '20px' }} />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'white' }}>Sair</span>
              </button>
              <button style={{ 
                flex: 1, 
                display: 'flex', 
                gap: '8px', 
                alignItems: 'center', 
                justifyContent: 'flex-end',
                padding: '14px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}>
                <img src={iconDeletar} alt="" style={{ width: '20px', height: '20px' }} />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'white' }}>Deletar conta</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default function MenuLateral(props: MenuLateralProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Use portal to render at document body level
  return createPortal(
    <MenuContent {...props} />,
    document.body
  );
}
