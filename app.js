'use strict';

async function buscarContatos() {
    const url = `https://giovanna-whatsapp.onrender.com/v1/whatsapp/contatos/11987876567`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function criarContato(contato) {
    const listaContatos = document.getElementById('conversasContatos');

    const contatoDiv = document.createElement('button');
    contatoDiv.classList.add('contato');

    const textoDiv = document.createElement('div');
    textoDiv.classList.add('textoContato');

    const name = document.createElement('h2');
    name.textContent = contato.name;

    const ultimaMensagem = document.createElement('p');
    ultimaMensagem.textContent = contato.ultimaMensagem;

    textoDiv.appendChild(name);
    textoDiv.appendChild(ultimaMensagem);

    contatoDiv.appendChild(textoDiv);
    listaContatos.appendChild(contatoDiv);

    contatoDiv.addEventListener('click', async function () {
        await preencherConversa(contato.name);
    });
}

async function preencherContatos() {
    const contatos = await buscarContatos();
    const listaContatos = document.getElementById('conversasContatos');

    listaContatos.replaceChildren(); // Corrigido: agora limpa corretamente os filhos

    console.log(contatos);

    contatos.dados_contato.forEach(criarContato);
}

async function preencherConversa(name) {
    const contatos = await buscarConversa(name);
    const conversa = contatos.conversas[0];
    criarConversaContato(conversa);
}

async function buscarConversa(name) {
    const url = `https://giovanna-whatsapp.onrender.com/v1/whatsapp/conversas?numero=11987876567&contato=${name}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function criarConversaContato(conversa) {
    const conversaContato = document.getElementById('conversas')

    const chat = document.createElement('div');
    chat.classList.add('mensagem');

    const conteudo = document.createElement('div');
    conteudo.classList.add('dadosContato');

    const nome = document.createElement('h2');
    nome.textContent = conversa.name;

    conteudo.appendChild(nome);

    const messages = document.createElement('div');
    messages.classList.add('mensagens');

    conversa.conversas.forEach(mensagens => {
        const message1 = document.createElement('div');
        message1.classList.add('message1');

        const remetente = document.createElement('p');
        remetente.classList.add('remetente');
        remetente.textContent = `${mensagens.sender}`;
        message1.appendChild(remetente);

        const message2 = document.createElement('div');
        message2.classList.add('message2');

        const enviando = document.createElement('p');
        enviando.classList.add('enviando');
        enviando.textContent = `${mensagens.content}`;
        message2.appendChild(enviando);

        messages.appendChild(message1);
        messages.appendChild(message2);
    });

    chat.appendChild(conteudo);
    chat.appendChild(messages);

    conversaContato.appendChild(chat);
}

// Garante que o DOM esteja pronto
window.onload = preencherContatos;
