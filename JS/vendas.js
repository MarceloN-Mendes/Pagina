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


/*========LOC=========*/

const Prod1 = document.getElementById('computador')
const Prod2 = document.getElementById('memoriaRam')
const Prod3 = document.getElementById('placaMae');
const Prod4 = document.getElementById('processador');
const Prod5 = document.getElementById('gabinete');
const Prod6 = document.getElementById('teclado');
const Prod7 = document.getElementById('mouse');
const Prod8 = document.getElementById('mousePad');
const Prod9 = document.getElementById('microfone');
const Prod10 = document.getElementById('camera');

const ativo = document.getElementsByClassName("active")
const ativoAgr = ativo[0]

function pesq1() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod1.classList.add("active");
    ativoAgr.classList.remove("active");  
}

function pesq2() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod2.classList.add("active");
    ativoAgr.classList.remove("active");  
}

function pesq3() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod3.classList.add("active");
    ativoAgr.classList.remove("active");  
}

function pesq4() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod4.classList.add("active");
    ativoAgr.classList.remove("active");  
}

function pesq5() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod5.classList.add("active");
    ativoAgr.classList.remove("active");  
}

function pesq6() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod6.classList.add("active");
    ativoAgr.classList.remove("active");  
}

function pesq7() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod7.classList.add("active");
    ativoAgr.classList.remove("active");  
}

function pesq8() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod8.classList.add("active");
    ativoAgr.classList.remove("active");  
}

function pesq9() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod9.classList.add("active");
    ativoAgr.classList.remove("active");  
}

function pesq10() {
    const ativo = document.getElementsByClassName("active");
    const ativoAgr = ativo[0];
        
    ativoAgr.classList.remove("active");    
    Prod10.classList.add("active");
    ativoAgr.classList.remove("active");  
}
