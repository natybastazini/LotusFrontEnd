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

import { useState, useEffect } from "react";

// Calendário
import Calendar from "react-calendar";
import '@/../src/styles/Calendar.css';

export default function Home() {

  const [date, setDate] = useState(null);  // Inicializa com null para evitar erro de hidratação
  const [events, setEvents] = useState([]);  // Estado para armazenar os eventos
  const [newEvents, setNewEvents] = useState([]);  // Estado para armazenar eventos locais
  const [eventTitle, setEventTitle] = useState('');  // Título do evento
  const [eventDate, setEventDate] = useState(null);  // Data do evento
  const [eventTime, setEventTime] = useState('');  // Horário do evento
  const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para controlar a exibição do modal

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
        // Cria o evento na API
        const response = await axios.post(apiUrl, {
          descricao_calendario: eventTitle,
          data_calendario: eventDate,
          horario_calendario: eventTime,
          usuario_calendario_id: 1,  // ID do usuário
        });

        // Adiciona o novo evento no estado local
        const newEvent = {
          descricao_calendario: eventTitle,
          data_calendario: eventDate,
          horario_calendario: eventTime
        };

        setNewEvents([...newEvents, newEvent]); // Adiciona o novo evento no estado local
        setEventTitle('');
        setEventDate(null);
        setEventTime('');
        fetchEvents();  // Recarrega os eventos após a criação
        setIsModalOpen(false);  // Fecha o modal após a criação do evento
      } catch (error) {
        console.error("Erro ao criar evento:", error);
      }
    }
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Chama a função para buscar os eventos quando o componente for montado
  useEffect(() => {
    setDate(new Date());  // Definir a data apenas no lado do cliente (evita erro de hidratação)
    fetchEvents();
  }, []);  // O efeito roda apenas uma vez após o componente ser montado

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
          <div className="flex flex-col px-28 py-20 gap-4 h-full">
            {/* card título */}
            <div className="flex items-baseline">
              <h1 className="text-3xl text-orange-5 font-Inter">
                Agenda
              </h1>
            </div>
            {/* card do calendário */}
            <div className="h-full w-full mb-6">
            {/* calendário */}
              <Calendar value={date}></Calendar>
            </div>
            {/* botão de adicionar evento */}
            <button onClick={openModal} className="group h-16 w-full bg-pink-degrade-1 rounded-2xl flex flex-row items-center p-4 gap-2 hover:bg-pink-2">
                <IoAdd className="text-pink-4 h-10 w-10"/>
                <p className="text-lg text-pink-4 font-normal font-Inter">
                  Adicionar Evento
                </p>
              </button> 
            
            {/* Exibindo os eventos */}
            <div className="flex flex-col gap-4 mt-6">
              {newEvents.map((event, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">{event.descricao_calendario}</h3>
                  <p className="text-sm text-gray-600">{event.data_calendario} - {event.horario_calendario}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>

      {/* Modal para adicionar evento */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Adicionar Evento</h2>
            <input 
              type="text" 
              placeholder="Título do evento" 
              value={eventTitle} 
              onChange={(e) => setEventTitle(e.target.value)} 
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input 
              type="date" 
              value={eventDate} 
              onChange={(e) => setEventDate(e.target.value)} 
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input 
              type="time" 
              value={eventTime} 
              onChange={(e) => setEventTime(e.target.value)} 
              className="w-full p-2 mb-4 border rounded-md"
            />
            <div className="flex justify-between">
              <button 
                onClick={closeModal} 
                className="bg-gray-300 px-4 py-2 rounded-md">Cancelar</button>
              <button 
                onClick={createEvent} 
                className="bg-pink-500 text-white px-4 py-2 rounded-md">Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
