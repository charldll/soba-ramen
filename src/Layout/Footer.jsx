import { Instagram, Facebook } from 'lucide-react';
import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <div className="bg-[#E14F52] rounded-sm">
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
        <div className="flex text-[.6rem] basic-4/5 justify-center items-center">
        <ul> Created by:
          <li>Agnieszka Wilczek,</li>  
          <li>Inga Pawelec,</li>   
          <li>Żaklina Jasińska</li>  
          </ul>
          <div>
        <p>©2025</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
