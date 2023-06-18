// Customizando os pilares
let pilares = document.querySelector('.pilares');
let pilar = ["img/Pilar1.png", "img/Pilar2.png", "img/Pilar3.png"];
let nomePilar = ["Link", "Ritmo", "Upgrade"]
let pilarHover = ["União para que todos os lados sejam entendidos", "Convívio em harmonia com colaboradores e parceiros", "Jornada de evolução contínua que nos impulsiona sempre à frente."]

for (let i = 0; i < link.length; i++) {

  let pilaresElement = document.createElement('div'); // Cria um novo elemento de item de lista
  pilaresElement.classList.add('col-md-4', 'col-sm-12');

  pilaresElement.innerHTML = `<img src="${pilar[i]}" alt="${nomePilar[i]}">`;

  pilares.appendChild(pilaresElement); // Adiciona o elemento de item de lista ao elemento de lista principal

  // TESTE - Alterando os pilares no Hover

  pilaresElement.addEventListener('mouseover', function() {
    pilaresElement.style.opacity = 0; // Define a opacidade para 0

    setTimeout(function() {
        pilaresElement.innerHTML = `<div class="p-4 text-light" style="background-color: #203554">
        <h5>${nomePilar[i]}</h5>
        <p>${pilarHover[i]}</p>
        </div>`;
        pilaresElement.style.opacity = 1; // Define a opacidade de volta para 1
    }, 20); // Tempo da transição em milissegundos
    
  });
  
  pilaresElement.addEventListener('mouseout', function() {
    pilaresElement.innerHTML = `<img src="${pilar[i]}" alt="${nomePilar[i]}">`;
  });

}

