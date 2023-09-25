const responsivo = document.getElementById('button-responsive')
const aparecer = document.getElementById('aparecer')
let chave = false

function enable(){
    responsivo.classList.add('openjs')
    aparecer.classList.add('open')

    chave = true

}


function disable(){
    responsivo.classList.remove('openjs')
    aparecer.classList.remove('open')
    chave = false
}



function activeOrNot(){
    if(chave === false){
        enable()
        
    }
    else{
        disable()
    }
}


responsivo.addEventListener('click', activeOrNot)