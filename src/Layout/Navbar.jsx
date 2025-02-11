import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { useLocation } from "react-router";
import AppMobileMenuButton from "./components/AppMobileMenuButton.jsx";
import AppNavLink from "./components/AppNavLink.jsx";
import AppMobileMenuNavLink from "./components/AppMobileMenuNavLink.jsx";

const navigation = [
  { name: "Soba", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Ramen", href: "/ramen" },
  { name: "Kontakt", href: "/contact" },
  { name: "Admin", href: "/admin" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center"></div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
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
