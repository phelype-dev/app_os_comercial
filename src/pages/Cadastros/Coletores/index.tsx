import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { CadastroContainer } from "../../../components/Main/CadastroContainer";

//Importação de icones Lucid.
import { CirclePlus, Trash2 } from "lucide-react";
import { useState } from "react";
import { CustomDrawer } from "../../../components/Drawer/DrawerComponent";
import { FormCadColetores } from "./FormCadastroColetores";
import { dadosColetores } from "../../../Util/database";

export function CadastroColetoresPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [buttonDelete, setButtonDelete] = useState<boolean>(true);

  const handleButton = () => setIsOpen(true);

  const handleSelecionar = (id: string) => {
    setSelectedItem(id === selectedItem ? null : id);
    setButtonDelete(id === selectedItem);
  };

  return (
    <div className="flex flex-grow flex-col">
      {/* esta div deve estar dentro de <main> */}
      <CadastroContainer titulo="Cadastro Coletores">
        <div className="flex flex-row justify-end p-3">
          <Button
            color="none"
            className="mr-1 gap-1 rounded-lg px-4 py-2 text-xl font-medium text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none md:mr-2 md:px-5 md:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-red-800"
            size="xs"
            onClick={handleButton}
            disabled={!buttonDelete}
          >
            <CirclePlus className="align-middle" size={18} />
            <span className="text-[16px]">Adicionar</span>
          </Button>

          {/*Renderização condicional, ao clicar no checkbox, será habilidado o button*/}
          {!buttonDelete && (
            <Button
              color="none"
              className="mr-1 gap-1 rounded-lg px-4 py-2 text-xl font-medium text-gray-800 hover:bg-red-400 focus:ring-4 focus:ring-red-300 focus:outline-none md:mr-2 md:px-5 md:py-2.5 dark:text-white dark:hover:bg-red-700 dark:focus:ring-gray-800"
              size="xs"
            >
              <Trash2 className="align-middle" size={18} />
              <span className="text-[16px]">Deletar</span>
            </Button>
          )}
        </div>

        <Table hoverable>
          <TableHead>
            <TableHeadCell className="p-4 size-0.5">
              <Checkbox disabled />
            </TableHeadCell>
            <TableHeadCell className="text-gray-100 font-bold">ID</TableHeadCell>
            <TableHeadCell className="text-gray-100 font-bold">Cidade</TableHeadCell>
            <TableHeadCell className="text-gray-100 font-bold">Cód Coletor</TableHeadCell>
            <TableHeadCell className="text-gray-100 font-bold">Serial</TableHeadCell>
            <TableHeadCell className="text-gray-100 font-bold">Executor</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {dadosColetores.map((dado, index) => (
              <TableRow
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="p-4">
                  <Checkbox
                    key={dado.id}
                    id={dado.id.toString()}
                    checked={selectedItem === dado.id.toString()}
                    onChange={() => handleSelecionar(dado.id.toString())}
                  />
                </TableCell>
                <TableCell className="text-xs font-extralight whitespace-nowrap text-gray-900 dark:text-white">
                  {dado.id}
                </TableCell>
                <TableCell className="text-xs font-extralight whitespace-nowrap text-gray-900 dark:text-white">
                  {dado.cidade}
                </TableCell>
                <TableCell className="text-xs font-extralight whitespace-nowrap text-gray-900 dark:text-white">
                  {dado.cod_coletor}
                </TableCell>
                <TableCell className="text-xs font-extralight whitespace-nowrap text-gray-900 dark:text-white">
                  {dado.serial}
                </TableCell>
                <TableCell className="text-xs font-extralight whitespace-nowrap text-gray-900 dark:text-white">
                  {dado.executor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Drawer dentro da área principal */}
        <CustomDrawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Novo Cadastro"
        >
          <FormCadColetores />
        </CustomDrawer>
      </CadastroContainer>
    </div>
  );
}
