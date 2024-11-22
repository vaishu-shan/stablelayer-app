// import './App.css';
import "./styles/global.css"
import BuySection from './components/Buy/buy';
import Navbar from "./containers/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import EarnSection from "./components/Earn/earn";

function App() {
  return (
    <>
      <div className='main-container-two main-container layout-background-image'>
        <Navbar />
        <Routes>
      <Route path="*" element={<BuySection />} exact />
      <Route path="/earn" element={<EarnSection />} />

    
        </Routes>
      </div>
    </>
  );
}

export default App;
