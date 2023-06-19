// Customizando os pilares
let pilares = document.querySelector('.pilares');
let pilar = ["img/Pilar1.png", "img/Pilar2.png", "img/Pilar3.png"];
let nomePilar = ["Link", "Ritmo", "Upgrade"]
let pilarHover = ["União para que todos os lados sejam entendidos", "Convívio em harmonia com colaboradores e parceiros", "Jornada de evolução contínua que nos impulsiona sempre à frente."]

for (let i = 0; i < link.length; i++) {

  let pilaresElement = document.createElement('div'); // Cria um novo elemento de item de lista
  pilaresElement.classList.add('col-md-4', 'col-sm-12');

  pilaresElement.innerHTML = `<img src="${pilar[i]}" alt="${nomePilar[i]}" class="mb-3">`;

  pilares.appendChild(pilaresElement); // Adiciona o elemento de item de lista ao elemento de lista principal

  // TESTE - Alterando os pilares no Hover

  pilaresElement.addEventListener('mouseover', function() {
    pilaresElement.style.opacity = 0.25; // Define a opacidade para 0

    setTimeout(function() {
        pilaresElement.innerHTML = `<div class="p-4 text-light mb-3" style="background-color: #203554">
        <h5>${nomePilar[i]}</h5>
        <p>${pilarHover[i]}</p>
        </div>`;
        pilaresElement.style.opacity = 1; // Define a opacidade de volta para 1
    }, 20); // Tempo da transição em milissegundos
    
  });
  
  pilaresElement.addEventListener('mouseout', function() {
    pilaresElement.innerHTML = `<img src="${pilar[i]}" alt="${nomePilar[i]}" class="mb-3">`;
  });

}

// Customizando contatos
let contatosLink = document.querySelector('.contatosLink');
let contatosDados = ['Whatsapp', 'Email', 'Instagram'];
let contatoImg = ['img/whatsapp.png', 'img/email.png', 'img/instagram.png'];
let contatosURL = ['https://wa.me/5511940038574', 'mailto:contato@quartarede.com.br', 'https://www.instagram.com/quartarede/'];

for(let i = 0; i < contatosDados.length; i++){
  let contatosElement = document.createElement('div'); // Cria um novo elemento de contato
  contatosElement.classList.add('col-sm-12', 'col-md-4', 'mb-3');
  contatosElement.innerHTML = `<div class="card">
    <div class="card-body">
      <img src="${contatoImg[i]}" alt="${contatosDados[i]}" class="contatoImg mb-4">
      <a href="${contatosURL[i]}" class="btn btn-outline-dark d-block">Fale conosco</a>
    </div>
  </div>`;

  contatosLink.appendChild(contatosElement);
}

