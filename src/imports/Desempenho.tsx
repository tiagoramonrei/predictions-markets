import { useState, useRef, useEffect } from 'react';
import svgPaths from "./svg-b06764kyd1";
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from "../components/ui/drawer";
import ModalInvestidoBs from "./ModalInvestidoBs";
import ModalTotalGanhoBs from "./ModalTotalGanhoBs";
import ModalDesempenhoBs from "./ModalDesempenhoBs";

// --- Helper Functions (Adapted from GraficoResponsivo) ---

function extractPointsFromPath(pathString: string, numPoints: number = 1000): { x: number; y: number }[] {
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

function pointsToPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "";
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ');
}

function getYAtX(points: { x: number; y: number }[], targetX: number, width: number): number {
  const svgX = (targetX / 100) * width;
  
  for (let i = 0; i < points.length - 1; i++) {
    if (svgX >= points[i].x && svgX <= points[i + 1].x) {
      const x1 = points[i].x;
      const x2 = points[i + 1].x;
      const y1 = points[i].y;
      const y2 = points[i + 1].y;
      
      const t = (svgX - x1) / (x2 - x1);
      return y1 + (y2 - y1) * t;
    }
  }
  
  return points[points.length - 1]?.y || 0;
}

function getDateAtX(xPercent: number, period: string): string {
  let startDate: Date;
  let endDate: Date;

  if (period === "1 dia") {
    // Specific range: Nov 26, 23:00 to Nov 27, 11:00
    startDate = new Date(2025, 10, 26, 23, 0, 0);
    endDate = new Date(2025, 10, 27, 11, 0, 0);
  } else {
    endDate = new Date(2025, 10, 27); // Nov 27, 2025
    switch (period) {
      case "1 semana":
        startDate = new Date(2025, 10, 20); // Nov 20, 2025
        break;
      case "Todos":
        // Changed to 2 months range: Sep 27 to Nov 27
        startDate = new Date(2025, 8, 27); // Sep 27, 2025
        break;
      case "1 mês":
      default:
        startDate = new Date(2025, 9, 27); // Oct 27, 2025
        break;
    }
  }

  const totalTime = endDate.getTime() - startDate.getTime();
  const currentStatsTime = startDate.getTime() + (totalTime * (xPercent / 100));
  const currentDate = new Date(currentStatsTime);
  
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  
  let dateString = `${month} ${day}, ${year}`;

  if (period === "1 dia") {
    const hours = currentDate.getHours().toString().padStart(2, '0');
    dateString += ` - ${hours}h00`;
  }
  
  return dateString;
}

// --- Figma Components ---

function Txt({ value, isHidden }: { value: number; isHidden: boolean }) {
  const isPositive = value >= 0;
  const absValue = Math.abs(Math.round(value));
  const text = isHidden ? '*****' : `${isPositive ? '+' : '-'}R$ ${absValue}`;

  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="txt">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre text-[16px] font-bold">{text}</p>
      </div>
    </div>
  );
}

function Subiu({ isPositive }: { isPositive: boolean }) {
  return (
    <div 
      className={`h-[9px] relative shrink-0 w-[10.5px] ${!isPositive ? 'rotate-180' : ''}`} 
      data-name="subiu"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
        <g id="subiu">
          <path 
            d={svgPaths.p10bdb280} 
            fill={isPositive ? "var(--fill-0, #19954F)" : "#E54D2E"} 
            id="subiu_2" 
          />
        </g>
      </svg>
    </div>
  );
}

function Header({ value, isHidden }: { value: number; isHidden: boolean }) {
  const isPositive = value >= 0;
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-0 relative w-full">
          <Txt value={value} isHidden={isHidden} />
          <Subiu isPositive={isPositive} />
        </div>
      </div>
    </div>
  );
}

