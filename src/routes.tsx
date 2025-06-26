import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { HomePage } from "./pages/homePage";
import MegaMenuComponent from "./components/MegaMenu/MegaMenu";
import type { JSX } from "react";
import { CadastroColetoresPage } from "./pages/Cadastros/Coletores";
import { CadastroCidadesPage } from "./pages/Cadastros/Cidades";
import { CadastroDistritoPage } from "./pages/Cadastros/Distrito";
import { FooterComponent } from "./components/Footer/footer";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/home"
          element={<ProtectedPage element={<HomePage />} />}
        />
        <Route
          path="/cadastro/coletor"
          element={<ProtectedPage element={<CadastroColetoresPage />} />}
        />
        <Route
          path="/cadastro/cidades"
          element={<ProtectedPage element={<CadastroCidadesPage />} />}
        />
        <Route
          path="/cadastro/distritos"
          element={<ProtectedPage element={<CadastroDistritoPage />} />}
        />
        <Route
          path="/cadastro/regiao"
          element={<ProtectedPage element={<CadastroColetoresPage />} />}
        />
        <Route
          path="/cadastro/executor"
          element={<ProtectedPage element={<CadastroColetoresPage />} />}
        />
        <Route
          path="/cadastro/redirecionamento"
          element={<ProtectedPage element={<CadastroColetoresPage />} />}
        />

        <Route path="*" element={<p>Notfound</p>} />
      </Routes>
    </BrowserRouter>
  );
}

// 🧱 Layout compartilhado com Header, Content e Footer
function ProtectedPage({ element }: { element: JSX.Element }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* MegaMenu fixo no topo */}
      <header className="top-0 z-50 w-full shadow">
        <MegaMenuComponent />
      </header>

      {/* main abaixo do header fixo */}

      <main className="flex-grow bg-white pt-24 dark:bg-gray-900">
        {element}
      </main>

      <footer className="z-50 mt-1">
        <FooterComponent />
      </footer>
    </div>
  );
}
