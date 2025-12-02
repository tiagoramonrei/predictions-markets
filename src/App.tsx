import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InternaMercado from "./components/InternaMercado";
import InternaMercadoNeymar from "./components/InternaMercadoNeymar";
import Inicio from "./components/Inicio";
import Historico from "./components/Historico";
import Posicoes from "./components/Posicoes";
import Central from "./components/Central";
import MobileGuard from "./components/MobileGuard";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

export default function App() {
  return (
    <MobileGuard>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageTransition><Inicio /></PageTransition>} />
          <Route path="/historico" element={<PageTransition><Historico /></PageTransition>} />
          <Route path="/posicoes" element={<PageTransition><Posicoes /></PageTransition>} />
          <Route path="/central" element={<PageTransition><Central /></PageTransition>} />
          <Route path="/mercado" element={<PageTransition><InternaMercado /></PageTransition>} />
          <Route path="/neymar" element={<PageTransition><InternaMercadoNeymar /></PageTransition>} />
        </Routes>
      </Router>
    </MobileGuard>
  );
}
