import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { dadosColetores } from "../../../Util/database";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { AlertMessage } from "../../../components/Toast/ToastMessage";

const schemaFormColetores = z.object({
  cod_cidade: z.coerce.string().nonempty("Informe cidade!"),
  cod_coletor: z
    .string()
    .min(1, "Informe código coletor.")
    .max(4, "Códido coletor deve ter no minimo 4 caracteres."),
  serial_coletor: z
    .string()
    .min(1, "Informe serial coletor.")
    .max(16, "Serial deve ter no minino 16 caracteres."),
  executor: z.coerce.string().optional(),
});

type SchemaFormColetores = z.infer<typeof schemaFormColetores>;

export function FormCadColetores() {
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
    show: boolean;
  }>({ type: "success", message: "", show: false });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SchemaFormColetores>({
    resolver: zodResolver(schemaFormColetores),
  });

  async function handleOnSubmit(data: SchemaFormColetores) {
    try {
      dadosColetores.push({
        id: 1 + 1,
        cidade: data.cod_cidade,
        cod_coletor: data.cod_coletor,
        executor: data.executor || "",
        serial: data.serial_coletor,
      });
      reset();
      setToast({
        type: "success",
        message: "Enviado com sucesso!",
        show: true,
      });
    } catch (error) {
      setToast({
        type: "error",
        message: "Erro ao enviar formulário!" + error,
        show: true,
      });
    }
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 4000);
  }

  return (
    <div className="p-8">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex max-w-lg flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cidades">Cidade</Label>
          </div>
          <Select id="cidades" {...register("cod_cidade")}>
            <option value="Abadia">Abadia</option>
            <option value="Acreuna">Acreuna</option>
            <option value="Água Fria">Água Fria</option>
          </Select>
          {errors.cod_cidade && (
            <span className="p-2 text-sm font-semibold text-red-500">
              {errors.cod_cidade.message}
            </span>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="cod_coletor">Códico Coletor</Label>
          </div>
          <TextInput
            id="cod_coletor"
            type="text"
            {...register("cod_coletor")}
          />
          {errors.cod_coletor && (
            <span className="p-2 text-sm font-semibold text-red-500">
              {errors.cod_coletor.message}
            </span>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="serial">Serial</Label>
          </div>
          <TextInput
            id="serial"
            type="text"
            {...register("serial_coletor")}
          />
          {errors.serial_coletor && (
            <span className="p-2 text-sm font-semibold text-red-500">
              {errors.serial_coletor.message}
            </span>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="executor">Executor</Label>
          </div>
          <Select id="executor" {...register("executor")}>
            <option value="WENDELL DE ANDRADE">WENDELL DE ANDRADE</option>
            <option value="DERIVALDO TORRES DE AQUINO">
              DERIVALDO TORRES DE AQUINO
            </option>
            <option value="EDUARDO NUNES DE ARAUJO">
              EDUARDO NUNES DE ARAUJO
            </option>
          </Select>
          {errors.executor && (
            <span className="p-2 text-sm font-semibold text-red-500">
              {errors.executor.message}
            </span>
          )}
        </div>
        {isSubmitting ? (
          <Button
            className="cursor-pointer"
            color="green"
            type="submit"
            disabled
          >
            <LoaderCircle className="animate-spin" />
          </Button>
        ) : (
          <Button className="cursor-pointer" color="green" type="submit">
            Cadastrar
          </Button>
        )}
      </form>
      {toast.show && (
        <AlertMessage
          type={toast.type}
          message={toast.message}
          onClose={() => setToast((prev) => ({ ...prev, show: false }))}
        />
      )}
    </div>
  );
}
