import React, { useState } from "react";
import image from "../../assets/emcampo-thinkstock.jpg"

const RegisterPage = () => {
    const [cpfInput, setCpfInput] = useState("");
    const inputOnChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)) setCpfInput(e.target.value)
    }

    return(
        <body class="bg-white font-family-karla h-screen">
        
            <div class="w-full flex flex-wrap">
        
                <div class="w-full md:w-1/2 flex flex-col">
        
                    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                        <a href="#" class="bg-black text-white font-bold text-xl p-4" alt="Logo">Logo</a>
                    </div>
        
                    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p class="text-center text-3xl">Cadastre-se.</p>
                        <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                            <div class="flex flex-col pt-4">
                                <label for="name" class="text-lg">Nome</label>
                                <input type="text" id="name" placeholder="John Smith" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
        
                            <div class="flex flex-col pt-4">
                            <label for="cpf" class="text-lg">CPF (Apenas números)</label>
                                <input value={cpfInput} onChange={e => inputOnChange(e)} type="cpf" id="cpf" placeholder="0000000000" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
            
                            <div class="flex flex-col pt-4">
                                <label for="password" class="text-lg">Senha</label>
                                <input type="password" id="password" placeholder="Senha" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="birth-date" class="text-lg">Data de Nascimento</label>
                                <input type="date" id="birth-date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
        
                            <input type="submit" value="Register" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                        </form>
                        <div class="text-center pt-12 pb-12">
                            <p>Já possui uma conta? <a href="login.html" class="underline font-semibold">Faça login.</a></p>
                        </div>
                    </div>
        
                </div>
        
                <div class="w-1/2 shadow-2xl">
                    <img class="object-cover w-full h-screen hidden md:block" src={image} alt="Background" />
                </div>
            </div>        
        </body>
    )
}

export default RegisterPage;