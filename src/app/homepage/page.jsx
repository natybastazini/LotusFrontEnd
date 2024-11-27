'use client'


import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import Logo from "@/public/icons/utilities/lotus-icon.svg"
import LogoLogout from "@/public/icons/nav/logout.svg"

// Navegção
import LogoHome from "@/public/icons/nav/home.svg"
import LogoMonitoramento from "@/public/icons/nav/monitoramento.svg"
import LogoConteudo from "@/public/icons/nav/conteudos.svg"
import LogoChat from "@/public/icons/nav/chat.svg"
import LogoGaleria from "@/public/icons/nav/galeria.svg"
import LogoPerfil from "@/public/icons/nav/profile.svg"

// Outros
import LogoBaby from "@/public/icons/profile-information/pink/baby.svg"
import LogoSeta from "@/public/icons/utilities/arrow-pink.svg"

// Icones
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";

// Quadro
import Flor from "@/components/quadro";

import { useState } from "react";
import { useEffect } from "react";

// Calendário
import Calendar from "react-calendar";
import '@/../src/styles/Calendar.css';


export default async function Home() {

  // async function getGestante() {

  //     const url = `https://lotus-back-end.onrender.com/v1/Lotus/cadastro/gestante` 
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     return data.conteudosDados

  // }    

  // const gestante = {
  //     nome: "Juliana"
  // }

  // const info = await getFlor()

  // async function getFlor(id) {
  //   const url = `https://lotus-back-end.onrender.com/v1/Lotus/cadastro/gestante`
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   return data.gestanteDados

  // }

  // const conteudo = await getFlor()

  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);  // Estado para armazenar os eventos
  const [eventTitle, setEventTitle] = useState('');  // Título do evento
  const [eventDate, setEventDate] = useState(null);  // Data do evento
  const [eventTime, setEventTime] = useState('');  // Horário do evento

  const apiUrl = "https://lotus-back-end.onrender.com/v1/Lotus/agenda";

  // Função para buscar os eventos na API
  const fetchEvents = async () => {
    try {
      const response = await axios.get(apiUrl);
      setEvents(response.data.agendaDados);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
    }
  };

  // Função para criar um novo evento
  const createEvent = async () => {
    if (eventTitle && eventDate && eventTime) {
      try {
        const response = await axios.post(apiUrl, {
          descricao_calendario: eventTitle,
          data_calendario: eventDate,
          horario_calendario: eventTime,
          usuario_calendario_id: 1,  // Você pode alterar isso para o ID real do usuário
        });
        setEventTitle('');
        setEventDate(null);
        setEventTime('');
        fetchEvents();  // Recarrega os eventos após a criação
      } catch (error) {
        console.error("Erro ao criar evento:", error);
      }
    }
  };

  // Função para editar um evento
  const editEvent = async (id, newTitle, newDate, newTime) => {
    try {
      await axios.put(`${apiUrl}/${id}`, {
        descricao_calendario: newTitle,
        data_calendario: newDate,
        horario_calendario: newTime,
        usuario_calendario_id: 1,
      });
      fetchEvents();  // Recarrega os eventos após a edição
    } catch (error) {
      console.error("Erro ao editar evento:", error);
    }
  };

  // Função para excluir um evento
  const deleteEvent = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchEvents();  // Recarrega os eventos após a exclusão
    } catch (error) {
      console.error("Erro ao excluir evento:", error);
    }
  };

  // Chama a função para buscar os eventos quando o componente for montado
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="flex h-screen">
      <header className="flex flex-col md:w-[20%] py-10 px-10">
        {/* lótus */}
        <div className="flex flex-row items-center gap-2 pb-16">
          <Image src={Logo} alt="logo" className="size-16"></Image>
          <h1 className="font-ABeeZee text-pink-3 font-light text-3xl text-center">
            Lótus
          </h1>
        </div>
        {/* navegação */}
        <nav className="flex flex-col gap-10 h-[80%]">
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-orange-degrade-3 transition duration-200 rounded-xl group">
            <Image src={LogoHome} alt="home" className="fill-current group-hover:text-white size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Home
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-orange-degrade-3 transition duration-200 rounded-xl group">
            <Image src={LogoMonitoramento} alt="monitoramento" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Monitoramento
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-orange-degrade-3 transition duration-200 rounded-xl group">
            <Image src={LogoConteudo} alt="conteudo" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Conteúdo
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-orange-degrade-3 transition duration-200 rounded-xl group">
            <Image src={LogoChat} alt="chat" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Chat
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-orange-degrade-3 transition duration-200 rounded-xl group">
            <Image src={LogoGaleria} alt="galeria" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Galeria
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-orange-degrade-3 transition duration-200 rounded-xl group">
            <Image src={LogoPerfil} alt="perfil" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Perfil
            </h1>
          </a>
        </nav>
        {/* botão sair */}
        <button className="flex flex-row gap-2 items-center">
          <Image src={LogoLogout} alt="logout" className="size-8"></Image>
          <p className="font-Inter font-normal text-gray-3 text-lg hover:text-orange-3">
            Log out
          </p>
        </button>
      </header>
      <main className="w-[80%] bg-white p-10 grid grid-cols-2 gap-2">
        {/* telinha 1 */}
        <div className="h-full bg-gray-2 p-6 rounded-[40px] flex flex-col gap-10">
          {/* Título e descrição */}
          <div className="flex flex-col gap-2">
            <h2 className="font-ABeeZee text-black font-medium">
              Olá,
              {/* <span>{info.nome_gestante}</span>  */}
            </h2>
            <p className="font-Inter font-light text-gray-4 text-xs">
              Estamos aqui para acompanhar cada passo dessa jornada incrível, oferecendo suporte, dicas e informações personalizadas para você e seu bebê.
            </p>
          </div>
          {/* quadro */}
          {/* {conteudo.map(item)=>{
              return <Flor imagem={item.foto_flor}></>
            }} */}
          <div className="flex items-center justify-center">
            <div className="h-[440px] w-[440px] bg-white rounded-xl border-4 border-pink-3 flex items-center justify-center">
              <Image src={LogoBaby} alt="chat" className="size-1/2"></Image>
            </div>
          </div>
          {/* cards */}
          <div className="flex items-center justify-center flex-col gap-2">
            {/* card de progresso */}
            <div className="h-20 w-[440px] bg-orange-1 rounded-md border-2 border-orange-degrade-1 p-4 flex flex-col gap-2">
              <p className="flex font-ABeeZee text-orange-degrade-1">
                12 semanas restantes
              </p>
              {/* degradê */}
              <div className="bg-pink-degrade-3 flex flex-row w-full h-4 justify-end rounded-s-[40px] rounded-e-[40px] overflow-hidden">
                <div className="bg-pink-degrade-2 w-2/3 flex justify-end rounded-b-full">
                  <div className="bg-pink-degrade-1 w-1/2 rounded-bl-full"></div>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="h-20 w-[440px] bg-white rounded-md p-4 flex flex-row shadow-lg gap-6 justify-between">
              <Image src={LogoBaby} alt="chat" className="size-14"></Image>
              <div className="">
                <h1 className="font-Inter text-lg text-gray-4">
                  Enxoval
                </h1>
                <p className="font-Inter text-sm text-gray-4">
                  Monte seu enxoval no checkList
                </p>
              </div>
              <button className="">
                <Image src={LogoSeta} alt="seta" className="size-14"></Image>
              </button>
            </div>
          </div>
        </div>
        {/* telinha 2 */}
        <div className="bg-gray-1 h-full rounded-[36px] overflow-hidden">
          {/* degradê */}
          <div className="bg-orange-degrade-2 flex flex-row w-full h-16 justify-end rounded-s-[40px]  overflow-hidden">
            <div className="bg-orange-degrade-3 w-1/2 flex justify-end rounded-bl-full"></div>
          </div>
          {/* calendário */}
          <div className="flex flex-col px-28 py-20 gap-4">
            {/* card título */}
            <div className="flex items-baseline">
              <h1 className="text-3xl text-orange-5 font-Inter">
                Agenda
              </h1>
            </div>
            {/* card do calendário */}
            <div className="h-60 w-full bg-transparent mb-48">
            {/* calendário */}
              <Calendar></Calendar>

              

            </div>
            {/* cards de eventos */}
            {/* <div className="h-28 w-full bg-orange-100 rounded-lg p-4">
                <div className="flex flex-row items-baseline gap-2 pb-4">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                    <p className="font-Inter text-pink-4 text-xs">
                      20
                    </p>
                  </div>
                  <p className="font-Inter text-xs text-[#af9676] font-semibold">
                    Me ajuda Deus, ta foda esse tcc
                  </p>
                </div>
                <div className="grid grid-cols-2 px-12">
                  <div className="flex flex-row items-center gap-2">
                    <FaCalendarAlt className="text-[#af9676] h-4 w-5"/>
                    <p className="font-Inter text-xs text-[#af9676] font-normal">
                      27 jan 2024 
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaRegClock className="text-[#af9676] h-4 w-4"/>
                    <p className="font-Inter text-xs text-[#af9676] font-normal">
                      27 jan 2024 
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-28 w-full bg-orange-100 rounded-lg p-4">
                <div className="flex flex-row items-baseline gap-2 pb-4">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                    <p className="font-Inter text-pink-4 text-xs">
                      20
                    </p>
                  </div>
                  <p className="font-Inter text-xs text-[#af9676] font-semibold">
                    Me ajuda Deus, ta foda esse tcc
                  </p>
                </div>
                <div className="grid grid-cols-2 px-12">
                  <div className="flex flex-row items-center gap-2">
                    <FaCalendarAlt className="text-[#af9676] h-4 w-5"/>
                    <p className="font-Inter text-xs text-[#af9676] font-normal">
                      27 jan 2024 
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaRegClock className="text-[#af9676] h-4 w-4"/>
                    <p className="font-Inter text-xs text-[#af9676] font-normal">
                      27 jan 2024 
                    </p>
                  </div>
                </div>
              </div> */}
            {/* botão de adicionar evento */}
            <button className="group h-16 w-full bg-pink-degrade-1 rounded-2xl flex flex-row items-center p-4 gap-2 hover:bg-pink-2">
                <IoAdd className="text-pink-4 h-10 w-10"/>
                <p className="text-lg text-pink-4 font-normal font-Inter">
                  Adicionar Evento
                </p>
              </button> 
          </div>
        </div>
      </main>
    </div>
  )
}