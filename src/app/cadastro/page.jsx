"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

// Import das imagens 
import LotusIcon from "../../../public/icons/utilities/lotus-icon.svg";
import EmailIcon from "../../../public/icons/profile-information/grey/email.svg"
import KeyIcon from "../../../public/icons/profile-information/grey/key.svg"
import ArrowIcon from "../../../public/icons/utilities/arrow-white.svg"
import CircleDegrade from "../../../public/icons/utilities/circle-degrade.svg"


// Import dos componentes
import Toggle from "@/components/ToggleRegister";
import { statusToggle } from '../../components/ToggleRegister';


export default function Register() {

    useEffect(() => {
        const botao = document.getElementById("btn");
        
        // Verifique se o botão existe
        if (botao) {
          botao.addEventListener("click", validacaoFomulario);
        }
    
        // Limpeza: Remova o listener quando o componente for desmontado
        return () => {
          if (botao) {
            botao.removeEventListener("click", validacaoFomulario);
          }
        };
      }, []); 
    
      const validacaoFomulario = () => {
        if(statusToggle == true){

            // faltando adicionar o caminho para o cadastro de doula
            window.location.replace()
        }else{

            // faltando adicionar o caminho para o cadastro de gestante
        }
      };

  
  return (
    <div className="flex w-screen h-screen max-xl:p-16 max-sm:p-8 overflow-hidden">
      
      {/* Bolinhas decorativas */}
    <div className="h-full w-1/3 max-xl:w-0 max-xl:hidden relative bottom-16">

      <div className="w-full h-1/3 flex items-start justify-start align-top">
        <Image className="w-[50vw] h-[50vh] relative bottom-24 right-24" alt="Email Icon" src={CircleDegrade}></Image>
      </div>
      <div className="w-full h-1/3 flex items-center justify-end relative left-48 bottom-14">
          <span className="w-[200px] h-[200px] animate-jump-in animate-infinite animate-duration-[6000ms] animate-alternate rounded-full relative bg-pink-3 opacity-40"></span>
          <Image className="w-[200px] h-[200px] rounded-full relative right-[200px]" alt="Email Icon" src={CircleDegrade}></Image>
      </div>
      <div className="w-full h-1/3 flex justify-start items-center">
        <Image className="w-[45vw] h-[45vh] rounded-full relative right-6 bottom-12" alt="Email Icon" src={CircleDegrade}></Image>
      </div>

    </div>

      {/* Codigo da direita (icon, titulo, form e botao) */}
    <div className="h-full w-2/3 flex flex-col justify-center items-center gap-20 max-xl:w-full">

      <div className="flex flex-col gap-14">
        
        {/* Header (icon e titulo) */}
        <div className="flex flex-col gap-4 pb-10">
          <Image className="w-[15%]" alt="Lotus Icon" src={LotusIcon}></Image>

          <h1 className="text-gray-3 text-5xl">Crie sua conta</h1>
          <h2 className="text-gray-3">Ja possui uma conta? <span className="hover:text-pink-3 cursor-pointer transition duration-150 ease-in-out">Clique aqui</span> </h2>
        </div>

        {/* Campos para entrada de valor */}

        <form className="flex flex-col gap-4 w-[40vw] text-gray-4 text-xl font-ABeeZee max-xl:w-full max-sm:text-sm">


          <div className="flex gap-4 w-full h-18">
             
            <div className="flex p-5 w-1/2 rounded-3xl border-[3px] bg-white gap-4">
              <input 
              type="text" 
              placeholder="Nome" 
              className="w-full"
              required/>
            </div>

            <div className="flex p-4 w-1/2 rounded-3xl border-[3px] bg-white gap-4">
              <input 
              type="text" 
              placeholder="Sobrenome" 
              className="w-full"
              required/>
            </div>

          </div>

          <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4 max-sm:gap-2 max-sm:h-16 ">

              <Image className="w-[4%] max-sm:w-[10%]" alt="Email Icon" src={EmailIcon}></Image>
              <input 
              type="email" 
              placeholder="Seu email" 
              className="w-full"
              aria-label="Seu email"
              required/>
            </div>

            <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4 max-sm:gap-2 max-sm:h-16">
              <Image className="w-[4%] max-sm:w-[10%]" alt="Key Icon" src={KeyIcon}></Image>
              <input 
              type="password" 
              placeholder="Sua Senha" 
              className="w-full"
              required/>
            </div>


        </form>

        {/* Botao e Toggle Doula */}
        <div className="flex w-[40vw] gap-10 h-14 max-sm:w-full max-sm:gap-4 max-sm:items-end max-sm:flex-col max-lg:w-full">

          <div className="flex items-center p-4 w-2/3 rounded-full border-[3px] border-gray-1 bg-white gap-4 max-sm:w-full">
              
              <Toggle></Toggle>
              <p className="text-gray-3 font-ABeeZee">Cadastro como Doula</p>

          </div>

          <button id="btn" className="sw-1/3 transition duration-150 ease-in-out bg-gradient-to-r from-pink-3 to-orange-3 p-4 px-6 items-center justify-between rounded-full text-white flex hover:cursor-pointer hover:scale-95 max-sm:w-full max-sm:h-16 ">
            
            <p className="text-xl">Próximo</p>
            <Image className="w-[10%] max-sm:w-[5vw] " alt="Arrow Icon" src={ArrowIcon}></Image>
            
          </button>
          
        </div>

        
      </div>

    </div>
    
  </div>
  );
}