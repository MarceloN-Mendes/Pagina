const buscar = document.getElementById('buscar');
const lista = document.getElementById('contPes');
const content = document.getElementById('produtos')
const secPes = document.getElementById('pesquisa')
const body = document.querySelector("body")

buscar.addEventListener('input', function() {
    const pesquisado = buscar.value.toLowerCase();

    const itens = lista.querySelectorAll('li'); 

    if (pesquisado === "") {
        content.style.display = 'none'
    } else {
        content.style.display = 'flex'
        itens.forEach(item => {
            if (item.textContent.toLowerCase().includes(pesquisado)) {
                item.style.display = ''; 
            } else {
                item.style.display = 'none'; 
            }
        });
    }
});
function pesquisa(){
    secPes.classList.remove('hide')
    body.classList.add('overFlow')
}

function fechar(){
    secPes.classList.add('hide')
    body.classList.remove('overFlow')
}