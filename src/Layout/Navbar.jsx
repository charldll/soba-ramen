import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { useLocation, Link } from "react-router";
import AppMobileMenuButton from "./components/AppMobileMenuButton.jsx";
import AppNavLink from "./components/AppNavLink.jsx";
import AppMobileMenuNavLink from "./components/AppMobileMenuNavLink.jsx";
import Logo from "./imgs/soba-logo.svg";

const navigation = [
  { name: "Menu", href: "/menu" },
  { name: "Ramen", href:"/custom-ramen" },
  { name: "Kontakt", href: "/contact" },
  { name: "Admin", href: "/admin" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-[#E14F52]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex basis-1/5">
            <Link to="/">
              <img src={Logo} width={"90px"}/>
            </Link>
          </div>
          <div className="flex sm:ml-6 sm:block basis-4/5">
            <div className="flex space-x-4 justify-self-end">
              {navigation.map((item) => (
                  <AppNavLink
                    key={item.name}
                    to={item.href}
                    location={location}
                  >
                    {item.name}
                  </AppNavLink>
                ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <AppMobileMenuButton />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <AppMobileMenuNavLink
              key={item.name}
              to={item.href}
              location={location}
            >
              {item.name}
            </AppMobileMenuNavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
