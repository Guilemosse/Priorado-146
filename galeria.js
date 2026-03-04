let picc = [
    {
        "nome": "Diego Barboza de Jesus",
        "img": "logoprive.png",
        "gestao": "2010/2011",
    },
    {
        "nome": "Emanuel Braga do Carmo Ribeiro",
        "img": "logoprive.png",
        "gestao": "2012",
    },
    {
        "nome": "Hugo Torquato/Lucas Santos",
        "img": "logoprive.png",
        "gestao": "2013",
    },
    {
        "nome": "Lucas Prates Dias Gomes",
        "img": "logoprive.png",
        "gestao": "2014",
    },
    {
        "nome": "Ruan Valmir de Souza Silva",
        "img": "logoprive.png",
        "gestao": "2015",
    },
        {
        "nome": "Miguel José de Souza Cavalcanti",
        "img": "logoprive.png",
        "gestao": "2016",
    },
    {
        "nome": "Michel Sacramento Sobral",
        "img": "logoprive.png",
        "gestao": "2017",
    },
    {
        "nome": "João Marcelo Oliveira Bispo",
        "img": "joaomarcelopicc.png",
        "gestao": "2018",
    },
    {
        "nome": "Ícaro Assis Santos Souza",
        "img": "icaropicc.png",
        "gestao": "2019",
    },
    {
        "nome": "Hermilio Carvalho Junior",
        "img": "hermpicc.png",
        "gestao": "2020",
    },
    {
        "nome": "Eduardo Angelus Gomes de Almeida",
        "img": "logoprive.png",
        "gestao": "2021",
    },
    {
        "nome": "Luiz Felipe Batista Morato",
        "img": "moratopicc.png",
        "gestao": "2022",
    },
    {
        "nome": "Arthur Alves de Aguiar Cardoso",
        "img": "arthurpicc.png",
        "gestao": "2023",
    },
    {
        "nome": "Luís Henrique Mendonça Moura Silva",
        "img": "2024picc.jpg",
        "gestao": "2024",
    },
    {
        "nome": "Pedro Bruno Teles e Souza",
        "img": "2025picc.jpeg",
        "gestao": "2025",
    },
    {
        "nome": "Guilherme Silva Lemos",
        "img": "2026icc.JPG",
        "gestao": "2026",
    }
]

function renderizarGaleria() {
    const container = document.getElementById("container-liderancas");
    if (!container) return;
    let htmlGerado = "";
    picc.forEach(lider => {
        htmlGerado += `
            <div class="col-12 col-md-4 mb-5">
            <div class="card h-100 position-relative shadow-lg border-2" style="border: 2px solid #FFD700; border-radius: 15px; background-color: transparent;">
                
                <div class="text-center" style="margin-top: -50px;">
                    <img src="${lider.img}" class="rounded-circle border border-4" 
                         style="width: 110px; height: 110px; object-fit: cover; border-color: #FFD700 !important;" 
                         onerror="this.src='https://via.placeholder.com/110'">
                </div>
                
                <div class="card-body text-center d-flex flex-column align-items-center pt-2">
                    <h5 class="card-title mb-0" style="color: #D4AF37; font-weight: bold; font-size: 1.2rem;">
                        ${lider.nome}
                    </h5>
                    
                    <div class="w-75 mt-2">
                        <hr style="border-top: 2px solid #FFD700; opacity: 1; margin: 8px 0;">
                        <p class="card-text mb-2" style="font-size: 0.9rem; font-weight: 500; color: #D4AF37;">
                            Gestão: ${lider.gestao}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
});
    container.innerHTML = htmlGerado;
}
document.addEventListener("DOMContentLoaded", renderizarGaleria);
