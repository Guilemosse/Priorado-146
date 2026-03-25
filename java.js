let contatos = [
    {
        "nome": "Guilherme Silva Lemos",
        "img": "Guilemos.jpeg",
        "cargo": "Ilustre Comendador Cavaleiro (ICC)",
        "Número para contato": "79 9 9973-6196"
    },
    {
        "nome": "Luiz Gabriel Cerqueira",
        "img": "alemao.jpeg",
        "cargo": "Presidente do Conselho Consultivo (PCC)",
        "Número para contato": "79 9 9132-7170"
    }]


   function mostrarContatos() {
    let cardcontainer = document.getElementById("lista-contatos");
    if (cardcontainer) {
        cardcontainer.innerHTML = ""; 
        contatos.forEach((contato) => {
            cardcontainer.innerHTML += `
                <div class="col-md-6 mb-3" style="background-image: url('fundo146.png');">
                    <div class="card bg-transparent text-white border-warning">
                        <img src="${contato.img}" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body text-center">
                            <h5 class="card-title">${contato.nome}</h5>
                            <p class="card-text">${contato.cargo}</p>
                            <p class="text-warning">${contato["Número para contato"]}</p>
                        </div>
                    </div>
                </div>`;
        });
        var meuModal = new bootstrap.Modal(document.getElementById('modalContato'));
        meuModal.show();
    }
}

function mostrarReuniao() {
    alert(
        "🏛️ INFORMAÇÕES DE REUNIÃO\n\n" +
        "• Ocorrem no último sábado de cada mês.\n" +
        "• Início às 14:00.\n" +
        "• Local: Definido pela diretoria.\n\n" +
        "📞 Dúvidas? Entre em contato pelo número nos 'Contatos'!"
    );
}