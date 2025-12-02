import svgPaths from "../imports/svg-lnqu9njv07";
import { useState, useRef, useEffect } from 'react';

// Função para extrair pontos de um path SVG
function extractPointsFromPath(pathString: string, numPoints: number = 100): { x: number; y: number }[] {
  // Criar um elemento SVG temporário para usar getPointAtLength
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathString);
  svg.appendChild(path);
  document.body.appendChild(svg);
  
  const points: { x: number; y: number }[] = [];
  const pathLength = path.getTotalLength();
  
  for (let i = 0; i <= numPoints; i++) {
    const distance = (i / numPoints) * pathLength;
    const point = path.getPointAtLength(distance);
    points.push({ x: point.x, y: point.y });
  }
  
  document.body.removeChild(svg);
  return points;
}

// Função para interpolar posição Y baseada na posição X
function getYAtX(points: { x: number; y: number }[], targetX: number): number {
  // targetX está em porcentagem (0-100), converter para escala do viewBox (0-330)
  const svgX = (targetX / 100) * 330;
  
  // Encontrar os dois pontos mais próximos
  for (let i = 0; i < points.length - 1; i++) {
    if (svgX >= points[i].x && svgX <= points[i + 1].x) {
      const x1 = points[i].x;
      const x2 = points[i + 1].x;
      const y1 = points[i].y;
      const y2 = points[i + 1].y;
      
      // Interpolação linear
      const t = (svgX - x1) / (x2 - x1);
      return y1 + (y2 - y1) * t;
    }
  }
  
  // Se estiver fora do range, retorna o último ponto
  return points[points.length - 1].y;
}

// Dados simulados ao longo do tempo (0 a 100% do gráfico)
const chartData = [
  // Início - Bad Bunny na frente
  { x: 0, badBunny: 48, taylorSwift: 35, brunoMars: 17 },
  // Bad Bunny sobe, Taylor cai
  { x: 8, badBunny: 52, taylorSwift: 32, brunoMars: 16 },
  // Bad Bunny cai um pouco, Taylor sobe
  { x: 15, badBunny: 45, taylorSwift: 38, brunoMars: 17 },
  // Taylor sobe forte!
  { x: 22, badBunny: 42, taylorSwift: 45, brunoMars: 13 },
  // Bad Bunny dispara!
  { x: 28, badBunny: 55, taylorSwift: 38, brunoMars: 7 },
  // Queda de Bad Bunny, Taylor recupera
  { x: 35, badBunny: 48, taylorSwift: 42, brunoMars: 10 },
  // Bad Bunny cai mais
  { x: 42, badBunny: 40, taylorSwift: 45, brunoMars: 15 },
  // Bad Bunny reage!
  { x: 48, badBunny: 50, taylorSwift: 38, brunoMars: 12 },
  // Taylor sobe de novo
  { x: 55, badBunny: 52, taylorSwift: 42, brunoMars: 6 },
  // Bad Bunny explode!
  { x: 62, badBunny: 65, taylorSwift: 28, brunoMars: 7 },
  // Subida acentuada de Bad Bunny
  { x: 68, badBunny: 72, taylorSwift: 20, brunoMars: 8 },
  // Bad Bunny domina
  { x: 75, badBunny: 78, taylorSwift: 15, brunoMars: 7 },
  // Quase no topo
  { x: 82, badBunny: 82, taylorSwift: 12, brunoMars: 6 },
  // Subida final
  { x: 90, badBunny: 84, taylorSwift: 10, brunoMars: 6 },
  // Final - Bad Bunny com 85%, Taylor 10%, Bruno 5%!
  { x: 100, badBunny: 85, taylorSwift: 10, brunoMars: 5 },
];

const chartDataBinary = [
  { x: 0, sim: 70, nao: 30 },
  { x: 10, sim: 75, nao: 25 },
  { x: 20, sim: 62, nao: 38 },
  { x: 30, sim: 68, nao: 32 },
  { x: 40, sim: 55, nao: 45 },
  { x: 50, sim: 58, nao: 42 },
  { x: 60, sim: 45, nao: 55 },
  { x: 70, sim: 52, nao: 48 },
  { x: 80, sim: 35, nao: 65 },
  { x: 90, sim: 42, nao: 58 },
  { x: 100, sim: 25, nao: 75 },
];

