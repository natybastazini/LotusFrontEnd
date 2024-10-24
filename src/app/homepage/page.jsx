import Image from "next/image";
import Link from "next/link";

import Logo from "@/../public/icons/utilities/lotus-icon.svg"
import LogoLogout from "@/../public/icons/nav/logout.svg"

// Navegção
import LogoHome from "@/../public/icons/nav/home.svg"
import LogoMonitoramento from "@/../public/icons/nav/monitoramento.svg"
import LogoConteudo from "@/../public/icons/nav/conteudos.svg"
import LogoChat from "@/../public/icons/nav/chat.svg"
import LogoGaleria from "@/../public/icons/nav/galeria.svg"
import LogoPerfil from "@/../public/icons/nav/profile.svg"

// Outros
import LogoBaby from "@/../public/icons/profile-information/pink/baby.svg"
import LogoSeta from "@/../public/icons/"

export default async function Home() {

    async function getContentAll() {

        const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudos/gestante` 
        const response = await fetch(url)
        const data = await response.json()
        return data.conteudosDados

    }
    const gestante = {
        nome: "Juliana"
    }

    const conteudo = await getContentAll()

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
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
            <Image src={LogoHome} alt="home" className="fill-current group-hover:text-white size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Home
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
            <Image src={LogoMonitoramento} alt="monitoramento" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Monitoramento
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
            <Image src={LogoConteudo} alt="conteudo" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Conteúdo
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
            <Image src={LogoChat} alt="chat" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Chat
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
            <Image src={LogoGaleria} alt="galeria" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Galeria
            </h1>
          </a>
          <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
            <Image src={LogoPerfil} alt="perfil" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
              Perfil
            </h1>
          </a>
        </nav>
        {/* botão sair */}
        <button className="flex flex-row gap-2 items-center">
          <Image src={LogoLogout} alt="logout" className="size-8"></Image>
          <p className="font-Inter font-normal text-gray-3 text-lg hover:text-pink-degrade-3">
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
                    <span>{gestante.nome}</span> 
                </h2>
                <p className="font-Inter font-light text-gray-4 text-xs">
                    A galeria super top pro seu bb!!
                </p>
            </div>
            {/* quadro */}
            <div className="flex items-center justify-center">
                <div className="h-[440px] w-[440px] bg-orange-600 rounded-xl border-pink-2 ">

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
                <div className="h-20 w-[440px] bg-white rounded-md p-4 flex flex-row shadow-lg gap-6">
                    <Image src={LogoBaby} alt="chat" className="size-14"></Image>
                    <div className="">
                        <h1 className="font-Inter text-lg text-gray-4">
                            Enxoval
                        </h1>
                        <p className="font-Inter text-sm text-gray-4">
                          Monte seu enxoval no checkList  
                        </p>
                    </div>
                    <Image src={}></Image>
                </div>
            </div>
        </div>
        {/* telinha 2 */}
        <div className="h-full bg-yellow-400">

        </div>  
      </main>
    </div>
  )
}