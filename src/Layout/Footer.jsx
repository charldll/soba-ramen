import { Instagram, Facebook, MapPinned, Mail, Phone } from "lucide-react";
import { NavLink } from "react-router";
import LogoFooter from "./imgs/soba-logo-footer.svg";

export default function Footer() {
  return (
    <div className="relative bg-[#5780DC]">
      <footer className="mx-auto max-w-7xl text-center text-black lg:text-left">
        <div className="mx-6 py-3 text-center md:text-left">
          {/* Grid dla sekcji */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr_1fr]">
            {/* Logo i slogan */}
            <div className="flex flex-col items-center md:items-start ">
              <img src={LogoFooter} alt="Soba Ramen" className="mb-2 w-27" />
              <p className="text-sm">
                Mistrzostwo smaku <br></br> w każdej misce
              </p>
            </div>

            {/* Kontakt */}
            <div className="flex flex-col items-center text-sm md:items-start">
              <h6 className="mb-4 font-semibold uppercase">
                Skontaktuj się z nami
              </h6>
              <div className="mb-2 flex items-center gap-2">
                <MapPinned />
                <span>Ramenowa 6/3, Ramenoland</span>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <Mail />
                <span>soba.ramen.best [at] gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone />
                <span>+48 123 456 789</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center text-sm md:items-start">
              <h6 className="mb-4 font-semibold uppercase">Social media</h6>
              <div className="mb-2 flex items-center gap-2">
                <NavLink
                  to="https://www.instagram.com/soba.ramen1/"
                  target="_blank"
                  className={"flex items-center gap-2 hover:underline"}
                >
                  <Instagram />
                  <span>soba.ramen1</span>
                </NavLink>
              </div>
              <div className="flex items-center gap-2">
                <NavLink
                  to="https://www.facebook.com/soba.ramen2/"
                  target="_blank"
                  className={"flex items-center gap-2 hover:underline"}
                >
                  <Facebook />
                  <span>soba.ramen2</span>
                </NavLink>
              </div>
            </div>

            {/* Przydatne linki */}
            <div>
              <h6 className="mb-4 text-sm font-semibold uppercase">
                Przydatne linki
              </h6>
              <p>
                <NavLink
                  to="/admin"
                  className="cursor-pointer text-sm hover:underline"
                >
                  Panel Administratora
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="absolute left-0 w-full bg-[#122653] p-3 text-center text-xs text-white">
          <span>© 2025 Copyright: Soba Ramen</span>
        </div>
      </footer>
    </div>
  );
}
