import { ReactNode } from "react";

interface CadastroContainerProps {
  titulo: string;
  children: ReactNode;
}

export function CadastroContainer({
  titulo,
  children,
}: CadastroContainerProps) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="py-3">
        <div className="border-gray-800 bg-gray-800 p-3 shadow">
          <div className="text-center">
            <span className="text-[22px] font-semibold text-white">
              {titulo}
            </span>
          </div>

          {/* conteúdo scrollável */}
          <div className="mt-4 max-h-[calc(100vh-16rem)] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
