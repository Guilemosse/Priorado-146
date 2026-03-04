let eventos = [
    {
        "nome": "IV ESOC - Encontro Sergipano da Ordem da Cavalaria",
        "img": "ivesoc.jpg",
        "descricao": "Realizado na cidade de Estância-SE, no dia 29/11/2024 com a presença de diversos membros da Ordem da Cavalaria, incluindo o Ilustre Comendador Cavaleiro Luís Henrique Silva e o Presidente do Conselho Consultivo Davi Simões. O evento contou com palestras, debates e atividades culturais, fortalecendo os laços entre os cavaleiros e promovendo a troca de conhecimentos sobre a história e as tradições da cavalaria.",
    },
    {
        "nome": "V ESOC - Encontro Sergipano da Ordem da Cavalaria",
        "img": "vesoc.jpg",
        "descricao": "Realizado na cidade de Canindé de São Francisco-SE, no dia 28/11/2025 com a presença de diversos membros da Ordem da Cavalaria, incluindo o Ilustre Comendador Cavaleiro Pedro Bruno e o Presidente do Conselho Consultivo José Alberto. O evento contou com palestras, debates e atividades culturais, fortalecendo os laços entre os cavaleiros e promovendo a troca de conhecimentos sobre a história e as tradições da cavalaria.",
    }]

function renderizarEventos() {
    const container = document.getElementById("container-eventos");
    if (!container) return;
    let htmlGerado = "";
    eventos.forEach(evento => {
        htmlGerado += `
            <div class="col-md-5 mb-4">
                <div class="card bg-transparent text-white border-warning h-100 shadow">
                    <img src="${evento.img}" class="card-img-top" alt="${evento.nome}" 
                         onerror="this.src='https://via.placeholder.com/400x200?text=Priorado+146'">
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title text-warning text-center">${evento.nome}</h4>
                        <hr class="border-warning">
                        <p class="card-text flex-grow-1" style="text-align: justify; font-family: poppins; font-size: 20px;">
                            ${evento.descricao}
                        </p>
                        <div class="text-center mt-3">
                            <button class="btn btn-sm btn-warning w-100" onclick="alert('Funcionalidade de leitura expandida em breve!')">
                                Ler Informações
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlGerado;
}
document.addEventListener("DOMContentLoaded", renderizarEventos);