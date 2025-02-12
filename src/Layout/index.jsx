import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <Navbar />
        <Outlet />
      <Footer />
      </div>
    </>
  );
}


