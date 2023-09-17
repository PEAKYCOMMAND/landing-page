const responsivo = document.getElementById('button-responsive')

let chave = false

function enable(){
    responsivo.classList.add('open')
    chave = true
}


function disable(){
    responsivo.classList.remove('open')
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