function Data({ x, date }: { x: number; date: string }) {
  const isRightSide = x >= 50;

  return (
    <div 
      className="absolute flex items-center pointer-events-none z-20" 
      data-name="data"
      style={{ 
        left: `${x}%`, 
        top: 0,
        paddingLeft: !isRightSide ? '8px' : '0px',
        paddingRight: isRightSide ? '8px' : '0px',
        transform: isRightSide ? 'translateX(-100%)' : 'none'
      }}
    >
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-[#E3E3E3]">
        <p className="leading-none whitespace-pre">{date}</p>
      </div>
    </div>
  );
}

function LinhaGrafico({ onValueChange, period }: { onValueChange: (val: number) => void; period: string }) {
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState<string>("");
  const [dotY, setDotY] = useState<number>(0);
  const [displayPoints, setDisplayPoints] = useState<{ x: number; y: number }[]>([]);
  
  const [pathD, setPathD] = useState(svgPaths.p297d0300);
  const [fillD, setFillD] = useState(svgPaths.p1b2d4380);

  const graficoRef = useRef<HTMLDivElement>(null);
  const lastValueDateRef = useRef<string>("");

  // Touch handling state and refs
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const dragDirectionRef = useRef<'horizontal' | 'vertical' | null>(null);
  const [isDraggingHorizontally, setIsDraggingHorizontally] = useState(false);

  // Lock body scroll when dragging horizontally
  useEffect(() => {
    if (isDraggingHorizontally) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDraggingHorizontally]);

  // Attach non-passive touch listener to prevent default only when horizontal
  useEffect(() => {
    const element = graficoRef.current;
    if (!element) return;

    const handleTouchMoveNonPassive = (e: TouchEvent) => {
      if (dragDirectionRef.current === 'horizontal') {
        e.preventDefault(); 
      }
    };

    element.addEventListener('touchmove', handleTouchMoveNonPassive, { passive: false });
    return () => element.removeEventListener('touchmove', handleTouchMoveNonPassive);
  }, []);
  
  // Constants
  const viewBoxWidth = 337;
  const baseLinePath = svgPaths.p297d0300;

  // Logic to generate graph path based on period
  useEffect(() => {
    lastValueDateRef.current = "";

    // Increased sampling resolution to avoid "broken" lines on high zoom levels (like 1 day)
    const allPoints = extractPointsFromPath(baseLinePath, 1000);
    if (allPoints.length === 0) return;

    let startIndexRatio = 0;
    
    // Assumptions:
    // Base curve represents "Todos" = 2 months (approx 60 days)
    // 1 month = 30 days
    // 1 week = 7 days
    // 1 day = 0.5 days (12 hours)
    
    if (period === "Todos") {
       startIndexRatio = 0;
    } else if (period === "1 mês") {
       startIndexRatio = 1 - (30 / 60); // Last 50%
    } else if (period === "1 semana") {
       startIndexRatio = 1 - (7 / 60); // Last ~11.6%
    } else if (period === "1 dia") {
       startIndexRatio = 1 - (0.5 / 60); // Last ~0.8%
    } else {
       startIndexRatio = 0;
    }

    const minX = viewBoxWidth * startIndexRatio;
    
    // Filter
    const slicedPoints = allPoints.filter(p => p.x >= minX);
    
    // Ensure start point touches left edge
    if (slicedPoints.length > 0 && slicedPoints[0].x > minX) {
       const first = slicedPoints[0];
       const firstIndex = allPoints.indexOf(first);
       const prev = allPoints[firstIndex - 1];
       
       if (prev) {
         const ratio = (minX - prev.x) / (first.x - prev.x);
         const startY = prev.y + (first.y - prev.y) * ratio;
         slicedPoints.unshift({ x: minX, y: startY });
       } else {
         slicedPoints.unshift({ x: minX, y: first.y });
       }
    }

    // Ensure end point touches right edge (viewBoxWidth)
    const lastPoint = slicedPoints[slicedPoints.length - 1];
    if (lastPoint && lastPoint.x < viewBoxWidth) {
      slicedPoints.push({ x: viewBoxWidth, y: lastPoint.y });
    }

    // Normalize X to 0..viewBoxWidth
    const normalizedPoints = slicedPoints.map(p => ({
      x: ((p.x - minX) / (viewBoxWidth - minX)) * viewBoxWidth,
      y: p.y
    }));

    // AUTO-SCALE Y-AXIS for "1 dia" to make fluctuations more evident
    if (period === "1 dia") {
      const yValues = normalizedPoints.map(p => p.y);
      const minY = Math.min(...yValues);
      const maxY = Math.max(...yValues);
      const rangeY = maxY - minY;

      if (rangeY > 0) {
        const targetMin = 15; 
        const targetMax = 65; 
        const targetRange = targetMax - targetMin;

        normalizedPoints.forEach(p => {
          const normalizedRatio = (p.y - minY) / rangeY;
          p.y = targetMin + (normalizedRatio * targetRange);
        });
      }
    }

    const newLinePath = pointsToPath(normalizedPoints);
    // Extend fill to corners to avoid diagonal cuts
    const newFillPath = `${newLinePath} L ${viewBoxWidth} 93 L 0 93 Z`;

    setPathD(newLinePath);
    setFillD(newFillPath);
    setDisplayPoints(normalizedPoints);

  }, [period]);

  const defaultX = 100;
  const displayX = hoverX ?? defaultX;
  
  useEffect(() => {
    if (displayPoints.length > 0) {
      const y = getYAtX(displayPoints, displayX, viewBoxWidth);
      setDotY(y);
      const newDate = getDateAtX(displayX, period);
      setCurrentDate(newDate);
      
      const normalizedY = y / 80;
      const val = 500 - (normalizedY * 700);

      if (period === '1 semana' || period === '1 mês' || period === '1 dia' || period === 'Todos') {
        if (newDate !== lastValueDateRef.current) {
          onValueChange(val);
          lastValueDateRef.current = newDate;
        }
      } else {
        onValueChange(val);
      }
    }
  }, [displayX, displayPoints, onValueChange, period]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!graficoRef.current) return;
    const rect = graficoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setHoverX(xPercent);
  };

  const handleMouseLeave = () => {
    setHoverX(null);
    setIsDraggingHorizontally(false); // Also reset drag state on leave
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    setIsDraggingHorizontally(false);
    dragDirectionRef.current = null;
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!graficoRef.current) return;
    const touch = e.touches[0];

    // If already locked horizontally, just scrub
    if (dragDirectionRef.current === 'horizontal') {
      const rect = graficoRef.current.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setHoverX(xPercent);
      return;
    }

    // If locked vertically, do nothing (let browser scroll)
    if (dragDirectionRef.current === 'vertical') {
      return;
    }

    // If direction unknown, determine it
    if (touchStartRef.current) {
      const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
      const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);
      const threshold = 5; // px

      if (deltaX < threshold && deltaY < threshold) {
        return; // Too small movement
      }

      if (deltaX > deltaY) {
        dragDirectionRef.current = 'horizontal';
        setIsDraggingHorizontally(true);
        
        // Update scrub immediately
        const rect = graficoRef.current.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setHoverX(xPercent);
      } else {
        dragDirectionRef.current = 'vertical';
        // Do NOT prevent default here, let vertical scroll happen
      }
    }
  };

  const handleTouchEnd = () => {
     touchStartRef.current = null;
     dragDirectionRef.current = null;
     setIsDraggingHorizontally(false);
     handleMouseLeave();
  };

  const scaleY = 78 / 80;
  const cssDotY = 39 + (dotY * scaleY);

  return (
    <div 
      className="absolute contents left-0 top-0" 
      data-name="linhaGrafico"
    >
       {/* Interaction Overlay */}
       <div 
        ref={graficoRef}
        className="absolute inset-0 z-30 cursor-crosshair" // Removed touch-none
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      />

      {/* Vertical Line */}
      <div 
        className="absolute flex h-[132px] items-center justify-center top-0 w-0 pointer-events-none z-10" 
        style={{ 
          left: `${displayX}%`,
          "--transform-inner-width": "132", 
          "--transform-inner-height": "0" 
        } as React.CSSProperties}
      >
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[132px]" data-name="lineEscolha">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 1">
                <line id="lineEscolha" stroke="var(--stroke-0, white)" strokeOpacity="0.32" x2="132" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Fill Gradient (Green part only) */}
      <div className="absolute h-[93px] left-0 top-[40px] w-full pointer-events-none" data-name="fill">
        <div 
          className="absolute bottom-0 left-0 right-0 top-[0.07%]"
          style={{ clipPath: `inset(0 ${100 - displayX}% 0 0)` }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 93">
            <path d={fillD} fill="url(#paint0_linear_2056_60)" id="fill" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2056_60" x1="167.5" x2="167.5" y1="-0.0656726" y2="108.934">
                <stop stopColor="#32A866" stopOpacity="0.16" />
                <stop offset="1" stopColor="#1E1E1E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Gray Line (Full) */}
      <div className="absolute h-[78px] left-0 top-[39px] w-full pointer-events-none" data-name="lineGrafico-gray">
        <div 
          className="absolute inset-[-1.28%_-0.3%]" 
          style={{ 
            "--stroke-0": "rgba(55, 55, 55, 1)",
            clipPath: `inset(0 0 0 ${displayX}%)` 
          } as React.CSSProperties}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 80">
            <path d={pathD} id="lineGrafico-gray" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Green Line (Clipped) */}
      <div className="absolute h-[78px] left-0 top-[39px] w-full pointer-events-none" data-name="lineGrafico-verde">
        <div 
          className="absolute inset-[-1.28%_-0.3%]" 
          style={{ 
            "--stroke-0": "rgba(50, 168, 102, 1)",
            clipPath: `inset(0 ${100 - displayX}% 0 0)`
          } as React.CSSProperties}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 80">
            {/* Using the full path but colored green and clipped */}
            <path d={pathD} id="lineGrafico-verde" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Dot */}
      <div 
        className="absolute size-[8.54px] pointer-events-none z-20" 
        data-name="circleGrafico"
        style={{
          left: `${displayX}%`,
          top: `${cssDotY}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.26981" cy="4.26981" fill="var(--fill-0, #32A866)" id="circleGrafico" r="4.26981" />
        </svg>
      </div>

      <Data x={displayX} date={currentDate} />
    </div>
  );
}

function Grafico({ onValueChange, period }: { onValueChange: (val: number) => void; period: string }) {
  return (
    <div className="h-[132px] relative shrink-0 w-full px-[20px]" data-name="grafico">
      <div className="relative w-full h-full">
        <LinhaGrafico onValueChange={onValueChange} period={period} />
      </div>
    </div>
  );
}

function BaseGrafico({ period, isHidden }: { period: string; isHidden: boolean }) {
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="baseGrafico">
      <Header value={currentValue} isHidden={isHidden} />
      <Grafico onValueChange={setCurrentValue} period={period} />
    </div>
  );
}

function Chip({ label, active = false }: { label: string; active?: boolean }) {
  if (active) {
    return (
      <div className="basis-0 bg-[#164c2e] grow h-[24px] min-h-px min-w-px relative rounded-[100px] shrink-0 cursor-pointer" data-name="chip">
        <div aria-hidden="true" className="absolute border-2 border-[#32a866] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative w-full">
            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
              <p className="leading-none whitespace-pre">{label}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[100px] shrink-0 cursor-pointer hover:bg-neutral-800 transition-colors" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative w-full">
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
            <p className="leading-none whitespace-pre">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FiltroPeriodo({ selected, onSelect }: { selected: string; onSelect: (val: string) => void }) {
  const periods = ["1 dia", "1 semana", "1 mês", "Todos"];

  return (
    <div className="relative shrink-0 w-full" data-name="filtroPeriodo">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[20px] py-0 relative w-full">
          {periods.map((p) => (
            <div key={p} onClick={() => onSelect(p)} className="basis-0 grow">
               <Chip label={p} active={selected === p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardGrafico({ isHidden }: { isHidden: boolean }) {
  const [period, setPeriod] = useState("1 mês");

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative rounded-[8px] shrink-0 w-full" data-name="cardGrafico">
      <BaseGrafico period={period} isHidden={isHidden} />
      <FiltroPeriodo selected={period} onSelect={setPeriod} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <circle cx="8.00333" cy="8.00333" id="Oval" r="6.0025" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p128ba400} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e110a00} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pe63e600} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="opacity-[0.56] relative shrink-0 size-[16px]" data-name="Icon">
      <Group />
    </div>
  );
}

function Title({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="title"
      onClick={onClick}
    >
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Total investido</p>
      </div>
      <Icon />
    </div>
  );
}

function TotalInvestido({ isHidden }: { isHidden: boolean }) {
  const [isInvestidoDrawerOpen, setIsInvestidoDrawerOpen] = useState(false);

  return (
    <>
      <Drawer open={isInvestidoDrawerOpen} onOpenChange={setIsInvestidoDrawerOpen}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Total Investido</DrawerTitle>
            <DrawerDescription>Explicação detalhada sobre o total investido</DrawerDescription>
          </div>
          <ModalInvestidoBs onClose={() => setIsInvestidoDrawerOpen(false)} />
        </DrawerContent>
      </Drawer>
      
      <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col h-[120px] items-start justify-between p-[20px] relative rounded-[8px] shrink-0 w-[148px]" data-name="totalInvestido">
        <Title onClick={() => setIsInvestidoDrawerOpen(true)} />
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
          <p className="leading-[24px] whitespace-pre font-bold">{isHidden ? "*****" : "R$ 2.500"}</p>
        </div>
      </div>
    </>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <circle cx="8.00333" cy="8.00333" id="Oval" r="6.0025" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p128ba400} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e110a00} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pe63e600} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="opacity-[0.56] relative shrink-0 size-[16px]" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Title1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="title"
      onClick={onClick}
    >
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Total ganho</p>
      </div>
      <Icon1 />
    </div>
  );
}

function TotalInvestido1({ isHidden }: { isHidden: boolean }) {
  const [isTotalGanhoDrawerOpen, setIsTotalGanhoDrawerOpen] = useState(false);

  return (
    <>
      <Drawer open={isTotalGanhoDrawerOpen} onOpenChange={setIsTotalGanhoDrawerOpen}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Total Ganho</DrawerTitle>
            <DrawerDescription>Explicação detalhada sobre o total ganho</DrawerDescription>
          </div>
          <ModalTotalGanhoBs onClose={() => setIsTotalGanhoDrawerOpen(false)} />
        </DrawerContent>
      </Drawer>

      <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col h-[120px] items-start justify-between p-[20px] relative rounded-[8px] shrink-0 w-[148px]" data-name="totalInvestido">
        <Title1 onClick={() => setIsTotalGanhoDrawerOpen(true)} />
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
          <p className="leading-[24px] whitespace-pre font-bold">{isHidden ? "*****" : "R$ 4.000"}</p>
        </div>
      </div>
    </>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <circle cx="8.00333" cy="8.00333" id="Oval" r="6.0025" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p128ba400} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e110a00} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pe63e600} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="opacity-[0.56] relative shrink-0 size-[16px]" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Title2({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="title"
      onClick={onClick}
    >
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Desempenho</p>
      </div>
      <Icon2 />
    </div>
  );
}

function TotalInvestido2({ isHidden }: { isHidden: boolean }) {
  const [isDesempenhoDrawerOpen, setIsDesempenhoDrawerOpen] = useState(false);

  return (
    <>
      <Drawer open={isDesempenhoDrawerOpen} onOpenChange={setIsDesempenhoDrawerOpen}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Desempenho</DrawerTitle>
            <DrawerDescription>Explicação detalhada sobre o desempenho</DrawerDescription>
          </div>
          <ModalDesempenhoBs onClose={() => setIsDesempenhoDrawerOpen(false)} />
        </DrawerContent>
      </Drawer>

      <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col h-[120px] items-start justify-between p-[20px] relative rounded-[8px] shrink-0 w-[148px]" data-name="totalInvestido">
        <Title2 onClick={() => setIsDesempenhoDrawerOpen(true)} />
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[20px] text-nowrap">
          <p className="leading-[24px] whitespace-pre font-bold">{isHidden ? "*****" : "+R$ 1.500"}</p>
        </div>
      </div>
    </>
  );
}

function Cards({ isHidden }: { isHidden: boolean }) {
  return (
    <div className="relative shrink-0 w-full" data-name="cards">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[20px] py-0 relative w-full overflow-x-auto no-scrollbar">
          <TotalInvestido isHidden={isHidden} />
          <TotalInvestido1 isHidden={isHidden} />
          <TotalInvestido2 isHidden={isHidden} />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p80fedc0} id="Path" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_2"></g>
        </g>
      </svg>
    </div>
  );
}

function BtnMostrarMais() {
  return (
    <div className="relative shrink-0 w-full cursor-pointer" data-name="btn_mostrar_mais">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-0 relative w-full">
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[12px] text-nowrap">
            <p className="leading-none whitespace-pre">Visualizar histórico</p>
          </div>
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

export default function Desempenho({ isHidden = false }: { isHidden?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="desempenho">
      <CardGrafico isHidden={isHidden} />
      <Cards isHidden={isHidden} />
      <BtnMostrarMais />
    </div>
  );
}
