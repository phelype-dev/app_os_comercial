import { X } from "lucide-react";
import { ReactNode } from "react";

interface CustomDrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function CustomDrawer({
  open,
  onClose,
  children,
  title,
}: CustomDrawerProps) {
  return (
    <>
      {/* Overlay escuro entre header fixo e footer */}
      {open && (
        <div
          className="bg-opacity-80 fixed top-22 right-0 bottom-[60px] left-0 z-40 opacity-80"
          onClick={onClose}
        />
      )}

      {/* Drawer lateral direita */}
      <div
        className={`fixed top-22 right-0 bottom-[72px] z-50 w-full max-w-lg rounded-tl-3xl rounded-bl-3xl bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">{title || "Novo Cadastro"}</h2>
          <button onClick={onClose}>
            <X className="h-5 w-5 cursor-pointer" />
          </button>
        </div>

        <div className="h-full overflow-y-auto p-4">{children}</div>
      </div>
    </>
  );
}
