let likes = 0; // Pode ficar em cima ou embaixo nesse casa, pois a função só será ativada depois 

// Função é só a definição de algo a ser feito quando alguém invocá-la. O browser lê todo o código, reconhece a função, mas só a ativa quando for solicitada (através de um clique no botão, etc)

function adicionarLike() {
    likes = likes + 1;
    botao.innerHTML = likes + ' Likes';
}
