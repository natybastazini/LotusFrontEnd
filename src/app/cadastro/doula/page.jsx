"use client";

import { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Criar uma URL de pré-visualização da imagem
      const filePreview = URL.createObjectURL(selectedFile);
      setPreview(filePreview);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    // Enviar o arquivo para o servidor
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Limpar a miniatura após o upload, se necessário
        setPreview(null);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form className='flex flex-col justify-center items-center h-screen' onSubmit={handleSubmit}>
      <input className='bg-slate-500 w-36 h-36 opacity-0' type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Enviar</button>
      {preview && (
        <div className='relative bottom-36 -z-20'>
          <img
            src={preview}
            alt="Preview"
            style={{ width: '120px', height: '120px', borderRadius: '5px' }}
          />
        </div>
      )}
    </form>
  );
};

export default FileUpload;
