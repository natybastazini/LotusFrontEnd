import { Jersey_10 } from "next/font/google";
import Image from "next/image";

export default function Card ({titulo, imagem}) {

    return(
        <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg aspect-video">
        <div className="h-[80%] rounded-2xl bg-pink-300">
        <div className="h-full w-full bg-cover bg-no-repeat" style={{backgroundImage: `url(${imagem})`}}></div>
        </div>
        {/* título do card */}
        <p className="font-Inter font-medium text-xl text-gray-3 p-4">
            {titulo}
        </p>
    </div>
  )
}