// Função para interpolar valores de porcentagem
function interpolateValue(xPercent: number, dataKey: string, data: any[] = chartData): number {
  // Encontra os dois pontos mais próximos
  for (let i = 0; i < data.length - 1; i++) {
    if (xPercent >= data[i].x && xPercent <= data[i + 1].x) {
      const x1 = data[i].x;
      const x2 = data[i + 1].x;
      const y1 = data[i][dataKey];
      const y2 = data[i + 1][dataKey];
      
      // Interpolação linear
      const t = (xPercent - x1) / (x2 - x1);
      return Math.round(y1 + (y2 - y1) * t);
    }
  }
  
  // Se estiver fora do range, retorna o último valor
  return data[data.length - 1][dataKey];
}

// Função para interpolar data baseada na posição X
function getDateAtX(xPercent: number): string {
  // O gráfico vai de Setembro a Novembro
  // Vamos considerar Set 1 a Nov 30 (91 dias)
  const startDate = new Date(2024, 8, 1); // Setembro = mês 8 (0-indexed)
  const totalDays = 91; // Set (30) + Out (31) + Nov (30)
  
  const dayOffset = Math.floor((xPercent / 100) * totalDays);
  const currentDate = new Date(startDate);
  currentDate.setDate(startDate.getDate() + dayOffset);
  
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  
  return `${month} ${day}, ${year}`;
}

// Função para converter porcentagem para posição Y no gráfico (para as bolinhas)
function percentToY(percent: number): number {
  // As linhas de referência vão de:
  // - 100% está em top-[20px] do container gráfico
  // - 0% está em top-[220px] do container gráfico (NÃO 236px!)
  // Range: 200px
  
  // O SVG (linhaGrafico) começa em top-[39px]
  // Então precisamos calcular a posição relativa ao SVG
  
  // Calcula a posição Y absoluta no container gráfico (20px = 100%, 220px = 0%)
  const absoluteY = 20 + ((100 - percent) / 100) * 200;
  
  // Converte para posição relativa ao SVG (que começa em top-[39px])
  const relativeY = absoluteY - 39;
  
  return Math.max(0, Math.min(178, relativeY));
}

// Função para gerar path SVG a partir dos dados
function generatePathFromData(dataKey: string, data: any[] = chartData): string {
  const points = data.map(point => {
    const percent = point[dataKey];
    
    // Calcula a posição Y absoluta no container gráfico (20px = 100%, 220px = 0%)
    const absoluteY = 20 + ((100 - percent) / 100) * 200;
    
    // Converte para posição relativa ao SVG (que começa em top-[39px])
    const relativeY = absoluteY - 39;
    
    // Escala para o viewBox (178px de altura real -> 180 no viewBox)
    const viewBoxY = (relativeY / 178) * 180;
    
    return {
      x: (point.x / 100) * 330,
      y: Math.max(0, Math.min(180, viewBoxY))
    };
  });
  
  // Gera um path com linhas retas (não curvas)
  let path = `M ${points[0].x} ${points[0].y}`;
  
  for (let i = 1; i < points.length; i++) {
    // Usa L (line to) para criar linhas retas e acentuadas
    path += ` L ${points[i].x} ${points[i].y}`;
  }
  
  return path;
}

// Componente de círculo pulsante
interface PulsingCircleProps {
  color: string;
  x: number; // posição X em porcentagem (0-100)
  y: number; // posição Y em pixels
}

