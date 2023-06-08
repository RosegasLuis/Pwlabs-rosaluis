function marcarLinkClicado(elemento) {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('ativo');
    }
    
    elemento.classList.add('ativo');
}