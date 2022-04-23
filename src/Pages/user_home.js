import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditUser from "../Components/editar_perfil";

const UserPage = () => {
    const [comp, setComp] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate  = useNavigate()
    const handleClickNavigate = (value) => {
        setLoading(true);
        setComp(value);
        setLoading(false);
    }

    const handleLogout = () => {
        localStorage.clear()
        navigate("/")
    }

    return(
        <body class="bg-white font-family-karla h-screen">

            <div class="w-full flex flex-wrap">
                <div class="w-full md:w-1/2 flex flex-col">

                    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <a href="#" class="bg-black text-white font-bold text-xl p-4">Logo</a>
                    </div>

                    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p class="text-center text-3xl">Futpagode</p>
                            <button onClick={() => handleClickNavigate(1)} value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                                Ver Reservas
                            </button>
                            <button onClick={() => handleClickNavigate(2)} value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                                Fazer Reserva
                            </button>
                            <button onClick={() => handleClickNavigate(3)} value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                                Editar Perfil
                            </button>
                            <button onClick={() => handleLogout()} value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                                Sair
                            </button>
                    </div>

                </div>
                { !loading &&
                <div class="w-1/2 shadow-2xl">
                    {comp == 0 &&
                        <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0"/>
                    }
                    {comp == 1 &&
                        <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0"/>
                    }
                    {comp == 2 &&
                        <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0"/>
                    }
                    {comp == 3 &&
                        <EditUser/>
                    }
                </div>
                }
            </div>

        </body>

    )
}

export default UserPage;