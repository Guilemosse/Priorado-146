let Honor = {
    "comendador": [
        { nome: "Raniere Lopes da Silva", data: "2018", foto: "logoprive.png" },
        { nome: "Hermílio Carvalho Junior", data: "2023", foto: "herco.png" },
        { nome: "Luiz Felipe Batista Morato", data: "2024", foto: "moratoco.jpeg" },
        { nome: "Breno Holanda Vilela Fernandes", data: "2025", foto: "vilelaco.jpeg" }
    ],
    "graocruz": [
        { nome: "Lorde Wellington Rodrigues Queiroz Júnior", data: "2021", foto: "wel.jpg" },
        { nome: "Lorde Pedro Victor Pereira dos Santos", data: "2023", foto: "pvgra.jpg" },
        { nome: "Lorde Luiz Felipe Batista Morato", data: "2025", foto: "moratogra.jpeg" }
    ]
};

function carregarLista() {
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get('tipo'); 
    const container = document.getElementById("container-membros");
    const titulo = document.getElementById("titulo-pagina");
    if (!tipo || !Honor[tipo]) return;

    if (titulo) {
        titulo.innerText = tipo === "comendador" ? "Comendadores da Cavalaria" : "Grã-Cruzes da Cavalaria";
    }

    let htmlGerado = "";
    Honor[tipo].forEach(membro => {
        htmlGerado += `
            <div class="col-12 col-md-4 mb-5">
                <div class="card h-100 position-relative shadow border-2" style="border: 2px solid #FFD700; border-radius: 15px; background-color: transparent; margin-top: 50px;">
                    
                    <div class="text-center" style="margin-top: -50px;">
                        <img src="${membro.foto}" class="rounded-circle border border-4" 
                             style="width: 110px; height: 110px; object-fit: cover; border-color: #FFD700 !important;" 
                             onerror="this.src='https://via.placeholder.com/110'">
                    </div>
                    
                    <div class="card-body text-center pt-2">
                        <h5 class="card-title mb-0" style="color: #D4AF37; font-weight: bold;">
                            ${membro.nome}
                        </h5>
                        <div class="w-75 mx-auto">
                            <hr style="border-top: 2px solid #FFD700; opacity: 1; margin: 10px 0;">
                            <p class="card-text mb-2" style="font-size: 0.9rem; color: #FFD700;">
                                <strong>Ano:</strong> ${membro.data}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlGerado;
}

document.addEventListener("DOMContentLoaded", carregarLista);