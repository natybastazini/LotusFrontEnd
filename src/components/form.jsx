"use client";


export default function Form() {
    return (
        <div classname="bg-slate-500">
            <h2 classname="bg-zinc-200">Formulário de Exemplo</h2>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />

                <p>Escolha uma opção:</p>
                <label classname="bg-zinc-400"> 
                    <input type="radio" name="opcao" value="opcao1" required />
                    Opção 1
                </label>
                <label>
                    <input type="radio" name="opcao" value="opcao2" />
                    Opção 2
                </label>
                <label classname="ml-2 text-sm font-medium text-gray-900">
                    <input classname="bg-gray-800" type="radio" name="opcao" value="opcao3" />
                    Opção 3
                </label>

                <button type="submit">Enviar</button>
        </div>
    );
}
