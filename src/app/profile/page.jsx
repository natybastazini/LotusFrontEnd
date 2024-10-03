"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/utilities/lotus-icon.svg";
import conteudos from "@/public/icons/nav/conteudos.svg";
import galeria from "@/public/icons/nav/galeria.svg";
import perfil from "@/public/icons/nav/Ativo/profile.svg";
import laranja from "@/public/icons/nav/nav-laranja.png";
import config from "@/public/icons/utilities/settings-white.svg";
import edit from "@/public/icons/utilities/edit-pencil-orange.svg";
import verif from "@/public/icons/profile-information/verificado.png";
import logout from "@/public/icons/nav/Ativo/logout.png";
import book from "@/public/icons/utilities/book-pink.svg";
import arrow from "@/public/icons/utilities/arrow-pink.svg";

const SettingsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-lg font-bold mb-4">Configurações</h2>
        {/* Adicione aqui os campos ou opções que você deseja */}
        <button onClick={onClose} className="mt-4 bg-pink-3 text-white p-2 rounded">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [cpf, setCpf] = useState('');
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [yearsAsDoula, setYearsAsDoula] = useState("");
  const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
  const [specialization, setSpecialization] = useState([]);
  const [specializationOptions] = useState([
    "Consultoria em aleitamento materno",
    "Doula de parto",
    "Doula do luto",
    "Doula Cultural",
    "Doula de Aborto ou perda gestacional",
    "Doula de Adoção"
  ]);
  const [selectedSpecializations, setSelectedSpecializations] = useState([]);

  const fetchUserInfo = async (id) => {
    const userData = {
      name: "Vitória Castro",
      specialization: [
        "Consultoria em aleitamento materno",
        "Doula de parto"
      ],
      profilePicture: null,
    };
    setUserInfo(userData);
  };

  const handleIdSubmit = (e) => {
    e.preventDefault();
    fetchUserInfo(userId);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfilePicture = () => {
    setProfilePicture(selectedImage);
    toggleModal();
  };

  const handleSpecializationChange = (option) => {
    if (selectedSpecializations.includes(option)) {
      setSelectedSpecializations(
        selectedSpecializations.filter((spec) => spec !== option)
      );
    } else {
      setSelectedSpecializations([...selectedSpecializations, option]);
    }
  };

  const handleSave = () => {
    setProfilePicture(selectedImage);
    setSpecialization(selectedSpecializations);
    toggleModal();
  };

  return (
    <div className="font-ABeeZee bg-white font-inter min-h-screen p-4 lg:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
      <div className="flex flex-col items-start w-full lg:w-1/5 fixed lg:static top-0 left-0 ">
        <div className="inline-flex items-center mb-4">
          <Image src={logo} alt="logo" className="w-24 h-16" />
          <h1 className="text-pink-3 text-lg font-medium ml-2">Lotus</h1>
        </div>

        <button className="w-full text-left text-gray-3">
          <div className="flex items-center p-4 gap-2">
            <Image src={conteudos} alt="Conteúdos" className="w-9 h-11" />
            <h1 className="text-gray-3 font-medium">Conteúdos</h1>
          </div>
        </button>

        <button className="w-full text-left">
          <div className="flex items-center p-4 gap-2">
            <Image src={galeria} alt="Galeria" className="w-9 h-16" />
            <h1 className="text-gray-3 font-medium">Galeria</h1>
          </div>
        </button>

        <button className="w-full text-left">
          <div className="flex items-center p-4 gap-2">
            <Image src={perfil} alt="Perfil" className="w-9 h-16" />
            <h1 className="text-gray-3 font-medium">Perfil</h1>
          </div>
        </button>

        <button className="absolute bottom-8 left-4">
          <div className="flex items-center">
            <Image src={logout} alt="Logout" />
          </div>
        </button>
      </div>

      {/* DIV CINZA PRINCIPAL */}
      <div className="bg-gray-1 flex-grow lg:w-[600%] rounded-3xl lg:ml-[20%] p-4 lg:p-8 relative">
        <div className="absolute top-0 left-0 w-full">
          <Image src={laranja} alt="Nav Laranja" className="w-full h-32 lg:h-24" />

          {/* IMAGEM BOTAO CONFIG */}
          <button onClick={() => setIsSettingsModalOpen(true)}>
            <Image
              src={config}
              alt="Configurações"
              className="absolute right-16 top-2 w-9 h-16"
            />
          </button>

          <button onClick={toggleModal}>
            <Image
              src={edit}
              alt="Editar"
              className="absolute right-4 top-2 w-9 h-16 rounded-full"
            />
          </button>
        </div>

        <form onSubmit={handleIdSubmit} className="flex flex-col lg:flex-row items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Insira o ID do usuário"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border rounded p-2 w-full lg:w-auto"
            required
          />
          <button type="submit" className="bg-pink-3 text-white rounded p-2 w-full lg:w-auto">
            Buscar
          </button>
        </form>

        <div className="flex flex-col lg:flex-row items-center gap-4 relative md:h-48">
          <div className="relative">
            <div className="bg-white h-48 w-48 lg:h-80 lg:w-80 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-40 lg:h-64 lg:w-64 rounded-full flex items-center justify-center bg-gray-1">
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Perfil"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-gray-400">Foto de Perfil</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-12 text-center lg:text-left md:text-[20px]">
            <div className="flex gap-9 items-center justify-center lg:justify-start md:text-[6]">
              <h1 className="text-[25px] md:text-[25px] text-gray-4 font-ABeeZee z-40 font-thin">
                {userInfo ? userInfo.name : "Nome do Usuário"}
              </h1>
              <Image src={verif} alt="verificado doula" className="size-9 content-center md:size-6 " />
            </div>

            <div>
              <h1 className="text-[15px] text-gray-3 font-medium">Especialização em:</h1>
              <div className="flex flex-wrap gap-4 mt-4 text-gray-4 md:justify-center lg:justify-start">
                {userInfo
                  ? userInfo.specialization.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-pink-3 text-white rounded px-2 py-1 text-sm"
                      >
                        {spec}
                      </span>
                    ))
                  : specialization.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-pink-3 text-white rounded px-2 py-1 text-sm"
                      >
                        {spec}
                      </span>
                    ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-20 text-gray-3 lg:flex lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-lg">Descrição</h2>
            <p>{description}</p>
          </div>

          {/* Conteúdos Publicados */}
          <div className="flex-1">
            <h1 className="text-gray-3 text-[23px] font-ABeeZee">Conteúdos publicados:</h1>
            <div className="mt-4 space-y-4">
              <div className="flex items-start cursor-pointer border-2 border-gray-300 rounded-lg hover:bg-gray-200 bg-white">
                <div className="bg-pink-3 h-28 w-3 rounded-s"></div>
                <div className="flex-grow text-left pl-2 ">
                  <div className="flex items-center text-[20px] text-pink-3">
                    <Image src={book} alt="Ícone de livro" className="h-5 w-5 mr-1" />
                    <span>Nicho: Amamentação</span>
                  </div>
                  <span className="text-gray-4 text-[25px] pt-2">Desvendando a amamentação</span>
                  <div className="text-[20px] text-gray-3 pt-2">Atualizado: 01/01/2024</div>
                </div>
                <div className="flex items-center justify-center ml-2">
                  <Image src={arrow} alt="Seta rosa" className="h-10 w-10" />
                </div>
              </div>
              {/* Adicione mais conteúdos publicados aqui */}
            </div>
          </div>
        </div>
      </div>

      {/* Chamada do SettingsModal */}
      <SettingsModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} />

      {/* Modal para editar perfil */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-lg font-bold mb-4">Editar Perfil</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="border rounded p-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Anos como doula"
              value={yearsAsDoula}
              onChange={(e) => setYearsAsDoula(e.target.value)}
              className="border rounded p-2 mb-4 w-full"
            />
            <textarea
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded p-2 mb-4 w-full"
            />
            <div>
              <h2 className="font-bold mb-2">Especializações</h2>
              {specializationOptions.map((option) => (
                <label key={option} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedSpecializations.includes(option)}
                    onChange={() => handleSpecializationChange(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
            <button onClick={handleSaveProfilePicture} className="mt-4 bg-pink-3 text-white p-2 rounded">
              Salvar
            </button>
            <button onClick={toggleModal} className="mt-4 bg-gray-300 text-gray-700 p-2 rounded">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
