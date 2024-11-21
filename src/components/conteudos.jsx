'use client'

import { Jersey_10 } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Card({ titulo, imagem, id }) {

    const router = useRouter()

    const handleClick = () => {
        router.push('/conteudos/conteudo/' + id)
    }

    return (
        <div>
            <button onClick={handleClick} className="h-72 w-[500px] bg-white rounded-2xl shadow-lg aspect-video hover:scale-105 transition duration-200">
                <div className="h-[80%] rounded-2xl bg-pink-300">
                    <div className="h-full w-full bg-cover bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${imagem})` }}></div>
                </div>
                {/* título do card */}
                <p className="font-Inter font-medium text-xl text-gray-3 p-4">
                    {titulo}
                </p>
                {

               

                }

            </button>
        </div>

    )
}