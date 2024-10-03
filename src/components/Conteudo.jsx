import { Jersey_10 } from "next/font/google";
import Image from "next/image";

export default function Conteudo ({imagem, titulo, data, texto}) {

   return(
    

    <div>
        {/* imagem */}
        <div className="w-full h-[26%] rounded-b-[40px] bg-pink-400"  style={{backgroundImage: `url(${imagem})`}}></div>
        {/* título e data */}
        <div className="pt-10 px-20 flex flex-col gap-2">
            <h1 className="font-inter font-normal text-gray-4 text-3xl">
                {titulo}
            </h1>
            <p className="font-inter font-normal text-gray-3 text-xl">
                {data}
            </p>
        </div>
        <div className="pt-10 px-20 flex flex-col gap-6">
            <p className="font-inter font-normal text-gray-3 text-xl text-justify">
                {texto}
            </p>
            <div className="flex flex-row gap-2">
                <p className="font-inter font-semibold text-gray-4 text-base">
                    Publicado por:
                </p>
                <p className="font-inter font-semibold text-gray-4 text-base">
                  
                </p>
            </div>
        </div>   

    </div>
   )
}




