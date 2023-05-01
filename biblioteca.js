function chamarHtml(id, path) {
    fetch(`${path}`)
        .then(response => response.text())
        .then(data => {
            // Inserindo o conteúdo do arquivo HTML no elemento 'conteudo'
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error);
        });
}
