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

/*=======MENU=======*/
const secMenu = document.getElementById('menu')

function menu(){
    secMenu.classList.remove('hide')
    body.classList.add('overFlow')
}

function link(){
    secMenu.classList.add('hide')
    body.classList.remove('overFlow')
}

function fecharMenu(){
    secMenu.classList.add('hide')
    body.classList.remove('overFlow')
}

/*=======Diferencial========*/
const suste = document.getElementById('sust')
const inove = document.getElementById('inov')
const qualie = document.getElementById('quali')
const suportes = document.getElementById('suporte')
const segurancas = document.getElementById('seguranca')





function sust() {
    suste.classList.toggle('hide')
} function inov(){
    inove.classList.toggle('hide')
} function quali(){
    qualie.classList.toggle('hide')
} function suporte(){
    suportes.classList.toggle('hide')
} function seguranca(){
    segurancas.classList.toggle('hide')
}

