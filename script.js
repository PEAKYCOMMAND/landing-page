const responsivo = document.querySelector('.bi')
const aparecer = document.getElementById('aparecer')

let chave = false

function enable(){
    responsivo.classList.remove('bi-list')
    responsivo.classList.add('bi-x-lg')
    /*responsivo.classList.add('.bi-x-lg')*/
    aparecer.classList.add('open')

    chave = true

}


function disable(){
    responsivo.classList.remove('bi-x-lg')
    responsivo.classList.add('bi-list')
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