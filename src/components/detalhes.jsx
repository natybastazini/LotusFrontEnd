import { useRouter } from 'next/router';

export default function Detalhes() {
    const router = useRouter();
    const { id } = router.query; // Pega o ID da URL

    return (
        <div>
            <h1>Detalhes do Conteúdo {id}</h1>
            {/* Aqui você pode buscar mais informações sobre o conteúdo usando o ID */}
        </div>
    );
}