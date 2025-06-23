import {
  Button,
  MegaMenu,
  MegaMenuDropdown,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import {
  ClipboardPen,
  Smartphone,
  Building2,
  LandPlot,
  Compass,
  BookUser,
  ArrowDownUp,
} from "lucide-react";
import type { JSX } from "react";
import { MenuItem } from "../../Util/MenuConfig";

export default function MegaMenuComponent() {
  const userPdi = 9;
  const username = "Phelype Rodrigo dos Santos";

  const iconMap: Record<string, JSX.Element> = {
    ClipboardPen: <ClipboardPen />,
    Smartphone: <Smartphone />,
    Building2: <Building2 />,
    LandPlot: <LandPlot />,
    Compass: <Compass />,
    BookUser: <BookUser />,
    ArrowDownUp: <ArrowDownUp />,
  };

  return (
    <div className="fixed top-0 z-50 h-16 w-full bg-white shadow">
      <MegaMenu>
        <NavbarBrand href="/">
          <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </NavbarBrand>
        <div className="order-2 hidden items-center md:flex">
          <span className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none md:mr-2 md:px-5 md:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            {username}
          </span>
          <Button href="#">Sign out</Button>
        </div>
        <NavbarToggle />
        <NavbarCollapse className="m-5">
          {MenuItem.map((item) => {
            if (item.subItems) {
              // Filtrar itens permitidos para o usuário
              const visibleSubItems = item.subItems.filter(
                (sub) => userPdi >= sub.permission,
              );
              if (visibleSubItems.length === 0) return null;

              return (
                <NavbarLink
                  key={item.label}
                  className="flex items-center gap-1 text-[16px]"
                >
                  <MegaMenuDropdown toggle={<>{item.label}</>}>
                    <ul className="grid grid-cols-2 space-y-2 p-2">
                      {visibleSubItems.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.path}
                            className="group hover:text-primary-600 dark:hover:text-primary-500 flex items-center gap-1"
                          >
                            {iconMap[sub.icon] ?? null}
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </MegaMenuDropdown>
                </NavbarLink>
              );
            }

            // Renderiza itens simples
            return userPdi >= item.permission ? (
              <NavbarLink
                key={item.label}
                href={item.path}
                className="flex items-center gap-1 text-[16px]"
              >
                {item.label}
              </NavbarLink>
            ) : null;
          })}
        </NavbarCollapse>
      </MegaMenu>
    </div>
  );
}
