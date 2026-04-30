import React, { useState } from "react";
import { Home, Info, Users, HelpCircle, Menu, X } from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
  { label: "Beranda", href: "#hero", icon: <Home size={18} /> },
  { label: "Tentang Event", href: "#cards", icon: <Info size={18} /> },
  { label: "Pembicara", href: "#speaker", icon: <Users size={18} /> },
  { label: "FAQ", href: "#collapse", icon: <HelpCircle size={18} /> },
];

const Header: React.FC = () => {
  const [active, setActive] = useState<string>("#hero");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        
        <div className="flex items-center gap-2">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-12"
          />
        </div>

        
        <nav className="hidden md:flex items-center gap-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                active === item.href
                  ? "bg-pink-100 text-pink-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>

        
        <div className="hidden md:block">
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 hover:scale-105 transition">
            Daftar
          </button>
        </div>

        
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-3">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActive(item.href);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                active === item.href
                  ? "bg-pink-100 text-pink-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}

          
          <button className="mt-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
            Daftar
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;