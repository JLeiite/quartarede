// Customizando contatos
let socialMedia = document.querySelector('.socialMedia');
let contatosDados = ['Whatsapp', 'Email', 'Instagram'];
let contatoImg = ['img/contact/whatsapp.png', 'img/contact/email.png', 'img/contact/instagram.png'];
let contatosURL = ['https://wa.me/5511940038574', 'mailto:contato@quartarede.com.br', 'https://www.instagram.com/quartarede/'];

for(let i = 0; i < contatosDados.length; i++){
  let socialElement = document.createElement('div'); // Cria um novo elemento de contato
  socialElement.classList.add('col-sm-2', 'mb-5');
  socialElement.innerHTML = `<a href="${contatosURL[i]}">
      <img src="${contatoImg[i]}" alt="${contatosDados[i]}" class="socialImg p-3 mb-1"></a>`;

  socialMedia.appendChild(socialElement);
}