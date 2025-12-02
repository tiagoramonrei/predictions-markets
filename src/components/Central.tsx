import { useState } from "react";
import Header from "../imports/Header-2015-203";
import Subheader from "../imports/Subheader";
import Content from "../imports/Content";
import Desempenho from "../imports/Desempenho";
import BaseNavBar from "../imports/BaseNavBar";

export default function Central() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Header />
      <div className="sticky top-0 z-40 bg-[#171717]">
        <div className="w-full h-auto shrink-0">
          <Subheader />
        </div>
      </div>
      <div className="flex-1 flex flex-col text-white pb-[80px]">
        <Content isHidden={isHidden} onToggleHidden={() => setIsHidden(!isHidden)} />
        <Desempenho isHidden={isHidden} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px]">
        <BaseNavBar />
      </div>
    </div>
  );
}
