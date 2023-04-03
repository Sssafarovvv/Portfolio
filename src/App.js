import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <Home />
              <Testimonials />
              <About />
              <Contacts />
            </main>
          }
        />
        <Route path="/projects" element={<Testimonials />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;
