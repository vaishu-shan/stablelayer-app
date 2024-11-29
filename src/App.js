// import './App.css';
import "./styles/global.css"
import BuySection from './components/Buy/buy';
import Navbar from "./containers/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import EarnSection from "./components/Earn/earn";
import PortfolioScreen from "./components/Portfolio/portfolio";
import SEnaSection from "./components/sENA/sEna";

function App() {
  return (
    <>
      <div className='main-container-two main-container layout-background-image'>
        <Navbar />
        <Routes>
      <Route path="*" element={<BuySection />} exact />
      <Route path="/earn" element={<EarnSection />} />
      <Route path="/portfolio" element={<PortfolioScreen />} />
      <Route path="/sena" element={<SEnaSection />} />

    
        </Routes>
      </div>
    </>
  );
}

export default App;
