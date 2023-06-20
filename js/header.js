// Logo
let brand = document.querySelector('.navbar-brand');
let effect = 'animate__pulse';
let brandScr = 'img/QuartaRede.png';

// Add branding information
brand.innerHTML = `<img src="${brandScr}" alt="Quarta Rede">`;

brand.addEventListener('mouseout', toggleAnimation);

// Function to toggle the animation
function toggleAnimation() {
    brand.innerHTML = `<img class="animate__animated ${effect}" src="${brandScr}" alt="Quarta Rede">`;
}

// Customizando os links da página
let navLink = document.querySelector('.nav');
let link = ["TRABALHOS", "SOBRE NÓS", "CONTATO"];
let url = ["projetos.html", "index.html#sobreNos", "index.html#contato"];
let navDrop = document.querySelector('.dropdown-menu');

for (let i = 0; i < link.length; i++) {

  let listItemElement = document.createElement('div'); // Cria um novo elemento de item de lista
  listItemElement.innerHTML = `<li class="nav-item d-none d-sm-block"><a class="nav-link text-dark" aria-current="page" href="${url[i]}">${link[i]}</a></li>`;
  navLink.appendChild(listItemElement); // Adiciona o elemento de item de lista ao elemento de lista principal
  
  // Dropdown
  let navDropdown = document.createElement('li'); 
  navDropdown.innerHTML = `<a class="dropdown-item" href="${url[i]}">${link[i]}</a>`;

  navDrop.appendChild(navDropdown);
}

//VIDEO - Removing functions in Firefox
var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
});

//Loop though all Video tags and set Controls as false
$("video").click(function() {
  //console.log(this); 
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});