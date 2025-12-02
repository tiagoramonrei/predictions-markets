import { useEffect, useState } from "react";

export default function MobileGuard({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 499);
    };

    // Check initially
    checkScreenSize();

    // Add listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isMobile) {
    return (
      <div className="min-h-screen bg-[#171717] flex flex-col items-center justify-center text-white p-8 text-center">
        <div className="max-w-md flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#32A866] flex items-center justify-center">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold font-['DM_Sans',sans-serif]">Versão Mobile Only</h1>
          <p className="text-[#E3E3E3] font-['DM_Sans',sans-serif]">
            Esta aplicação foi desenhada exclusivamente para dispositivos móveis. 
            Por favor, reduza a largura do seu navegador ou acesse através do seu celular.
          </p>
          <p className="text-sm text-[#E3E3E3] opacity-50 font-['DM_Sans',sans-serif]">
            Largura máxima suportada: 499px
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
