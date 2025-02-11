import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

// Jak otoczyłam Navbar div className - navbar się rozszerzył,
// jak dodałam w [auto_1fr_auto] - rozjechał się tekst
