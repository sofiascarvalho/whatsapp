/*'use strict'

async function buscarContatos() {
    const url = `https://giovanna-whatsapp.onrender.com/v1/whatsapp/contatos/11987876567`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

function criarContato(contat) {
    const contato = document.getElementById('conversasContatos')
    const novoContato=document.createElement('div')
    novoContato.src=link.dowload_url
    contato.appendChild(novoContato)
    novoContato.classList.add('contatos')

    const conversas=document.getElementById('conversas')
    const contatoConversa=document.createElement('div')
    contatoConversa.src=link.dowload_url
    conversas.appendChild(contatoConversa)
    contatoConversa.classList.add('conversa')
}

async function preencherContatos() {
    const contatos = await buscarContatos()
    const listaConversas = document.getElementById('conversasContatos')

    listaConversas.replaceChildren = ''

    contatos.forEach(criarConversaContato)
}

window.onload=preencherContatos*/


'use strict'

async function buscarContatos() {
    const url = `https://giovanna-whatsapp.onrender.com/v1/whatsapp/contatos/11987876567`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function criarContato(contato) {
    const listaContatos = document.getElementById('conversasContatos');

    const contatoDiv = document.createElement('div');
    contatoDiv.classList.add('contato');

    const profile = document.createElement('img');
    imagem.src = contato.imagem || './img/user.png'; // imagem padrão se não vier da API

    const textoDiv = document.createElement('div');
    textoDiv.classList.add('textoContato');

    const name = document.createElement('h2');
    name.textContent = contato.name;

    const ultimaMensagem = document.createElement('p');
    ultimaMensagem.textContent = contato.ultimaMensagem;

    textoDiv.appendChild(nome);
    textoDiv.appendChild(ultimaMensagem);

    contatoDiv.appendChild(imagem);
    contatoDiv.appendChild(textoDiv);

    listaContatos.appendChild(contatoDiv);
}

async function preencherContatos() {
    const contatos = await buscarContatos();
    const listaContatos = document.getElementById('conversasContatos');

    listaContatos.innerHTML = ''; // limpa antes de preencher

    contatos.forEach(criarContato);
}

// Executa quando a página carregar
window.onload = preencherContatos;
