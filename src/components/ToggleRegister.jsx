"use client";

import { useState } from "react";
import Swal from 'sweetalert2';


export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    setEnabled(!enabled);

    // Exibir a mensagem no terminal se o toggle for ativado
    if (!enabled) {
      console.log("Toggle ativado!");

      // Exibir um alert quando o toggle for ativado
      DoulaInfo()
    }else{
        console.log("Toggle desativado!");
    }
  };

  const DoulaInfo = () => {
    Swal.fire({
      title: "Cadastro como Doula",
      text: "",
      icon: "question",
      html: `
    Uma doula é uma profissional que oferece suporte físico, 
    emocional e informativo à gestante antes, durante e após o parto.
     Ao selecionar essa opção, você confirma que é uma profissional treinada e
      concorda com os <a href="https://www.canva.com/design/DAGPovniYY4/_bnBDb0nIioAfkYcdyXfpA/edit?utm_content=DAGPovniYY4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" autofocus><b>termos de uso</b></a> do aplicativo.`
    });
  };

  return (
    <div className="flex items-center">

      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={enabled}
            onChange={handleToggle}
          />
          <div
            className={`block w-14 h-8 rounded-full transition ${
              enabled ? "bg-pink-3" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${
              enabled ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
}