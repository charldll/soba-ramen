import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import Kitchen from "./kitchen/Kitchen.jsx";
import Layout from "./Layout/index.jsx";
import Contact from "./routes/Contact.jsx";
import Home from "./routes/Home.jsx";
import Menu from "./routes/Menu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
