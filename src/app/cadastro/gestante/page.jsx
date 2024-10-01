"use client";

import Image from "next/image";
import Swal from 'sweetalert2';


// Import das imagens 
import LotusIcon from "../../../../public/icons/utilities/lotus-icon.svg";
import EmailIcon from "../../../../public/icons/profile-information/grey/email.svg"
import ArrowIcon from "../../../../public/icons/utilities/arrow-white.svg"
import CircleDegrade from "../../../../public/icons/utilities/circle-degrade.svg"
import CameraIcon from "../../../../public/icons//profile-information/grey/camera.svg"
import UserCheckIcon from "../../../../public/icons/profile-information/grey/user-check.svg"
import CakeIcon from "../../../../public/icons/profile-information/grey/birthday-cake.svg"
import ClipboardIcon from "../../../../public/icons/profile-information/grey/profession-edit-clipboard.svg"
import BabyIcon from "../../../../public/icons/profile-information/grey/baby.svg"
import CalendarIcon from "../../../../public/icons/profile-information/grey/calendar-heart.svg"
import BloodIcon from "../../../../public/icons/profile-information/grey/blood-type.svg"

export default function RegisterDoula() {

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

            <div className="h-full w-2/3 flex flex-col justify-center gap-20 p-14 ">
                {/* Header (icon, titulo e botao) */}
                <div className="flex justify-between gap-4 pb-10  w-full">
                    <div>
                        <Image className="w-[15%]" alt="Lotus Icon" src={LotusIcon}></Image>
                        <h1 className="text-gray-3 text-5xl">Conte sobre você</h1>
                    </div>
                    <button>oioii</button>
                </div>

                {/* Campos para entrada de valor */}
                <form className="flex flex-col gap-4 w-[full] text-gray-4 ">

                    <div className="flex gap-4">
                        <div className="border-[3px] flex flex-col p-4 items-center justify-center rounded-3xl bg-white gap-4 w-[30vh]">
                            <Image className="w-[40%] max-sm:w-[10%]" alt="Camera icon" src={CameraIcon}></Image>
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full"
                                required />
                        </div>

                        <div className="w-[70vw] flex flex-col gap-4">
                            <div className="border-[3px] flex p-4 rounded-3xl bg-white gap-4 ">
                                <Image className="w-[4%] max-sm:w-[10%]" alt="User icon" src={UserCheckIcon}></Image>
                                <input
                                    id="cpf"
                                    type="text"
                                    mask="999.999.999-99"
                                    placeholder="CPF"
                                    className="w-full"
                                    required />
                            </div>

                            <div className="border-[3px] flex p-4 rounded-3xl bg-white gap-4">
                                <Image className="w-[4%] max-sm:w-[10%]" alt="Cake icon" src={CakeIcon}></Image>
                                <input
                                    type="text"
                                    placeholder="Data de Nascimento"
                                    className="w-full"
                                    required />
                            </div>

                            <div className="border-[3px] flex p-4 rounded-3xl bg-white gap-4 co">
                                <Image className="w-[4%] max-sm:w-[10%]" alt="Clipboard icon" src={ClipboardIcon}></Image>
                                <input
                                    type="text"
                                    placeholder="profissao"
                                    className="w-full"
                                    required />
                            </div>
                        </div>
                    </div>


                    <div className="border-[3px] flex p-4 rounded-3xl bg-white gap-4 ">
                        <Image className="w-[4%] max-sm:w-[10%]" alt="Baby icon" src={BabyIcon}></Image>
                        <input
                            type="text"
                            placeholder="Nome do seu bebe"
                            className="w-full"
                            required />
                    </div>

                    <div className="border-[3px] flex p-4 rounded-3xl bg-white gap-4">
                        <Image className="w-[4%] max-sm:w-[10%]" alt="Calendar icon" src={CalendarIcon}></Image>
                        <input
                            type="text"
                            placeholder="Data previsao para o parto"
                            className="w-full"
                            required />
                    </div>


                    <div className="flex gap-4">
                        <div className="border-[3px] flex p-4 rounded-3xl bg-white gap-4">
                            <Image className="w-[7%] max-sm:w-[10%]" alt="Blood icon" src={BloodIcon}></Image>
                            <input
                                type="text"
                                placeholder="Seu tipo sanguineo"
                                className="w-full"
                                required />
                        </div>


                        <div className="border-[3px] flex p-4 rounded-3xl bg-white gap-4 ">
                            <Image className="w-[7%] max-sm:w-[10%]" alt="Blood icon" src={BloodIcon}></Image>
                            <input
                                type="text"
                                placeholder="Tipo sanguineo do pai"
                                className="w-full"
                                required />
                        </div>
                    </div>
                </form>


            </div>


        </div>
    )
}