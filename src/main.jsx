import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

import About from "./routes/About.jsx";
import Menu from "./routes/Menu.jsx";
import Layout from "./Layout/index.jsx";
import Contact from "./routes/Contact.jsx";
import RamenComponent from "./routes/RamenComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="custom-ramen" element={<RamenComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
