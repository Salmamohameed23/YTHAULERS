import {  Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./Pages/Home/Home";
import Electric from "./components/Electric";
import Consumer from "./components/Consumer";
import Navbar from "./components/NavBar";
import Energy from "./components/Energy";
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-contact">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Electric" element={<Electric />} />
          <Route path="/Energy" element={<Energy />} />

          <Route path="/Consumer" element={<Consumer />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;