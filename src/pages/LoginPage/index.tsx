import { Card, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigation = useNavigate();

  function handleSubmit() {
    navigation("/home");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <Card className="w-full max-w-md">
        <div className="flex items-center justify-center">
          <img src={""} alt="" width={250} />
        </div>

        <form>
          <div className="mb-4">
            <Label htmlFor="username" />
            <TextInput
              id="username"
              type="text"
              placeholder="Digite seu usuário"
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" />
            <TextInput
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-400 p-3 font-bold whitespace-nowrap text-white hover:opacity-95 disabled:opacity-40"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            disabled={false} // Replace with actual disabled state if needed
            data-testid="login-button"
            aria-label="Entrar no sistema"
          >
            Entrar
          </button>
        </form>
      </Card>
    </div>
  );
}
