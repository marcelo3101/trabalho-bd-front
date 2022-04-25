import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../api";

const EditUser = () => {
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setNome(localStorage.getItem("nome"));
        setData(localStorage.getItem("datanasc"));
        setLoading(false);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        api.patch(
            "/jogadores/"+localStorage.getItem("cpf"),
            {
                "nome": nome,
                "data_de_nascimento": data
            }
        ).then( () => {
            localStorage.setItem("nome", nome);
            localStorage.setItem("datanasc", data)
            }
        )
    }

    return(
        <div class="bg-white font-family-karla h-screen flex justify-center">
           {!loading &&
           <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                 <p class="text-center text-3xl">Editar Perfil</p>
                 <form class="flex flex-col pt-3 md:pt-8" onSubmit={e => handleSubmit(e)}>
                     <div class="flex flex-col pt-4">
                         <label for="name" class="text-lg">Nome</label>
                         <input value={nome} onChange={e => setNome(e.target.value)} type="text" id="name" placeholder="John Smith" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                     </div>
                     <div class="flex flex-col pt-4">
                         <label for="password" class="text-lg">Senha</label>
                         <input type="password" id="password" placeholder="Senha" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                     </div>
               <div class="flex flex-col pt-4">
                         <label for="birth-date" class="text-lg">Data de Nascimento</label>
                         <input value={data} onChange={e => setData(e.target.value)} type="date" id="birth-date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                     </div>
                       <input type="submit" value="Salvar" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                 </form>
             </div>
             }
        </div>
    )
}

export default EditUser;