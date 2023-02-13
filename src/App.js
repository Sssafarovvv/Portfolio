import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Testimonials from './components/Testimonials/Testimonials';

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
              <About />
              <Contacts />
              <Testimonials />
            </main>
          }
        />
        <Route path="/projects" element={<Testimonials />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
