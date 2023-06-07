function marcarLinkClicado(elemento) {
    // Remove a classe 'ativo' de todos os links
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('ativo');
    }

    // Adiciona a classe 'ativo' ao link clicado
    elemento.classList.add('ativo');
}