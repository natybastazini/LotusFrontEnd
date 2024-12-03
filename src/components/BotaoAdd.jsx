"use client";

import React, { useState } from "react";

const ContentButton = ({ userRole }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddContent = (e) => {
    e.preventDefault();
    // Lógica para enviar conteúdo
    console.log("Conteúdo enviado");
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpenModal}
        className="flex items-center justify-center gap-2 w-64 h-14 bg-[#FFE6EB] hover:bg-pink-3 text-pink-4 font-Inter font-normal py-2 px-4 rounded-lg transition text-xl hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>

        Adicionar Conteúdo
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] md:w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-pink-4">Adicionar Conteúdo</h2>
            <form onSubmit={handleAddContent} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Título do Conteúdo"
                className="border border-pink-2 p-2 rounded-lg"
                required
              />
              <textarea
                placeholder="Descrição"
                className="border border-pink-2 p-2 rounded-lg"
                rows="4"
                required
              ></textarea>
              <input
                type="file"
                className="border border-pink-2 p-2 rounded-lg"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-pink-3 hover:bg-pink-4 text-white py-2 px-4 rounded-lg transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-pink-3 hover:bg-pink-4 text-white py-2 px-4 rounded-lg transition"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentButton;
