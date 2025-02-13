import { Instagram, Facebook } from 'lucide-react';
import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <div className="flex relative bottom-0 bg-[#5780DC]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex p-1 items-center justify-between">
        <div className="flex basic-1/5">
          <NavLink to="https://www.instagram.com/">
        <Instagram/> 
        </NavLink>
        <NavLink to="https://www.facebook.com/">
        <Facebook/>
        </NavLink>
        </div>
        <div className="flex">
        <p> Created by: Agnieszka Wilczek, Inga Pawelec, Żaklina Jasińska</p>
        <p>© 2025</p>
        </div>
        </div>
      </div>
    </div>
  );
}
