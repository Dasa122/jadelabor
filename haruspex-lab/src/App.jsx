import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rolunk" element={<About />} />
          <Route path="/szolgaltatasok" element={<Services />} />
          <Route path="/kapcsolat" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}