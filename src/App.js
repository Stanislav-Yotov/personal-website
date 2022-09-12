import Navbar from "./components/navigation/Navbar";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
