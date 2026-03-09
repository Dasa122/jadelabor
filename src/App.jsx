import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Forms from "./pages/Forms";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/rolunk" element={<About />} />
        <Route path="/szolgaltatasok" element={<Services />} />
        <Route path="/urlapok" element={<Forms />} />
        <Route path="/kapcsolat" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router basename="/jadelabor">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}