function PulsingCircle({ color, x, y }: PulsingCircleProps) {
  return (
    <div 
      className="absolute w-[16px] h-[16px] pointer-events-none z-10"
      style={{ 
        left: `${x}%`, 
        top: `${y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_circle)">
          <circle cx="8" cy="8" fill={color} r="4" />
          <circle 
            cx="8" 
            cy="8" 
            fill={color}
            r="8"
            className="animate-pulse-circle"
          />
        </g>
        <defs>
          <clipPath id="clip0_circle">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
      <style>{`
        @keyframes pulse-circle {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-circle {
          animation: pulse-circle 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function CircleLegenda({ color = "#2BD8F7" }: { color?: string }) {
  return (
    <div className="h-[12px] relative shrink-0 w-[8px]" data-name="circleLegenda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
        <g id="circleLegenda">
          <circle cx="4" cy="6" fill={color} id="legenda" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Txt({ value, name }: { value: number, name: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap" data-name="txt">
      <div className="flex flex-col justify-center relative shrink-0 text-[#e3e3e3]">
        <p className="leading-none text-nowrap whitespace-pre">{name}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-none text-nowrap whitespace-pre">{value}%</p>
      </div>
    </div>
  );
}

function NomeLegenda({ 
  value, 
  name, 
  color,
  isLast = false 
}: { 
  value: number, 
  name: string, 
  color?: string,
  isLast?: boolean 
}) {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-start pl-0 pr-[12px] py-0 relative shrink-0" data-name="nomeLegenda">
      {!isLast && (
        <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      )}
      <CircleLegenda color={color} />
      <Txt value={value} name={name} />
    </div>
  );
}

function LinhaBase() {
  return (
    <div className="absolute contents left-0 top-[15px] w-full" data-name="linhaBase">
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[19px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">100%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[59px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">80%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[99px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">60%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[139px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">40%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[179px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">20%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[219px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">0%</p>
      </div>
      <div className="absolute h-0 left-0 top-[20px] right-[44px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[60px] right-[44px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[100px] right-[44px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[140px] right-[44px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[180px] right-[44px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[220px] right-[44px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[236px] right-[44px]" data-name="lineBase">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineBase" stroke="var(--stroke-0, #242424)" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LegendaMes() {
  return (
    <div className="absolute content-stretch flex font-['DM_Sans:Regular',sans-serif] items-center justify-between leading-[0] left-0 not-italic text-[#e3e3e3] text-[10px] text-center top-[244px] right-[44px]" data-name="legendaMes">
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-none">Set</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-none">Out</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-none">Nov</p>
      </div>
    </div>
  );
}

function FiltroChip({ label, active = false }: { label: string, active?: boolean }) {
  if (active) {
    return (
      <div className="bg-[#164c2e] box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0" data-name="chip">
        <div aria-hidden="true" className="absolute border-2 border-[#32a866] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
          <p className="leading-none whitespace-pre">{label}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">{label}</p>
      </div>
    </div>
  );
}

function Filtros({ showConfig = true }: { showConfig?: boolean }) {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[20px] py-0 top-[278px] w-full" data-name="filtros">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="filtroPeriodo">
        <FiltroChip label="1 h." />
        <FiltroChip label="1 dia" />
        <FiltroChip label="1 sem." />
        <FiltroChip label="1 mês" />
        <FiltroChip label="Todos" active />
      </div>
      {showConfig && (
        <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0" data-name="chip">
          <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <div className="h-[9.667px] relative shrink-0 w-[12px]" data-name="baseFiltro">
            <div className="absolute inset-[-7.76%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
                <g id="baseFiltro">
                  <path d={svgPaths.p36413a40} id="filtro" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M12.0833 2.74996H4.75" id="filtro_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p31e36b80} id="filtro_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M1.41667 8.41665H8.75" id="filtro_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GraficoMusical() {
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [badBunnyValue, setBadBunnyValue] = useState(85);
  const [taylorSwiftValue, setTaylorSwiftValue] = useState(10);
  const [brunoMarsValue, setBrunoMarsValue] = useState(5);
  const [badBunnyY, setBadBunnyY] = useState(percentToY(85));
  const [taylorSwiftY, setTaylorSwiftY] = useState(percentToY(10));
  const [brunoMarsY, setBrunoMarsY] = useState(percentToY(5));
  const [pathPoints, setPathPoints] = useState<{
    badBunny: { x: number; y: number }[];
    taylorSwift: { x: number; y: number }[];
    brunoMars: { x: number; y: number }[];
  } | null>(null);
  const [isDraggingHorizontally, setIsDraggingHorizontally] = useState(false);
  const graficoRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const dragDirectionRef = useRef<'horizontal' | 'vertical' | null>(null);

  useEffect(() => {
    const badBunnyPath = generatePathFromData('badBunny');
    const taylorSwiftPath = generatePathFromData('taylorSwift');
    const brunoMarsPath = generatePathFromData('brunoMars');
    
    const badBunnyPoints = extractPointsFromPath(badBunnyPath, 200);
    const taylorSwiftPoints = extractPointsFromPath(taylorSwiftPath, 200);
    const brunoMarsPoints = extractPointsFromPath(brunoMarsPath, 200);
    
    setPathPoints({
      badBunny: badBunnyPoints,
      taylorSwift: taylorSwiftPoints,
      brunoMars: brunoMarsPoints
    });
  }, []);

  useEffect(() => {
    if (isDraggingHorizontally) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isDraggingHorizontally]);

  useEffect(() => {
    const overlayElement = graficoRef.current?.querySelector('.touch-overlay') as HTMLElement;
    if (!overlayElement) return;

    const handleTouchMoveNonPassive = (e: TouchEvent) => {
      if (dragDirectionRef.current === 'horizontal') {
        e.preventDefault();
      }
    };

    overlayElement.addEventListener('touchmove', handleTouchMoveNonPassive, { passive: false });

    return () => {
      overlayElement.removeEventListener('touchmove', handleTouchMoveNonPassive);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!graficoRef.current || !pathPoints) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    updateHoverPosition(xPercent);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
    setIsDraggingHorizontally(false);
    dragDirectionRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!graficoRef.current || !pathPoints) return;
    
    const touch = e.touches[0];
    
    if (dragDirectionRef.current === 'horizontal') {
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      updateHoverPosition(xPercent);
      return;
    }
    
    if (dragDirectionRef.current === 'vertical') {
      return;
    }
    
    if (touchStartRef.current) {
      const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
      const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);
      const threshold = 5;
      
      if (deltaX < threshold && deltaY < threshold) {
        return;
      }
      
      if (deltaX > deltaY) {
        dragDirectionRef.current = 'horizontal';
        setIsDraggingHorizontally(true);
        e.preventDefault();
        
        const rect = e.currentTarget.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        updateHoverPosition(xPercent);
      } else {
        dragDirectionRef.current = 'vertical';
        setIsDraggingHorizontally(false);
      }
    }
  };

  const updateHoverPosition = (xPercent: number) => {
    if (!pathPoints) return;
    
    setHoverX(xPercent);
    
    const badBunnyYPos = getYAtX(pathPoints.badBunny, xPercent);
    const taylorSwiftYPos = getYAtX(pathPoints.taylorSwift, xPercent);
    const brunoMarsYPos = getYAtX(pathPoints.brunoMars, xPercent);
    
    setBadBunnyY((badBunnyYPos / 180) * 178);
    setTaylorSwiftY((taylorSwiftYPos / 180) * 178);
    setBrunoMarsY((brunoMarsYPos / 180) * 178);
    
    const newBadBunny = interpolateValue(xPercent, 'badBunny');
    const newTaylorSwift = interpolateValue(xPercent, 'taylorSwift');
    const newBrunoMars = interpolateValue(xPercent, 'brunoMars');
    
    setBadBunnyValue(newBadBunny);
    setTaylorSwiftValue(newTaylorSwift);
    setBrunoMarsValue(newBrunoMars);
    
    const date = getDateAtX(xPercent);
    setCurrentDate(date);
  };

  const handleMouseLeave = () => {
    setHoverX(null);
    setBadBunnyValue(85);
    setTaylorSwiftValue(10);
    setBrunoMarsValue(5);
    setBadBunnyY(percentToY(85));
    setTaylorSwiftY(percentToY(10));
    setBrunoMarsY(percentToY(5));
    setCurrentDate(null);
    setIsDraggingHorizontally(false);
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    dragDirectionRef.current = null;
    handleMouseLeave();
  };

  // Pre-calculated paths
  const badBunnyPath = generatePathFromData('badBunny');
  const taylorSwiftPath = generatePathFromData('taylorSwift');
  const brunoMarsPath = generatePathFromData('brunoMars');

  return (
    <div ref={graficoRef} className="bg-neutral-900 content-stretch flex flex-col items-start relative rounded-[8px] w-full" data-name="graficoEscolha">
      <div className="relative shrink-0 w-full" data-name="nomesLegenda">
        <div className="size-full">
          <div className="box-border content-stretch flex gap-[12px] items-start pb-[20px] pt-0 px-[20px] relative w-full">
            <NomeLegenda value={badBunnyValue} name="Bad Bunny" color="#2BD8F7" />
            <NomeLegenda value={taylorSwiftValue} name="Taylor Swift" color="#FF5FA1" />
            <NomeLegenda value={brunoMarsValue} name="Bruno Mars" color="#FFA34C" isLast />
          </div>
        </div>
      </div>

      <div className="h-[298px] relative shrink-0 w-full" data-name="grafico">
        <LinhaBase />
        
        <div className="absolute h-[178px] left-[2.5px] top-[39px] right-[46.5px]" data-name="linhaGrafico">
          <div className="absolute inset-0" style={{ clipPath: hoverX !== null ? `inset(0 ${100 - hoverX}% 0 0)` : 'none' }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 180">
              <g id="linhaGrafico">
                <path d={taylorSwiftPath} stroke="#FF5FA1" strokeLinecap="round" strokeWidth="2" />
                <path d={badBunnyPath} stroke="#2BD8F7" strokeLinecap="round" strokeWidth="2" />
                <path d={brunoMarsPath} stroke="#FFA34C" strokeLinecap="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
          
          {hoverX !== null && (
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${hoverX}%)` }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 180">
                <g id="linhaGrafico">
                  <path d={taylorSwiftPath} stroke="#373737" strokeLinecap="round" strokeWidth="2" />
                  <path d={badBunnyPath} stroke="#373737" strokeLinecap="round" strokeWidth="2" />
                  <path d={brunoMarsPath} stroke="#373737" strokeLinecap="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          )}
          
          <PulsingCircle color="#2BD8F7" x={hoverX ?? 100} y={badBunnyY} />
          <PulsingCircle color="#FF5FA1" x={hoverX ?? 100} y={taylorSwiftY} />
          <PulsingCircle color="#FFA34C" x={hoverX ?? 100} y={brunoMarsY} />
        </div>

        <LegendaMes />
        <Filtros />
        
        <div 
          className="absolute left-[2.5px] top-[39px] right-[46.5px] h-[178px] cursor-crosshair touch-overlay"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {hoverX !== null && (
            <>
              <div 
                className="absolute w-[1px] bg-[#242424] pointer-events-none z-[5]"
                style={{ 
                  left: `${hoverX}%`,
                  top: '-39px',
                  height: '236px'
                }}
              />
              {currentDate && (
                <div 
                  className="absolute pointer-events-none z-[6]"
                  style={{ 
                    left: `${hoverX}%`,
                    top: '-39px',
                    paddingLeft: hoverX < 50 ? '8px' : '0px',
                    paddingRight: hoverX >= 50 ? '8px' : '0px',
                    transform: hoverX >= 50 ? 'translateX(-100%)' : 'none'
                  }}
                >
                  <div className="bg-transparent rounded px-0 py-0">
                    <p className="text-[10px] text-[#E3E3E3] font-['DM_Sans:Regular',sans-serif] whitespace-nowrap leading-none">
                      {currentDate}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function GraficoBinario() {
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [simValue, setSimValue] = useState(25);
  const [naoValue, setNaoValue] = useState(75);
  const [simY, setSimY] = useState(percentToY(25));
  const [naoY, setNaoY] = useState(percentToY(75));
  const [pathPoints, setPathPoints] = useState<{
    sim: { x: number; y: number }[];
    nao: { x: number; y: number }[];
  } | null>(null);
  const [isDraggingHorizontally, setIsDraggingHorizontally] = useState(false);
  const graficoRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const dragDirectionRef = useRef<'horizontal' | 'vertical' | null>(null);

  useEffect(() => {
    const simPath = generatePathFromData('sim', chartDataBinary);
    const naoPath = generatePathFromData('nao', chartDataBinary);
    
    const simPoints = extractPointsFromPath(simPath, 200);
    const naoPoints = extractPointsFromPath(naoPath, 200);
    
    setPathPoints({
      sim: simPoints,
      nao: naoPoints
    });
  }, []);

  useEffect(() => {
    if (isDraggingHorizontally) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isDraggingHorizontally]);

  useEffect(() => {
    const overlayElement = graficoRef.current?.querySelector('.touch-overlay') as HTMLElement;
    if (!overlayElement) return;

    const handleTouchMoveNonPassive = (e: TouchEvent) => {
      if (dragDirectionRef.current === 'horizontal') {
        e.preventDefault();
      }
    };

    overlayElement.addEventListener('touchmove', handleTouchMoveNonPassive, { passive: false });

    return () => {
      overlayElement.removeEventListener('touchmove', handleTouchMoveNonPassive);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!graficoRef.current || !pathPoints) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    updateHoverPosition(xPercent);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
    setIsDraggingHorizontally(false);
    dragDirectionRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!graficoRef.current || !pathPoints) return;
    
    const touch = e.touches[0];
    
    if (dragDirectionRef.current === 'horizontal') {
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      updateHoverPosition(xPercent);
      return;
    }
    
    if (dragDirectionRef.current === 'vertical') {
      return;
    }
    
    if (touchStartRef.current) {
      const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
      const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);
      const threshold = 5;
      
      if (deltaX < threshold && deltaY < threshold) {
        return;
      }
      
      if (deltaX > deltaY) {
        dragDirectionRef.current = 'horizontal';
        setIsDraggingHorizontally(true);
        e.preventDefault();
        
        const rect = e.currentTarget.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        updateHoverPosition(xPercent);
      } else {
        dragDirectionRef.current = 'vertical';
        setIsDraggingHorizontally(false);
      }
    }
  };

  const updateHoverPosition = (xPercent: number) => {
    if (!pathPoints) return;
    
    setHoverX(xPercent);
    
    const simYPos = getYAtX(pathPoints.sim, xPercent);
    const naoYPos = getYAtX(pathPoints.nao, xPercent);
    
    setSimY((simYPos / 180) * 178);
    setNaoY((naoYPos / 180) * 178);
    
    const newSim = interpolateValue(xPercent, 'sim', chartDataBinary);
    const newNao = interpolateValue(xPercent, 'nao', chartDataBinary);
    
    setSimValue(newSim);
    setNaoValue(newNao);
    
    const date = getDateAtX(xPercent);
    setCurrentDate(date);
  };

  const handleMouseLeave = () => {
    setHoverX(null);
    setSimValue(25);
    setNaoValue(75);
    setSimY(percentToY(25));
    setNaoY(percentToY(75));
    setCurrentDate(null);
    setIsDraggingHorizontally(false);
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    dragDirectionRef.current = null;
    handleMouseLeave();
  };

  // Pre-calculated paths
  const simPath = generatePathFromData('sim', chartDataBinary);
  const naoPath = generatePathFromData('nao', chartDataBinary);

  return (
    <div ref={graficoRef} className="bg-neutral-900 content-stretch flex flex-col items-start relative rounded-[8px] w-full" data-name="graficoEscolha">
      <div className="relative shrink-0 w-full" data-name="nomesLegenda">
        <div className="size-full">
          <div className="box-border content-stretch flex gap-[12px] items-start pb-[20px] pt-0 px-[20px] relative w-full">
            <NomeLegenda value={simValue} name="Escolheu Sim" color="#32A866" />
            <NomeLegenda value={naoValue} name="Escolheu Não" color="#D92341" isLast />
          </div>
        </div>
      </div>

      <div className="h-[298px] relative shrink-0 w-full" data-name="grafico">
        <LinhaBase />
        
        <div className="absolute h-[178px] left-[2.5px] top-[39px] right-[46.5px]" data-name="linhaGrafico">
          <div className="absolute inset-0" style={{ clipPath: hoverX !== null ? `inset(0 ${100 - hoverX}% 0 0)` : 'none' }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 180">
              <g id="linhaGrafico">
                <path d={simPath} stroke="#32A866" strokeLinecap="round" strokeWidth="2" />
                <path d={naoPath} stroke="#D92341" strokeLinecap="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
          
          {hoverX !== null && (
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${hoverX}%)` }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 180">
                <g id="linhaGrafico">
                  <path d={simPath} stroke="#373737" strokeLinecap="round" strokeWidth="2" />
                  <path d={naoPath} stroke="#373737" strokeLinecap="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          )}
          
          <PulsingCircle color="#32A866" x={hoverX ?? 100} y={simY} />
          <PulsingCircle color="#D92341" x={hoverX ?? 100} y={naoY} />
        </div>

        <LegendaMes />
        <Filtros showConfig={false} />
        
        <div 
          className="absolute left-[2.5px] top-[39px] right-[46.5px] h-[178px] cursor-crosshair touch-overlay"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {hoverX !== null && (
            <>
              <div 
                className="absolute w-[1px] bg-[#242424] pointer-events-none z-[5]"
                style={{ 
                  left: `${hoverX}%`,
                  top: '-39px',
                  height: '236px'
                }}
              />
              {currentDate && (
                <div 
                  className="absolute pointer-events-none z-[6]"
                  style={{ 
                    left: `${hoverX}%`,
                    top: '-39px',
                    paddingLeft: hoverX < 50 ? '8px' : '0px',
                    paddingRight: hoverX >= 50 ? '8px' : '0px',
                    transform: hoverX >= 50 ? 'translateX(-100%)' : 'none'
                  }}
                >
                  <div className="bg-transparent rounded px-0 py-0">
                    <p className="text-[10px] text-[#E3E3E3] font-['DM_Sans:Regular',sans-serif] whitespace-nowrap leading-none">
                      {currentDate}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface GraficoResponsivoProps {
  mode?: 'music' | 'binary';
}

export default function GraficoResponsivo({ mode = 'music' }: GraficoResponsivoProps) {
  if (mode === 'binary') {
    return <GraficoBinario />;
  }
  return <GraficoMusical />;
}