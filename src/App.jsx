import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { light, dark } from "./redux/themeSlice";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import "tailwindcss";
function App() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Router>
        {theme === "light" ? (
          <button className="themebtn" onClick={() => dispatch(dark())}>
            Dark Mode
          </button>
        ) : (
          <button className="themebtn" onClick={() => dispatch(light())}>
            Light Mode
          </button>
        )}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
