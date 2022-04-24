import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../api";

const SeeCreated = () => {
    const [criados, setCriados] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCriados = () => {
        api.get(
            `/jogos/criou/${localStorage.getItem("cpf")}`
        ).then((res) => {
            setCriados(res.data);
            setLoading(false);
        });
    }
    
    useEffect(() => {
        getCriados();
    }, []);

    const handleDelete = (id) => {
        api.delete(
            `/jogos/${id}`,
        ).then( () => {
            setLoading(true);
            getCriados();
        }
        )
    }

    return(
        <div class="bg-white font-family-karla h-screen flex justify-center">
            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <div class="flex flex-col">
            {!loading &&
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                        <thead class="border-b">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                #
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Campo
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Início
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Fim
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {criados.map((criado) => {
                                return (
                                    <tr class="border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {criado.id}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {criado.campo}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {criado.data_hora_inicio}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {criado.data_hora_termino}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button onClick={() => handleDelete(criado.id)} class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2">
                                            Cancelar
                                        </button>
                                    </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                }
                </div>
            </div>
        </div>
    )
}

export default SeeCreated;