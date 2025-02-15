import { Instagram, Facebook, KeyRound } from "lucide-react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <div className="relative bottom-0 flex rounded-sm bg-[#5780DC]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between p-1">
          <div className="basic-1/5 flex">
            <NavLink
              to="https://www.instagram.com/soba.ramen1/"
              target="_blank"
            >
              <Instagram />
            </NavLink>
            <NavLink
              to="https://www.facebook.com/profile.php?id=61572853306851"
              target="_blank"
            >
              <Facebook />
            </NavLink>
          </div>
          <div className="flex">
            <p>
              {" "}
              Created by: Agnieszka Wilczek, Inga Pawelec, Żaklina Jasińska
            </p>
            <p>© 2025</p>
            <NavLink to="/admin">
              <KeyRound />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
